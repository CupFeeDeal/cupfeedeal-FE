"use client";

import { createContext, ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@common/TopBar";
import { PaymentProps, PaymentContextType } from "src/types/payment";
import ExtendAfModal from "./_components/modal/ExtendAfModal";
import NewAfModal from "./_components/modal/NewAfModal";
import FailModal from "@common/FailModal";
import { usePayment } from "./_hooks/usePayment";

export const PaymentContext = createContext<PaymentContextType | null>(null);

const PaymentWrapper = ({
  data,
  type,
  children,
}: PaymentProps & { children: ReactNode }) => {
  const router = useRouter();
  const { userSubscriptionInfo, cafe_name } = data;
  const [showFailModal, setShowFailModal] = useState(false);

  const initialStartDate =
    type === "extend" && userSubscriptionInfo
      ? new Date(
          new Date(userSubscriptionInfo.end).getTime() + 24 * 60 * 60 * 1000
        )
      : null;

  const {
    selectedSubscription,
    setSelectedSubscription,
    startDate,
    endDate,
    showModal,
    handleSubmit: originalHandleSubmit,
    handleDateChange,
  } = usePayment(initialStartDate, cafe_name);

  const handleSubmit = async () => {
    try {
      await originalHandleSubmit();
    } catch (error) {
      console.error("결제 실패: ", error);
      setShowFailModal(true);
    }
  };

  return (
    <PaymentContext.Provider
      value={{
        selectedSubscription,
        startDate,
        endDate,
        handleSubscriptionChange: setSelectedSubscription,
        handleDateChange,
      }}
    >
      <div className="flex flex-col h-full relative max-w-[440px]">
        <TopBar
          title={type === "extend" ? "구독 연장하기" : "구독권 구매"}
          backLink={
            type === "extend" ? "/subscription" : `/search?id=${data.cafe_id}`
          }
        />
        {children}

        {/* 연장∙구매 버튼 */}
        <button
          className={`absolute bottom-10 w-[90%] left-1/2 -translate-x-1/2 z-30 shadow-card transition-colors ${
            startDate && endDate ? "btn-confirm" : "btn-invalid"
          }`}
          onClick={handleSubmit}
          disabled={!startDate || !endDate}
        >
          {type === "extend" ? "구독 연장하기" : "구독권 구매하기"}
        </button>

        {/* 연장∙구매 성공 모달 */}
        {type === "extend" ? (
          <ExtendAfModal
            isOpen={showModal}
            onClose={() => router.push("/subscription")}
            cafe_name={cafe_name}
          />
        ) : (
          <NewAfModal
            isOpen={showModal}
            onClose={() => router.push(`/search?id=${data.cafe_id}`)}
            cafe_name={cafe_name}
            onConfirm={() => router.push("/subscription")}
          />
        )}
      </div>

      {/* 실패 모달 */}
      <FailModal
        isOpen={showFailModal}
        onClose={() => setShowFailModal(false)}
        message="구독권 결제"
      />
    </PaymentContext.Provider>
  );
};

export default PaymentWrapper;
