"use client";

import { FullHeart, EmptyHeart, Instagram } from "@assets/icons";
import useDistance from "@hooks/useDistance";
import useSelectedCafeStore from "@store/useSelectedCafeStore";
import { useEffect, useState } from "react";
import { CafeDetail } from "src/types/search";
import useMap from "./useMap";

interface BottomSheetContentProps {
  cafeInfo: CafeDetail | undefined;
}

const labelStyle = `Body_2_bold text-Dark_Blue min-w-[49px]`;
const valueStyle = `Body_2_med text-Grey-800`;
const heartStyle = `w-5 h-5 flex justify-center items-center rounded-[0.625rem] shadow-[0_0_5px_0_rgba(153,153,159,0.26)]`;

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-row justify-between items-start mb-3 z-25 gap-4">
      <span className={labelStyle}>{label}</span>
      <span className={`${valueStyle} w-[17.56rem]`}>{value}</span>
    </div>
  );
}

const BottomSheetContent = ({ cafeInfo }: BottomSheetContentProps) => {
  const { isSheetOpen } = useSelectedCafeStore();
  const { getDistance } = useDistance();
  const { getCurrentLocation } = useMap();
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    const calculateDistance = async () => {
      if (cafeInfo) {
        try {
          // 현재 위치 가져오기
          const [currentLat, currentLng] = await getCurrentLocation();

          // 거리 계산
          const calculatedDistance = getDistance(
            currentLat,
            currentLng,
            Number(cafeInfo.address_lat),
            Number(cafeInfo.address_lng)
          );
          setDistance(Math.round(calculatedDistance));
        } catch (error) {
          console.error("Failed to get current location:", error);
        }
      }
    };

    calculateDistance();
  }, [cafeInfo, getDistance, getCurrentLocation]);

  if (!cafeInfo) {
    return <div className="w-full h-full bg-white"></div>;
  }

  return (
    <div
      className={`bg-white z-30 overflow-scroll pb-[5.5rem] ${
        isSheetOpen ? "min-h-screen" : "max-h-full"
      } `}
    >
      <div className={`w-full px-5 ${isSheetOpen ? "pt-5" : ""}`}>
        {/*거리*/}
        <div className="Caption_bold text-Grey-500">{distance}m</div>

        {/*이름 & 좋아요 여부*/}
        <div className="flex flex-row items-center my-1">
          <span className="Headline_3 mr-2">{cafeInfo.name}</span>
          <span>
            {cafeInfo.is_like ? (
              <span className={`${heartStyle} bg-Main_Blue`}>
                <FullHeart width={11} height={11} />
              </span>
            ) : (
              <span className={`${heartStyle} bg-white`}>
                <EmptyHeart width={11} height={11} />
              </span>
            )}
          </span>
        </div>

        {/*메뉴 & 구독권 종류*/}
        <div className=" Body_2_bold text-Main_Blue mb-5">
          {cafeInfo.menu}∙2주권∙4주권
        </div>

        {/*대표 이미지*/}
        <div className="flex flex-row w-full gap-3 mb-7">
          <span className="w-[10.5625rem] h-[10.5625rem] bg-Grey-300 rounded-xl"></span>
          <span className="w-[10.5625rem] h-[10.5625rem] bg-Grey-300 rounded-xl"></span>
        </div>

        {/*세부 정보*/}
        <InfoRow label="주소" value={cafeInfo.address} />
        <InfoRow label="영업시간" value={cafeInfo.operation_time} />
        <InfoRow label="전화번호" value={cafeInfo.phone_num} />
        {/* <InfoRow label="SNS" value={cafeInfo.sns_address} /> */}
        <div className="flex flex-row justify-between items-center mb-3 z-25">
          <span className={labelStyle}>SNS</span>
          <span className="w-6 h-6 ml-4 mr-2 flex shrink-0">
            <Instagram className="w-full h-full" />
          </span>
          <span className={`${valueStyle} w-[17.56rem]`}>
            {cafeInfo.sns_address}
          </span>
        </div>

        {/*카페소개*/}
        <div className={`${labelStyle} mt-6`}>카페 소개</div>
        <div className={`${valueStyle} mt-2`}>{cafeInfo.description}</div>

        <div
          className={`flex w-full justify-center Body_1_bold rounded-xl px-6 py-[0.88rem] mt-[3.6rem] ${
            cafeInfo.is_subscription
              ? "bg-Main_Blue text-white cursor-pointer"
              : "bg-Grey-200 text-Grey-400"
          }`}
        >
          구독하기
        </div>
      </div>
    </div>
  );
};

export default BottomSheetContent;
