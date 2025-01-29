"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

// components
import BottomSheetContent from "./BottomSheetContent";
import BottomSheetHeader from "./BottomSheetHeader";
// store & hooks
import useSelectedCafeStore from "@store/useSelectedCafeStore";
import useBottomSheet from "@app/search/_hooks/useBottomSheet";

interface BottomSheetProps {
  detailId?: number;
}

const BottomSheet = ({ detailId }: BottomSheetProps) => {
  const { sheet, content } = useBottomSheet();
  const { setIsSheetOpen } = useSelectedCafeStore();

  // 바텀시트 내리기
  let PARTIAL_Y = 0;
  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowHeight = window.innerHeight;
      PARTIAL_Y = windowHeight - 253;
    }
  }, []);

  const handleBackClick = () => {
    if (sheet.current) {
      sheet.current.style.transform = `translateY(${PARTIAL_Y}px)`;
      setIsSheetOpen(false);
    }
  };

  return (
    <motion.div
      className={`
      fixed top-0 left-0 right-0 bottom-0
      z-30 
      flex flex-col
      transition-transform duration-[450ms] ease-out
      bg-white max-w-[440px] mx-auto 
    `}
      style={{
        transform: "translateY(100%)",
      }}
      ref={sheet}
    >
      <BottomSheetHeader handleBackClick={handleBackClick} />
      <div ref={content} className="flex-1 overflow-auto">
        {detailId ? <BottomSheetContent cafeId={detailId} /> : null}
      </div>
    </motion.div>
  );
};

export default BottomSheet;
