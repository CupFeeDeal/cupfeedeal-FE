"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchMenu from "./SearchMenu";
import Map from "./Map";
import useSelectedCafeStore from "@store/useSelectedCafeStore";
import BottomSheet from "./(detail)/BottomSheet";

const SearchContent = () => {
  const { showBottomSheet } = useSelectedCafeStore();
  const [searchKey, setSearchKey] = useState(""); // 검색버튼 눌렀을 때만 트리거되도록 하는 키

  const handleSearch = (newQuery: string) => {
    setSearchKey(newQuery);
  };

  return (
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
  );
};

export default SearchContent;
