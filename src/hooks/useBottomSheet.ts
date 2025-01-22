import { useRef, useEffect } from "react";
import { MIN_Y, MAX_Y } from "@constants/BottomSheetOption";
import useSelectedCafeStore from "@store/useSelectedCafeStore";

interface BottomSheetMetrics {
  touchStart: {
    sheetY: number;
    touchY: number;
  };
  touchMove: {
    prevTouchY?: number;
    movingDirection: "none" | "down" | "up";
  };
  isContentAreaTouched: boolean;
}

export default function useBottomSheet() {
  const sheet = useRef<HTMLDivElement>(null); // 바텀시트 전체 DOM 요소
  const content = useRef<HTMLDivElement>(null); // 바텀시트 내부 스크롤 가능 영역

  const { isSheetOpen, setIsSheetOpen } = useSelectedCafeStore();
  console.log("isSheetOpen: ", isSheetOpen);

  useEffect(() => {
    // 화면 스크롤 잠금
    const timeout = setTimeout(() => {
      if (isSheetOpen) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
    }, 0);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "auto"; // 초기화
    };
  }, [isSheetOpen]);

  // 터치 동작 관련 상태 관리
  const metrics = useRef<BottomSheetMetrics>({
    // 터치 시작 시
    touchStart: {
      sheetY: 0, // 바텀시트의 y좌표
      touchY: 0, // 터치 지점의 y좌표
    },
    // 터치 중
    touchMove: {
      prevTouchY: 0,
      movingDirection: "none",
    },
    isContentAreaTouched: false,
  });

  useEffect(() => {
    const canUserMoveBottomSheet = () => {
      const { touchMove, isContentAreaTouched } = metrics.current;

      if (!isContentAreaTouched) {
        return true;
      }

      if (sheet.current!.getBoundingClientRect().y !== MIN_Y) {
        return true;
      }

      if (touchMove.movingDirection === "down") {
        return content.current!.scrollTop <= 0;
      }
      return false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      const { touchStart } = metrics.current;
      touchStart.sheetY = sheet.current!.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0]; // 현재 터치 지점 좌표

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY === 0) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      // 터치 방향 계산
      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = "down";
      }

      if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = "up";
      }

      if (canUserMoveBottomSheet()) {
        e.preventDefault();

        const touchOffset = currentTouch.clientY - touchStart.touchY; // 터치 거리
        let nextSheetY = touchStart.sheetY + touchOffset; // 바텀시트 다음 위치

        // 바텀시트 다음 위치가 영역 내인지 확인
        if (nextSheetY <= MIN_Y) {
          nextSheetY = MIN_Y;
        }

        if (nextSheetY >= MAX_Y) {
          nextSheetY = MAX_Y;
        }

        // 바텀시트 위치 업데이트
        sheet.current!.style.setProperty(
          "transform",
          `translateY(${nextSheetY - MAX_Y}px)`
        );
      } else {
        document.body.style.overflowY = "hidden"; // 컨텐츠는 스크롤 방지
      }
    };

    const handleTouchEnd = () => {
      document.body.style.overflowY = "auto";
      const { touchMove } = metrics.current;

      const currentSheetY = sheet.current!.getBoundingClientRect().y; // 스크롤 방지 해제

      // 스냅 애니메이션
      if (currentSheetY !== MIN_Y) {
        if (touchMove.movingDirection === "down") {
          sheet.current!.style.setProperty("transform", "translateY(0)"); // 바텀시트 최하단으로 내리기
          setIsSheetOpen(false);
        }

        if (touchMove.movingDirection === "up") {
          sheet.current!.style.setProperty(
            "transform",
            `translateY(${MIN_Y - MAX_Y}px)`
          ); // 바텀시트 최상단으로 올리기
          setIsSheetOpen(true);
        }
      }

      metrics.current = {
        touchStart: {
          sheetY: 0,
          touchY: 0,
        },
        touchMove: {
          prevTouchY: 0,
          movingDirection: "none",
        },
        isContentAreaTouched: false,
      };
    };

    if (!sheet.current || !content.current) return;
    sheet.current!.addEventListener("touchstart", handleTouchStart);
    sheet.current!.addEventListener("touchmove", handleTouchMove);
    sheet.current!.addEventListener("touchend", handleTouchEnd);
  }, [setIsSheetOpen]);

  useEffect(() => {
    const handleTouchStart = () => {
      metrics.current!.isContentAreaTouched = true;
    };

    if (!content.current) return;
    content.current!.addEventListener("touchstart", handleTouchStart);
  }, []);

  return { sheet, content };
}
