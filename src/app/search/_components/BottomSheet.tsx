"use client";

import { useEffect, useState } from "react";

import BottomSheetContent from "./BottomSheetContent";
import BottomSheetHeader from "./BottomSheetHeader";

import { motion } from "framer-motion";
import { cafeInfo } from "./mock";
import useBottomSheet from "@hooks/useBottomSheet";

const BottomSheet = () => {
  const { sheet, content } = useBottomSheet();

  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight - 253);
    }
  }, []);

  return (
    <motion.div
      className={`h-${height} flex flex-col absolute top-[calc(100%-253px)] right-0 left-0 z-30 transition-transform duration-[650ms] ease-out`}
      ref={sheet}
    >
      <BottomSheetHeader />
      <div ref={content} className="overflow-auto overscroll-auto">
        <BottomSheetContent cafeInfo={cafeInfo} />
      </div>
    </motion.div>
  );
};

export default BottomSheet;
