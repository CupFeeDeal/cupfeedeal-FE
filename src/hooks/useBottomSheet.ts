import { useRef, useEffect } from "react";
import useSelectedCafeStore from "@store/useSelectedCafeStore";

/**
 * 바텀시트의 세 가지 스냅 포인트(px 단위)
 * - CLOSED(= 화면 아래, translateY(windowHeight))
 * - PARTIAL(= windowHeight - 253)
 * - OPEN(= 0)
 */
let CLOSED_Y = 0;
let PARTIAL_Y = 0;
const OPEN_Y = 0; // 항상 0

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

  // "바텀시트 열림/닫힘 상태"를 store에서 불러옴
  const { showBottomSheet, isSheetOpen, setShowBottomSheet, setIsSheetOpen } =
    useSelectedCafeStore();

  // === 터치 상태 관리 ===
  const metrics = useRef<BottomSheetMetrics>({
    touchStart: { sheetY: 0, touchY: 0 },
    touchMove: { prevTouchY: 0, movingDirection: "none" },
    isContentAreaTouched: false,
  });

  /**
   * 현재 sheet의 translateY(px)값 파싱
   */
  const getCurrentSheetY = () => {
    if (!sheet.current) return CLOSED_Y;
    const transformValue = sheet.current.style.transform; // "translateY(123px)"
    if (!transformValue.includes("translateY")) return CLOSED_Y;

    const pxString = transformValue.replace("translateY(", "").replace(")", "");
    return parseFloat(pxString);
  };

  /**
   * 바텀시트를 지정된 위치(px)로 이동
   */
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
  const syncSheetPositionWithStore = () => {
    if (!sheet.current) return;

    if (!showBottomSheet) {
      // 닫힘
      setSheetPosition(CLOSED_Y);
      return;
    }
    // showBottomSheet = true
    if (isSheetOpen) {
      // 완전 펼침
      setSheetPosition(OPEN_Y);
    } else {
      // 부분 펼침
      setSheetPosition(PARTIAL_Y);
    }
  };

  // === 초기 세팅: windowHeight, 스냅 포인트 계산 ===
  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowHeight = window.innerHeight;
      CLOSED_Y = windowHeight; // 완전히 바닥 아래
      PARTIAL_Y = windowHeight - 253; // 부분 펼침
    }
    // 마운트 시점에 한 번 동기화
    syncSheetPositionWithStore();
  }, []);

  // === store의 showBottomSheet / isSheetOpen 변화를 감지해, 위치 동기화 ===
  useEffect(() => {
    // 드래그 중이 아닐 때만 강제 업데이트해도 되지만
    // 여기서는 간단히 항상 업데이트
    syncSheetPositionWithStore();
  }, [showBottomSheet, isSheetOpen]);

  /**
   * body 스크롤 막기: "완전 펼침(OPEN) 상태"나 "부분 펼침"일 때는 body를 막을지?
   * - 원하는 UX에 맞춰 조정하시면 됩니다.
   */
  useEffect(() => {
    if (!showBottomSheet) {
      // 부분 펼침이든 완전 펼침이든 바디 스크롤 막기
      document.body.style.overflow = "auto";
    } else {
      if (isSheetOpen) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
    }
  }, [showBottomSheet]);

  // ===== 터치 이벤트 로직 =====
  const canUserMoveBottomSheet = () => {
    const { isContentAreaTouched, touchMove } = metrics.current;

    // 1) 헤더 쪽을 터치한 경우 => 시트 이동 가능
    if (!isContentAreaTouched) return true;

    // 2) 이미 완전 펼침(OPEN_Y=0) 상태에서 더 위로 드래그 => 내부 스크롤만
    const currentSheetY = getCurrentSheetY();
    if (currentSheetY === OPEN_Y && touchMove.movingDirection === "up") {
      return false;
    }

    // 3) 부분 펼침 이하라면 => 시트 이동 가능
    return true;
  };

  const handleTouchStart = (e: TouchEvent) => {
    const { touchStart, touchMove } = metrics.current;
    touchStart.touchY = e.touches[0].clientY;
    touchStart.sheetY = getCurrentSheetY();
    touchMove.prevTouchY = touchStart.touchY;
    touchMove.movingDirection = "none";
  };

  const handleTouchMove = (e: TouchEvent) => {
    const { touchStart, touchMove } = metrics.current;
    const currentTouchY = e.touches[0].clientY;

    // 이동 방향 판별
    if (touchMove.prevTouchY < currentTouchY) {
      touchMove.movingDirection = "down";
    } else if (touchMove.prevTouchY > currentTouchY) {
      touchMove.movingDirection = "up";
    }
    touchMove.prevTouchY = currentTouchY;

    // 시트가 움직여야 하는 상황인지 체크
    if (canUserMoveBottomSheet()) {
      e.preventDefault(); // 바텀시트 드래그 시 body 스크롤 방지
      const touchOffset = currentTouchY - touchStart.touchY;
      let nextY = touchStart.sheetY + touchOffset;

      // 범위 제한
      if (nextY < OPEN_Y) nextY = OPEN_Y; // 위로 너무 많이 당기는 것 방지
      if (nextY > CLOSED_Y) nextY = CLOSED_Y; // 아래로 너무 많이 내리는 것 방지

      setSheetPosition(nextY);
    }
  };

  const handleTouchEnd = () => {
    const currentY = getCurrentSheetY();
    const { movingDirection } = metrics.current.touchMove;

    // 3-snap 로직 (CLOSED_Y, PARTIAL_Y, OPEN_Y)
    // 현재 위치(currentY)가 어느 스냅 포인트에 더 가까운지 판별
    // 또는 움직인 방향(movingDirection)에 따라 과감히 스냅할 수도 있습니다.

    // 일단 간단히 "세 구간"으로 나누는 예:
    //  [0 ~ (PARTIAL_Y + OPEN_Y)/2] => OPEN
    //  [(PARTIAL_Y + OPEN_Y)/2 ~ (PARTIAL_Y + CLOSED_Y)/2] => PARTIAL
    //  [(PARTIAL_Y + CLOSED_Y)/2 ~ CLOSED_Y] => CLOSED

    const midOpenPartial = (OPEN_Y + PARTIAL_Y) / 2; // ~ (windowHeight-253)/2
    const midPartialClosed = (PARTIAL_Y + CLOSED_Y) / 2; // ~ windowHeight/2 + ...

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
  };

  const handleContentTouchStart = () => {
    // 내부 스크롤 영역 터치 시작
    metrics.current.isContentAreaTouched = true;
  };

  // 이벤트 바인딩
  useEffect(() => {
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
      sheet.current?.removeEventListener("touchstart", handleTouchStart);
      sheet.current?.removeEventListener("touchmove", handleTouchMove);
      sheet.current?.removeEventListener("touchend", handleTouchEnd);

      content.current?.removeEventListener(
        "touchstart",
        handleContentTouchStart
      );
    };
  }, [setShowBottomSheet, setIsSheetOpen]);

  return { sheet, content };
}
