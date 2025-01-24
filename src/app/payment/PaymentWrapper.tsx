"use client";

import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@common/TopBar";
import { CafeSubscription, UserSubscriptionInfo } from "src/types/payment";
import ExtendAfModal from "./_components/modal/ExtendAfModal";
import NewAfModal from "./_components/modal/NewAfModal";

interface PaymentWrapperProps {
  children: React.ReactNode;
  type: "extend" | "new";
  cafe_name: string;
  userSubscriptionInfo?: UserSubscriptionInfo | null;
}

interface PaymentContextType {
  selectedSubscription: CafeSubscription | null;
  handleSubscriptionChange: (sub: CafeSubscription | null) => void;
  startDate: Date | null;
  endDate: Date | null;
  handleDateChange: (date: Date | null) => void;
}

export const PaymentContext = createContext<PaymentContextType | null>(null);

const PaymentWrapper = ({
  children,
  type,
  cafe_name,
  userSubscriptionInfo,
}: PaymentWrapperProps) => {
  const router = useRouter();

  // 초기 startDate 세팅: 연장일 경우 만료일 다음날로 설정
  const initialStartDate =
    type === "extend"
      ? (() => {
          const end = new Date(userSubscriptionInfo!.end);
          end.setDate(end.getDate());
          return end;
        })()
      : null;

  const [selectedSubscription, setSelectedSubscription] =
    useState<CafeSubscription | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(initialStartDate);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);

  // subscription이 변경될 때마다 endDate 업데이트
  useEffect(() => {
    if (startDate && selectedSubscription) {
      const end = new Date(startDate);
      end.setDate(end.getDate() + selectedSubscription.period * 7);
      setEndDate(end);
    } else {
      setEndDate(null);
    }
  }, [selectedSubscription?.period, startDate]);

  const handleSubmit = async () => {
    try {
      // API 나중에 연결하자...

      setShowModal(true);
    } catch (error) {
      // 구독 실패 모달..?
      console.error("구독 실패: ", error);
    }
  };

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date && selectedSubscription) {
      const end = new Date(date);
      end.setDate(end.getDate() + selectedSubscription.period * 7);
      setEndDate(end);
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
        <TopBar title={type === "extend" ? "구독 연장하기" : "구독권 구매"} />
        {children}

        {/* 연장∙구매 버튼 */}
        <button
          className={`absolute bottom-10 w-[90%] left-1/2 -translate-x-1/2 z-30 shadow-card ${
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
            onClose={() => router.back()}
            cafe={cafe_name}
          />
        ) : (
          <NewAfModal
            isOpen={showModal}
            onClose={() => router.back()}
            cafe={cafe_name}
            onConfirm={() => router.push("/subscription")}
          />
        )}
      </div>
    </PaymentContext.Provider>
  );
};

export default PaymentWrapper;
