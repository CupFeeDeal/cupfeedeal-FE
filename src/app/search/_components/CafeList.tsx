"use client";

import useDistance from "@hooks/useDistance";
import { useCafeListStore } from "@store/useCafeListStore";
import useMap from "./useMap";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSelectedCafeStore from "@store/useSelectedCafeStore";

export default function CafeList() {
  const cafes = useCafeListStore((state) => state.cafes);
  const { map, getCurrentLocation, getMapOptions } = useMap();

  const { getDistance } = useDistance();

  const [cafeList, setCafeList] = useState<
    ((typeof cafes)[0] & { distance: number })[]
  >([]);

  // 현위치로부터의 거리 계산
  useEffect(() => {
    const calculateDistance = async () => {
      try {
        const [currentLat, currentLng] = await getCurrentLocation();
        const updatedCafes = cafes
          .map((cafe) => {
            const distance = getDistance(
              currentLat,
              currentLng,
              Number(cafe.address_lat),
              Number(cafe.address_lng)
            );
            return { ...cafe, distance: Math.round(distance) };
          })
          .sort((a, b) => a.distance - b.distance);

        setCafeList(updatedCafes);
      } catch (error) {
        console.error("Failed to calculate distances:", error);
      }
    };

    calculateDistance();
  }, [cafes, getDistance, getCurrentLocation]);

  // 거리 m->km 포맷팅
  const formatDistance = (distance: number) => {
    if (distance >= 1000) {
      return `${(distance / 1000).toFixed(2)}km`;
    }
    return `${distance}m`;
  };

  // 가격 표기법 포맷팅
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ko-KR").format(price);
  };

  const router = useRouter();

  // 특정 카페 클릭 시 상세 바텀시트로 이동
  const { setSelectedCafeId, setShowBottomSheet, setOldCenter } =
    useSelectedCafeStore();
  const handleClickDetail = (id: number) => {
    // const selectedCafe = cafeList.find((cafe) => cafe.id === id);
    if (map) {
      const { center } = getMapOptions();
      setOldCenter(center);
    }
    // 바텀시트 열기
    setSelectedCafeId(id);
    setShowBottomSheet(true);
    router.push("/search");
  };

  return (
    <div className="flex flex-col w-full h-full bg-white pb-4">
      <div className="h-11 py-3 flex items-center pl-5 Body_2_med text-Grey-400 border-b border-b-[#B0B8C1]">
        거리순
      </div>
      {cafeList.map((cafe, index) => (
        <div
          key={index}
          className="flex flex-row items-center py-4 px-5 gap-3 cursor-pointer"
          onClick={() => handleClickDetail(cafe.id)}
        >
          <span className="w-[7.5rem] h-[7.5rem] shrink-0">
            <Image
              src={cafe.image_url.trim()}
              alt={cafe.image_url}
              width={120}
              height={120}
              className="w-full h-full rounded-lg"
            />
          </span>
          <span>
            <div className="Caption_bold text-Main_Blue mb-1">
              {formatDistance(cafe.distance)}
            </div>
            <div className="Subhead_1_bold text-Grey-900 mb-2">{cafe.name}</div>
            <div className="flex flex-row gap-3 mb-1">
              <span className="Body_2_bold text-Grey-900 shrink-0">주소</span>
              <span className="Body_2_med text-Grey-600 truncate">
                {cafe.address}
              </span>
            </div>
            <div className="flex flex-row gap-3">
              <span className="Body_2_bold text-Grey-900">구독</span>
              <span className="Body_2_med text-Grey-600">
                ₩{formatPrice(cafe.price)}부터
              </span>
            </div>
          </span>
        </div>
      ))}
      <div className="w-6" />
    </div>
  );
}
