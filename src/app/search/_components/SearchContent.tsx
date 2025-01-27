"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// components
import SearchBar from "./SearchBar";
import SearchMenu from "./SearchMenu";
import Map from "./Map";
import BottomSheet from "./(detail)/BottomSheet";
// store
import useSelectedCafeStore from "@store/useSelectedCafeStore";
// types
import { Cafe, CafeDetail } from "src/types/search";
import { useCafeListStore } from "@store/useCafeListStore";

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
  //const [cafes, setCafes] = useState<Cafe[]>(initialCafes);

  const [query, setQuery] = useState(initialQuery);
  const [isLikeOnly, setIsLikeOnly] = useState(initialLike);

  useEffect(() => {
    setCafes(initialCafes);
  }, [initialCafes, setCafes]);

  const selectedId = Number(searchParams.get("id"));
  useEffect(() => {
    if (!selectedId) {
      // setSelectedCafeId(null);
      setShowBottomSheet(false);
      return;
    }
    // setSelectedCafeId(detailId);
    setShowBottomSheet(true);
  }, [selectedId]);

  const { showBottomSheet, setSelectedCafeId, setShowBottomSheet } =
    useSelectedCafeStore();

  // 쿼리에 id값이 담겨 있을 경우, 해당하는 카페 select
  //const id = searchParams.get("id");

  // 초기 카페 리스트 SSR 요청하여 state에 반영
  // useEffect(() => {
  //   setCafes(initialCafes);
  // }, [initialCafes, setCafes]);

  // 검색어 or 좋아요 필터링에 따른 카페 리스트 CSR 재요청
  // useEffect(() => {
  //   const fetchCafes = async () => {
  //     try {
  //       const cafesData = await searchApi.getCafes(query, isLikeOnly);
  //       setCafes(cafesData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchCafes();
  // }, [query, isLikeOnly]);

  // 검색어 입력 핸들링
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    router.push(`/search?q=${encodeURIComponent(newQuery)}&like=${isLikeOnly}`);
  };

  // 좋아요 필터 핸들링
  const toggleLike = () => {
    // setIsLikeOnly((prev) => !prev);
    const isLike = !isLikeOnly;
    setIsLikeOnly(isLike);
    router.push(`/search?q=${encodeURIComponent(query)}&like=${isLike}`);
  };

  // 바텀시트 내 좋아요 여부 변경
  // const updateCafeLikeStatus = (cafeId: number, newLike: boolean) => {
  //   setCafes((prev) =>
  //     prev.map((c) => (c.id === cafeId ? { ...c, is_like: newLike } : c))
  //   );
  // };

  return (
    <div className="w-full flex-1 relative">
      <SearchBar onSearch={handleSearch} currQuery={query} />
      <SearchMenu isLikeOnly={isLikeOnly} toggleLike={toggleLike} />
      <Map cafes={cafes} />
      {showBottomSheet && (
        <div>
          <BottomSheet
            // updateCafeLikeStatus={updateCafeLikeStatus}
            detailId={detailId}
            detailCafe={detailCafe}
          />
        </div>
      )}
    </div>
  );
};

export default SearchContent;
