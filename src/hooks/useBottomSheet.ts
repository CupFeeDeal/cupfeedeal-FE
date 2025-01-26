import { useRef, useEffect, useCallback } from "react";
import useSelectedCafeStore from "@store/useSelectedCafeStore";

let CLOSED_Y = 0;
let PARTIAL_Y = 0;
const OPEN_Y = 0;

interface BottomSheetMetrics {
  touchStart: {
    sheetY: number; // touchstart 시점의 바텀시트 translateY
    touchY: number; // 터치 시작지점 Y
  };
  touchMove: {
    prevTouchY: number;
    movingDirection: "none" | "down" | "up";
  };
  isContentAreaTouched: boolean;
}

export default function useBottomSheet() {
  const sheet = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  const { showBottomSheet, isSheetOpen, setShowBottomSheet, setIsSheetOpen } =
    useSelectedCafeStore();

  // 터치 상태 관리
  const metrics = useRef<BottomSheetMetrics>({
    touchStart: { sheetY: 0, touchY: 0 },
    touchMove: { prevTouchY: 0, movingDirection: "none" },
    isContentAreaTouched: false,
  });

  const getCurrentSheetY = () => {
    if (!sheet.current) return CLOSED_Y;
    const transformValue = sheet.current.style.transform;
    if (!transformValue.includes("translateY")) return CLOSED_Y;

    const pxString = transformValue.replace("translateY(", "").replace(")", "");
    return parseFloat(pxString);
  };

  const setSheetPosition = (nextY: number) => {
    if (sheet.current) {
      sheet.current.style.transform = `translateY(${nextY}px)`;
    }
  };

  /**
   * showBottomSheet / isSheetOpen 값에 따라
   * - false/false => 닫힘(CLOSED)
   * - true/false  => 부분 펼침(PARTIAL)
   * - true/true   => 완전 펼침(OPEN)
   */
  const syncSheetPositionWithStore = useCallback(() => {
    if (!sheet.current) return;

    if (!showBottomSheet) {
      // 닫힘
      setSheetPosition(CLOSED_Y);
      return;
    }
    if (isSheetOpen) {
      setSheetPosition(OPEN_Y);
    } else {
      setSheetPosition(PARTIAL_Y);
    }
  }, [showBottomSheet, isSheetOpen]);

  // windowHeight, 스냅 포인트 계산
  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowHeight = window.innerHeight;
      CLOSED_Y = windowHeight;
      PARTIAL_Y = windowHeight - 253; // 부분 펼침
    }
    syncSheetPositionWithStore();
  }, [syncSheetPositionWithStore]);

  // showBottomSheet / isSheetOpen 변화를 감지해 위치 동기화
  useEffect(() => {
    syncSheetPositionWithStore();
  }, [showBottomSheet, isSheetOpen, syncSheetPositionWithStore]);

  // body 스크롤 막기
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!showBottomSheet) {
      document.body.style.overflow = "auto";
    } else {
      if (isSheetOpen) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
    }
  }, [showBottomSheet, isSheetOpen]);

  // 터치 이벤트 로직
  const canUserMoveBottomSheet = useCallback(() => {
    const { isContentAreaTouched, touchMove } = metrics.current;

    // 1) 헤더 쪽을 터치한 경우 시트 이동 가능
    if (!isContentAreaTouched) return true;

    // 2) 이미 완전 펼침 상태에서 더 위로 드래그 시 내부 스크롤만
    const currentSheetY = getCurrentSheetY();
    if (currentSheetY === OPEN_Y && touchMove.movingDirection === "up") {
      return false;
    }

    // 3) 부분 펼침 이하일 시 시트 이동 가능
    return true;
  }, []);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const { touchStart, touchMove } = metrics.current;
    touchStart.touchY = e.touches[0].clientY;
    touchStart.sheetY = getCurrentSheetY();
    touchMove.prevTouchY = touchStart.touchY;
    touchMove.movingDirection = "none";
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouchY = e.touches[0].clientY;

      // 이동 방향 판별
      if (touchMove.prevTouchY < currentTouchY) {
        touchMove.movingDirection = "down";
      } else if (touchMove.prevTouchY > currentTouchY) {
        touchMove.movingDirection = "up";
      }
      touchMove.prevTouchY = currentTouchY;

      if (canUserMoveBottomSheet()) {
        e.preventDefault(); // 바텀시트 드래그 시 body 스크롤 방지
        const touchOffset = currentTouchY - touchStart.touchY;
        let nextY = touchStart.sheetY + touchOffset;

        // 범위 제한
        if (nextY < OPEN_Y) nextY = OPEN_Y;
        if (nextY > CLOSED_Y) nextY = CLOSED_Y;

        setSheetPosition(nextY);
      }
    },
    [canUserMoveBottomSheet]
  );

  const handleTouchEnd = useCallback(() => {
    const currentY = getCurrentSheetY();
    //const { movingDirection } = metrics.current.touchMove;

    const midOpenPartial = (OPEN_Y + PARTIAL_Y) / 2;
    const midPartialClosed = (PARTIAL_Y + CLOSED_Y) / 2;

    if (currentY < midOpenPartial) {
      // OPEN
      setSheetPosition(OPEN_Y);
      setShowBottomSheet(true);
      setIsSheetOpen(true);
    } else if (currentY > midPartialClosed) {
      // CLOSED
      setSheetPosition(CLOSED_Y);
      setShowBottomSheet(false);
      setIsSheetOpen(false);
    } else {
      // PARTIAL
      setSheetPosition(PARTIAL_Y);
      setShowBottomSheet(true);
      setIsSheetOpen(false);
    }

    // touch 상태 리셋
    metrics.current = {
      touchStart: { sheetY: 0, touchY: 0 },
      touchMove: { prevTouchY: 0, movingDirection: "none" },
      isContentAreaTouched: false,
    };
  }, [setIsSheetOpen, setShowBottomSheet]);

  const handleContentTouchStart = () => {
    // 내부 스크롤 영역 터치 시작
    metrics.current.isContentAreaTouched = true;
  };

  // 이벤트 바인딩
  useEffect(() => {
    const sheetElement = sheet.current;
    const contentElement = content.current;
    if (!sheet.current || !content.current) return;

    sheet.current.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    sheet.current.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    sheet.current.addEventListener("touchend", handleTouchEnd);

    content.current.addEventListener("touchstart", handleContentTouchStart);

    return () => {
      sheetElement?.removeEventListener("touchstart", handleTouchStart);
      sheetElement?.removeEventListener("touchmove", handleTouchMove);
      sheetElement?.removeEventListener("touchend", handleTouchEnd);

      contentElement?.removeEventListener(
        "touchstart",
        handleContentTouchStart
      );
    };
  }, [
    setShowBottomSheet,
    setIsSheetOpen,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  ]);

  return { sheet, content };
}
