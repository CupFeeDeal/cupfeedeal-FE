"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// components
import BottomSheetContent from "./BottomSheetContent";
import BottomSheetHeader from "./BottomSheetHeader";

// api
import { searchApi } from "@api/search";
// types
import { CafeDetail } from "src/types/search";
// store & hooks
import useSelectedCafeStore from "@store/useSelectedCafeStore";
import useBottomSheet from "@hooks/useBottomSheet";

const BottomSheet = () => {
  const { sheet, content } = useBottomSheet();
  const { selectedCafeId } = useSelectedCafeStore();

  const [cafe, setCafe] = useState<CafeDetail>();

  // 카페 상세 정보 받아오기
  useEffect(() => {
    const fetchCafeDetail = async () => {
      try {
        const cafeData = await searchApi.getCafeDetail(selectedCafeId || 1);
        setCafe(cafeData);
        console.log(cafeData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCafeDetail();
  }, [selectedCafeId]);

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
      <BottomSheetHeader />
      <div ref={content} className="flex-1 overflow-auto">
        <BottomSheetContent cafeInfo={cafe} />
      </div>
    </motion.div>
  );
};

export default BottomSheet;
