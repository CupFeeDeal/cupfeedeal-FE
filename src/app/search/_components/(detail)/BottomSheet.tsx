"use client";

import { useEffect, useState } from "react";

import BottomSheetContent from "./BottomSheetContent";
import BottomSheetHeader from "./BottomSheetHeader";

import { motion } from "framer-motion";
import useBottomSheet from "@hooks/useBottomSheet";
import { searchApi } from "@api/search";
import { CafeDetail } from "src/types/search";
import useSelectedCafeStore from "@store/useSelectedCafeStore";
//import { MAX_Y, MIN_Y } from "@constants/BottomSheetOption";

const BottomSheet = () => {
  const { sheet, content } = useBottomSheet();
  //const { isSheetOpen } = useSelectedCafeStore();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight - 253);
    }
  }, []);

  const { selectedCafeId } = useSelectedCafeStore();

  // 카페 상세 정보 받아오기
  const [cafe, setCafe] = useState<CafeDetail>();

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
      bg-white
    `}
      style={{
        transform: "translateY(100%)",
      }}
      ref={sheet}
      // style={{ transform: `translateY(${isSheetOpen ? MIN_Y - MAX_Y : 0}px)` }}
    >
      <BottomSheetHeader />
      <div ref={content} className="flex-1 overflow-auto">
        <BottomSheetContent cafeInfo={cafe} />
      </div>
    </motion.div>
  );
};

export default BottomSheet;
