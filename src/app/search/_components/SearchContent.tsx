"use client";

import { useEffect, useState } from "react";

// components
import SearchBar from "./SearchBar";
import SearchMenu from "./SearchMenu";
import Map from "./Map";
// api
import { searchApi } from "@api/search";
// store
import { useCafeListStore } from "@store/useCafeListStore";
import useSelectedCafeStore from "@store/useSelectedCafeStore";
import { useSearchParams } from "next/navigation";

const SearchContent = () => {
  // const { showBottomSheet } = useSelectedCafeStore();
  //const [searchKey, setSearchKey] = useState(""); // 검색버튼 눌렀을 때만 트리거되도록 하는 키
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [isLikeOnly, setIsLikeOnly] = useState(false);

  const cafes = useCafeListStore((state) => state.cafes);
  const setCafes = useCafeListStore((state) => state.setCafes);
  const { setSelectedCafeId, setShowBottomSheet } = useSelectedCafeStore();

  // 쿼리에 id값이 담겨 있을 경우, 해당하는 카페 select
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) return;
    setSelectedCafeId(Number(id));
    setShowBottomSheet(true);
  }, [id, setSelectedCafeId, setShowBottomSheet]);

  // 카페 리스트 가져오기
  const fetchCafes = async (query: string, like: boolean) => {
    try {
      const cafesData = await searchApi.getCafes(query, like);
      setCafes(cafesData);
    } catch (error) {
      console.log(error);
    }
  };
  // 검색어 or 좋아요 필터링
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
