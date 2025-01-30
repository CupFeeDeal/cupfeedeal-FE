import { useState, useEffect } from "react";
import { CafeSubscription } from "src/types/payment";
import { useSubscriptionStore } from "@store/useSubscriptionStore";
import { tossPaymentApi } from "@api/client/tossPayment";
import { subscriptionClientApi } from "@api/client/subscriptionClient";

export const usePayment = (
  initialStartDate: Date | null,
  cafe_name: string
) => {
  const [selectedSubscription, setSelectedSubscription] =
    useState<CafeSubscription | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(initialStartDate);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);
  const { setSubscription } = useSubscriptionStore();

  // subscription이 변경될 때마다 endDate 업데이트
  useEffect(() => {
    if (startDate && selectedSubscription) {
      const end = new Date(startDate);
      end.setDate(end.getDate() + selectedSubscription.period * 7);
      setEndDate(end);
    } else {
      setEndDate(null);
    }
  }, [selectedSubscription, startDate]);

  // startDate 변경될 때마다 endDate 업데이트
  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date && selectedSubscription) {
      const end = new Date(date);
      end.setDate(end.getDate() + selectedSubscription.period * 7);
      setEndDate(end);
    }
  };

  // 구독권 연장/구매 토스 결제
  const handleSubmit = async () => {
    if (!selectedSubscription || !startDate) return;

    try {
      const orderId = `ORDER_${Date.now()}`;
      await tossPaymentApi.requestPayment({
        amount: selectedSubscription.price,
        orderId,
        orderName: `<${cafe_name}> ${selectedSubscription.menu} ${selectedSubscription.period}주 구독권`,
        subscription_id: selectedSubscription.subscription_id,
        startDate: startDate.toISOString().split("T")[0],
      });
    } catch (error) {
      console.error("결제 실패: ", error);
    }
  };

  // 서버에 요청 + 모달
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const orderId = searchParams.get("orderId");
    const success = searchParams.get("success") === "true";
    const subId = searchParams.get("subId");
    const subStart = searchParams.get("subStart");

    if (success && orderId && subId && subStart) {
      (async () => {
        try {
          await subscriptionClientApi.postSubscription({
            cafeSubscriptionTypeId: Number(subId),
            subscriptionStart: subStart,
          });

          const response = await subscriptionClientApi.getSubscription();
          setSubscription(response.result);
          setShowModal(true);
        } catch (error) {
          console.error("구독 신청 실패:", error);
        }
      })();
    }
  }, [setSubscription]);

  return {
    selectedSubscription,
    setSelectedSubscription,
    startDate,
    endDate,
    showModal,
    setShowModal,
    handleSubmit,
    handleDateChange,
  };
};
