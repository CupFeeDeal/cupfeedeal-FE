"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// components
import useMap from "./useMap";
// store & hooks
import { useCafeListStore } from "@store/useCafeListStore";
import useSelectedCafeStore from "@store/useSelectedCafeStore";
import useDistance from "@app/search/_hooks/useDistance";

export default function CafeList() {
  const router = useRouter();
  const cafes = useCafeListStore((state) => state.cafes);

  const { map, getCurrentLocation, getMapOptions } = useMap();
  const { getDistance, formatDistance } = useDistance();

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
        console.error(error);
      }
    };

    calculateDistance();
  }, [cafes, getDistance, getCurrentLocation]);

  // 가격 표기법 포맷팅
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ko-KR").format(price);
  };

  // 특정 카페 클릭 시 상세 바텀시트로 이동
  const { setOldCenter } = useSelectedCafeStore();
  const handleClickDetail = (id: number) => {
    if (map) {
      const { center } = getMapOptions();
      setOldCenter(center);
    }
    // 바텀시트 열기
    router.push(`/search?id=${id}`);
  };

  return (
    <div className="flex flex-col w-full h-full bg-white pb-4">
      <div className="w-full h-11 py-3 flex items-center px-5 Body_2_med text-Grey-400 border-b border-b-[#B0B8C1]">
        거리순
      </div>
      {cafeList.map((cafe, index) => (
        <div
          key={index}
          className="flex flex-row w-full items-center py-4 px-5 gap-3 cursor-pointer"
          onClick={() => handleClickDetail(cafe.id)}
        >
          <span className="w-[7.5rem] h-[7.5rem] shrink-0">
            <Image
              src={
                cafe.image_url ? cafe.image_url.trim() : "/svg/placeholder.png"
              }
              alt={cafe.image_url ? cafe.image_url : "img"}
              width={120}
              height={120}
              className="w-full h-full rounded-lg"
            />
          </span>
          <span className="flex flex-col flex-grow-0 overflow-hidden">
            <div className="Caption_bold text-Main_Blue mb-1">
              {formatDistance(cafe.distance)}
            </div>
            <div className="Subhead_1_bold text-Grey-900 mb-2">{cafe.name}</div>
            <div className="flex flex-row gap-3 mb-1">
              <span className="Body_2_bold text-Grey-900 shrink-0">주소</span>
              <span className="Body_2_med text-Grey-600 whitespace-nowrap overflow-hidden text-ellipsis">
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
