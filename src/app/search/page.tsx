"use client";

// components
import { Suspense } from "react";
import TopBar from "@common/TopBar";
import SearchContent from "./_components/SearchContent";
import BottomSheet from "./_components/(detail)/BottomSheet";
import useSelectedCafeStore from "@store/useSelectedCafeStore";

export default function Search() {
  const { showBottomSheet } = useSelectedCafeStore();

  return (
    <div className="flex w-full h-full flex-col">
      <TopBar title="커피딜 지도" />
      <div className="flex-1 overflow-auto">
        {/* useSearchParams쓴 거라.. suspense 안 쓰면 빌드 오류남. 나중에 로딩 화면으로 교체 */}
        <Suspense fallback={<div>로딩 중</div>}>
          <SearchContent />
        </Suspense>
      </div>
      {showBottomSheet && (
        <div>
          <BottomSheet />
        </div>
      )}
    </div>
  );
}
