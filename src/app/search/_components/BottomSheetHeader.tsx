import { useEffect, useState } from "react";
import { BottomLine, Back } from "@assets/icons";
import useSelectedCafeStore from "@store/useSelectedCafeStore";

const BottomSheetHeader = () => {
  const { showBottomSheet, isSheetOpen } = useSelectedCafeStore();
  const [showBackIcon, setShowBackIcon] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (showBottomSheet) {
      const timer = setTimeout(() => {
        setShowBackIcon(isSheetOpen);
        setFade(true); // 페이드 효과 시작
      }, 100);

      return () => {
        clearTimeout(timer); // 타이머 정리
        setFade(false); // 상태 초기화
      };
    } else {
      setFade(false);
    }
  }, [isSheetOpen]);

  return (
    <div
      className={`transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {showBackIcon ? (
        <div className="bg-white">
          <Back className="-rotate-90 mt-3 ml-5" />
        </div>
      ) : (
        <div className="bg-white h-8 px-5 pt-3 flex flex-col justify-start items-center rounded-t-2xl shadow-[0_0_17px_4px_rgba(116,116,128,0.21)]">
          <BottomLine width={30} height={4} />
        </div>
      )}
    </div>
  );
};

export default BottomSheetHeader;
