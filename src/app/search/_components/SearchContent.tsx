"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// components
import SearchBar from "./SearchBar";
import SearchMenu from "./SearchMenu";
import Map from "./Map";
import BottomSheet from "./(detail)/BottomSheet";
// store
import { useCafeListStore } from "@store/useCafeListStore";
import useSelectedCafeStore from "@store/useSelectedCafeStore";
// types
import { Cafe, CafeDetail } from "src/types/search";

interface SearchContentProps {
  initialCafes: Cafe[];
  initialQuery: string;
  initialLike: boolean;
  detailId?: number;
  detailCafe?: CafeDetail | null;
}

const SearchContent = ({
  initialCafes,
  initialQuery,
  initialLike,
  detailId,
  detailCafe,
}: SearchContentProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { cafes, setCafes } = useCafeListStore();
  const [query, setQuery] = useState(initialQuery);
  const [isLikeOnly, setIsLikeOnly] = useState(initialLike);

  const { showBottomSheet, setShowBottomSheet } = useSelectedCafeStore();

  // SSR로 받아온 카페리스트 스토어에 저장
  useEffect(() => {
    setCafes(initialCafes);
  }, [initialCafes, setCafes]);

  // params에서 카페 id 추출하여 바텀시트 렌더링
  const selectedId = Number(searchParams.get("id"));
  useEffect(() => {
    if (!selectedId) {
      setShowBottomSheet(false);
      return;
    }
    setShowBottomSheet(true);
  }, [selectedId]);

  // 검색어 입력 핸들링
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    router.push(`/search?q=${encodeURIComponent(newQuery)}&like=${isLikeOnly}`);
  };

  // 좋아요 필터 핸들링
  const toggleLike = () => {
    const isLike = !isLikeOnly;
    setIsLikeOnly(isLike);
    router.push(`/search?q=${encodeURIComponent(query)}&like=${isLike}`);
  };

  return (
    <div className="w-full flex-1 relative">
      <SearchBar onSearch={handleSearch} currQuery={query} />
      <SearchMenu isLikeOnly={isLikeOnly} toggleLike={toggleLike} />
      <Map cafes={cafes} />
      {showBottomSheet && (
        <div>
          <BottomSheet detailId={detailId} detailCafe={detailCafe} />
        </div>
      )}
    </div>
  );
};

export default SearchContent;
