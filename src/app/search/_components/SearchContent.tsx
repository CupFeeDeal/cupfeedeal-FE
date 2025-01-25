"use client";

import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchMenu from "./SearchMenu";
import Map from "./Map";
// import useSelectedCafeStore from "@store/useSelectedCafeStore";
// import BottomSheet from "./(detail)/BottomSheet";
import { searchApi } from "@api/search";
import { useCafeListStore } from "@store/useCafeListStore";

const SearchContent = () => {
  // const { showBottomSheet } = useSelectedCafeStore();
  //const [searchKey, setSearchKey] = useState(""); // 검색버튼 눌렀을 때만 트리거되도록 하는 키
  const [query, setQuery] = useState("");
  const [isLikeOnly, setIsLikeOnly] = useState(false);
  const cafes = useCafeListStore((state) => state.cafes);
  const setCafes = useCafeListStore((state) => state.setCafes);

  // 카페 리스트 api 호출
  const fetchCafes = async (query: string, like: boolean) => {
    try {
      const cafesData = await searchApi.getCafes(query, like);
      setCafes(cafesData);
    } catch (error) {
      console.log(error);
    }
  };
  // 검색어 or 좋아요 필터링 시 api 호출
  useEffect(() => {
    fetchCafes(query, isLikeOnly);
  }, [query, isLikeOnly]);

  // 검색어 입력 핸들링
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
  };

  // 좋아요 필터 핸들링
  const toggleLike = () => {
    setIsLikeOnly((prev) => !prev);
  };

  return (
    <div className="w-full flex-1 relative">
      <SearchBar onSearch={handleSearch} />
      <SearchMenu isLikeOnly={isLikeOnly} toggleLike={toggleLike} />
      <Map cafes={cafes} />
    </div>
  );
};

export default SearchContent;
