"use client";
// components
import TopBar from "@common/TopBar";
import Map from "./_components/Map";
import SearchBar from "./_components/SearchBar";
import SearchMenu from "./_components/SearchMenu";
import BottomSheet from "./_components/BottomSheet";
import useSelectedCafeStore from "@store/useSelectedCafeStore";
import { useState } from "react";

export default function Search() {
  const { showBottomSheet } = useSelectedCafeStore();
  const [searchKey, setSearchKey] = useState(""); // 검색버튼 눌렀을 때만 트리거되도록 하는 키

  const handleSearch = (newQuery: string) => {
    setSearchKey(newQuery);
  };

  return (
    <div className="flex w-full flex-col">
      <TopBar title="커피딜 지도" />
      <div className="w-full flex-1 relative">
        <SearchBar onSearch={handleSearch} />
        <SearchMenu />
        <Map query={searchKey} />
        {showBottomSheet && (
          <div className="relative w-full h-full">
            <BottomSheet />
          </div>
        )}
      </div>
    </div>
  );
}
