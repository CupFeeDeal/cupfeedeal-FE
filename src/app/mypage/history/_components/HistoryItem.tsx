"use client";
import CancelAfModal from "@app/subscription/_components/modal/CancelAfModal";
import CancelBfModal from "@app/subscription/_components/modal/CancelBfModal";
import { Calendar, Price } from "@assets/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HistoryItem } from "src/types/mypage";

interface HistoryItemProps {
  item: HistoryItem;
}

const HistoryCard = ({ item }: HistoryItemProps) => {
  const [showBfModal, setShowBfModal] = useState(false);
  const [showAfModal, setShowAfModal] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ko-KR").format(price);
  };

  const router = useRouter();
  const handleGoExtend = (id: number) => {
    router.push(`/payment?type=extend&id=${id}`);
  };

  const handleGoNew = (id: number) => {
    router.push(`/payment?type=new&id=${id}`);
  };

  // 추후 환불 관련 API로 수정
  const handleUnsubscribe = () => {
    console.log("환불함");
    setShowBfModal(false);
    setShowAfModal(true);
  };
  const handleFinalClose = () => {
    setShowAfModal(false);
  };

  return (
    <>
      <div
        className={`w-full flex flex-col py-5 px-[18px] mb-3 border-[1.2px] rounded-[10px] ${
          item.isAvailable
            ? "border-Pale_Blue_1 bg-white"
            : "border-Grey-300 bg-Grey-200"
        } shadow-[0_0_12.7px_0_rgba(175,176,187,0.31)]`}
      >
        <div
          className={`Headline_3 mb-[2px] ${
            item.isAvailable ? "text-black" : "text-Grey-700"
          }`}
        >
          {item.name}
        </div>
        <div
          className={`Body_2_med ${
            item.isAvailable ? "text-Main_Blue" : "text-Grey-500"
          }  `}
        >
          아이스 아메리카노 ∙ {item.period}주권
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

        {item.isAvailable ? (
          <div className="flex flex-row w-full justify-between gap-[7px]">
            <span
              onClick={() => setShowBfModal(true)}
              className="cursor-pointer flex w-full bg-Pale_Blue_1 rounded-[10px] py-[10px] justify-center mx-auto Body_2_bold "
            >
              구독 취소하기
            </span>
            <span
              onClick={() => handleGoExtend(item.id)}
              className="cursor-pointer flex w-full bg-Main_Blue rounded-[10px] py-[10px] justify-center mx-auto Body_2_bold text-white"
            >
              구독 연장하기
            </span>
          </div>
        ) : (
          <div
            onClick={() => handleGoNew(item.id)}
            className="cursor-pointer flex w-full bg-Main_Blue rounded-[10px] py-[10px] justify-center items-center Body_2_bold text-white"
          >
            다시 구독하기
          </div>
        )}
      </div>

      {/*구독 취소하기 모달*/}
      <CancelBfModal
        isOpen={showBfModal}
        onClose={() => setShowBfModal(false)}
        cafe={item.name}
        remain={1} // 추후 item.remain 으로 수정
        onConfirm={handleUnsubscribe}
      />
      <CancelAfModal
        isOpen={showAfModal}
        onClose={handleFinalClose}
        cafe={item.name}
      />
    </>
  );
};

export default HistoryCard;
