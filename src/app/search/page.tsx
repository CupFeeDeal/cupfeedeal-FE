"use client";

// components
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
        <SearchContent />
      </div>
      {showBottomSheet && (
        <div>
          <BottomSheet />
        </div>
      )}
    </div>
  );
}
