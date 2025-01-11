"use client";
import { useState } from "react";

import { FullHeart, EmptyHeart, Back } from "@assets/icons";

interface BottomSheetProps {
  id: number;
  name: string;
  address_map: string;
  image_url: string;
  address: string;
  operation_time: string;
  phone_num: string;
  sns_address: string;
  description: string;
  menu_board: string;
  is_like: boolean;
  is_subscription: boolean;
}

const labelStyle = `Body_2_bold text-Dark_Blue`;
const valueStyle = `Body_2_med text-Grey-800`;
const heartStyle = `w-5 h-5 flex justify-center items-center rounded-[0.625rem] shadow-[0_0_5px_0_rgba(153,153,159,0.26)]`;

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-row justify-between items-start mb-3">
      <span className={labelStyle}>{label}</span>
      <span className={`${valueStyle} w-[17.56rem]`}>{value}</span>
    </div>
  );
}

export default function BottomSheet({
  cafeInfo,
}: {
  cafeInfo: BottomSheetProps;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <Back className="-rotate-90 mt-3 ml-5" />
      ) : (
        <div className="w-full h-7">false</div>
      )}
      <div className="w-full px-5 mt-5">
        {/*거리*/}
        <div className="Caption_bold text-Grey-500">
          {cafeInfo.address_map}m
        </div>

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
          {cafeInfo.menu_board}
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
        <InfoRow label="SNS" value={cafeInfo.sns_address} />

        {/*카페소개*/}
        <div className={`${labelStyle} mt-6`}>카페 소개</div>
        <div className={valueStyle}>{cafeInfo.description}</div>

        <div
          className={`flex w-full justify-center Body_1_bold rounded-xl px-6 py-[0.88rem] mt-[3.6rem] mb-[5.5rem] ${
            cafeInfo.is_subscription
              ? "bg-Main_Blue text-white cursor-pointer"
              : "bg-Grey-200 text-Grey-400"
          }`}
        >
          구독하기
        </div>
      </div>
    </>
  );
}
