"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// components
import CancelAfModal from "@app/subscription/_components/modal/CancelAfModal";
import CancelBfModal from "@app/subscription/_components/modal/CancelBfModal";
// icons
import { Calendar, Price } from "@assets/icons";
// types
import { Subscription } from "src/types/mypage";

interface HistoryItemProps {
  item: Subscription;
}

// 버튼 스타일
const baseBtnStyle =
  "cursor-pointer flex w-full rounded-[10px] py-[10px] justify-center Body_2_bold";
const cancelBtnStyle = `${baseBtnStyle} bg-Pale_Blue_1`;
const buyBtnStyle = `${baseBtnStyle} bg-Main_Blue text-white`;

const HistoryCard = ({ item }: HistoryItemProps) => {
  const router = useRouter();
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ko-KR").format(price);
  };

  // 구독 연장하기
  const handleGoExtend = (id: number) => {
    router.push(`/payment?type=extend&id=${id}`);
  };

  // 다시 구독하기
  const handleGoNew = (id: number) => {
    router.push(`/payment?type=new&id=${id}`);
  };

  // 구독 취소하기
  const [showBfModal, setShowBfModal] = useState(false);
  const [showAfModal, setShowAfModal] = useState(false);

  const handleUnsubscribe = () => {
    console.log("환불함"); // 추후 환불 관련 API로 수정
    setShowBfModal(false);
    setShowAfModal(true);
  };
  const handleFinalClose = () => {
    setShowAfModal(false);
  };

  const isAvailable = item.status == "VALID" || item.status === "NOTYET";

  return (
    <>
      <div
        className={`w-full flex flex-col py-5 px-[18px] mb-3 border-[1.2px] rounded-[10px] ${
          isAvailable
            ? "border-Pale_Blue_1 bg-white"
            : "border-Grey-300 bg-Grey-200"
        } shadow-[0_0_12.7px_0_rgba(175,176,187,0.31)]`}
      >
        <div
          className={`Headline_3 mb-[2px] ${
            isAvailable ? "text-black" : "text-Grey-700"
          }`}
        >
          {item.cafe_name}
        </div>
        <div
          className={`Body_2_med ${
            isAvailable ? "text-Main_Blue" : "text-Grey-500"
          }  `}
        >
          {item.menu} ∙ {item.period}주권
        </div>

        <div className="flex flex-row Body_2_med text-Grey-600 items-center gap-1 mb-1 mt-7">
          <Price width={24} height={24} />
          <span>{formatPrice(item.price)}</span>
        </div>
        <div className="flex flex-row Body_2_med text-Grey-600 items-center gap-1 mb-[18px]">
          <Calendar width={24} height={24} />
          <span>
            {item.start} 시작 - {item.end} 만료
          </span>
        </div>

        {isAvailable ? (
          <div className="flex flex-row w-full justify-between gap-[7px]">
            <span
              onClick={() => setShowBfModal(true)}
              className={cancelBtnStyle}
            >
              구독 취소하기
            </span>
            <span
              onClick={() => handleGoExtend(item.cafe_id)}
              className={buyBtnStyle}
            >
              구독 연장하기
            </span>
          </div>
        ) : (
          <div
            onClick={() => handleGoNew(item.cafe_id)}
            className={buyBtnStyle}
          >
            다시 구독하기
          </div>
        )}
      </div>

      {/*구독 취소하기 모달*/}
      <CancelBfModal
        isOpen={showBfModal}
        onClose={() => setShowBfModal(false)}
        cafe_name={item.cafe_name}
        remaining_days={item.remain}
        onConfirm={handleUnsubscribe}
      />
      <CancelAfModal
        isOpen={showAfModal}
        onClose={handleFinalClose}
        cafe_name={item.cafe_name}
      />
    </>
  );
};

export default HistoryCard;
