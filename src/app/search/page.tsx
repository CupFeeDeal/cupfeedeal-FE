"use client";
// components
import TopBar from "@common/TopBar";
import Map from "./_components/Map";
import SearchBar from "./_components/SearchBar";
import SearchMenu from "./_components/SearchMenu";
import BottomSheet from "./_components/BottomSheet";
import useSelectedCafeStore from "@store/useSelectedCafeStore";

export default function Search() {
  const { showBottomSheet } = useSelectedCafeStore();

  return (
    <div className="flex w-full flex-col">
      <TopBar title="커피딜 지도" />
      <div className="w-full flex-1 relative">
        <SearchBar />
        <SearchMenu />
        <Map />
        {showBottomSheet && (
          <div className="relative w-full h-full">
            <BottomSheet />
          </div>
        )}
      </div>
    </div>
  );
}
