"use client";

import Link from "next/link";
import { useState } from "react";

import { subscriptionClientApi } from "@api/client/subscriptionClient";

import TopBar from "@common/TopBar";
import { HalfCat } from "@assets/icons";
import { formatDate } from "@app/subscription/_utils/FormatDate";

import Modal from "@common/Modal";
import { ManageModalProps } from "src/types/modal";
import Info from "@app/payment/_components/Info";
import CancelBfModal from "./CancelBfModal";
import CancelAfModal from "./CancelAfModal";

// 구독 시작일, 만료일 정보 box
interface DateBoxProps {
  label: string;
  date: string;
  isExpiry?: boolean;
}

const DateBox = ({ label, date, isExpiry = false }: DateBoxProps) => (
  <div className="flex flex-col gap-4 py-4 items-center text-center bg-white rounded-2xl w-full">
    <p className="Body_2_med">{label}</p>
    <h4
      className={`Subhead_1_bold whitespace-pre-line ${
        isExpiry ? "text-Red" : ""
      }`}
    >
      {formatDate(date, "korean")}
    </h4>
  </div>
);

const ManageModal = ({
  isOpen,
  onClose,
  user_subscription_id,
  cafe_name,
  menu,
  period,
  price,
  start,
  end,
  visit,
  remaining_days,
}: ManageModalProps) => {
  const [showBfModal, setShowBfModal] = useState(false);
  const [showAfModal, setShowAfModal] = useState(false);

  // 구독권 취소하기 로직
  const handleUnsubscribe = async () => {
    try {
      await subscriptionClientApi.cancelSubscription(user_subscription_id);

      console.log("환불함");
      setShowBfModal(false);
      setShowAfModal(true);
    } catch (error) {
      console.error("구독 취소 실패: ", error);
    }
  };

  const handleFinalClose = () => {
    setShowAfModal(false);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} fullPage>
        <TopBar title={`${cafe_name} 구독권 관리`} onBack={onClose} />

        {/* 구독 정보 */}
        <div className="flex-1 overflow-auto p-5 space-y-4">
          <Info {...{ cafe_name: cafe_name, menu, period, price }} />

          {/* 방문수 및 만료일 */}
          <div className="flex flex-col px-4 rounded-2xl bg-Pale_Blue_2 items-center">
            <h5 className="Body_1_bold py-6">
              지금까지 <span className="text-Main_Blue">{cafe_name}</span>{" "}
              카페를 {visit}번 방문했어요!
            </h5>
            <div className="flex justify-between gap-3 w-full mb-9">
              <DateBox label="구독 시작일" date={start} />
              <DateBox label="구독 만료 예정일" date={end} isExpiry />
            </div>
            <HalfCat />
          </div>

          {/* 버튼 */}
          <div className="pt-4 space-y-4">
            <Link
              href={`/payment?type=extend&id=${user_subscription_id}`}
              className="btn-confirm block text-center"
            >
              구독 연장하기
            </Link>
            <button className="btn-cancel" onClick={() => setShowBfModal(true)}>
              구독 취소하기
            </button>
          </div>
        </div>
      </Modal>

      {/* 환불 관련 모달 */}
      <CancelBfModal
        isOpen={showBfModal}
        onClose={() => setShowBfModal(false)}
        cafe_name={cafe_name}
        remaining_days={remaining_days}
        onConfirm={handleUnsubscribe}
      />
      <CancelAfModal
        isOpen={showAfModal}
        onClose={handleFinalClose}
        cafe_name={cafe_name}
      />
    </>
  );
};

export default ManageModal;
