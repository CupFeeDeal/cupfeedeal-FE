import { useState, useEffect } from "react";
import { CafeSubscription } from "src/types/payment";
import { subscriptionClientApi } from "@api/subscriptionClient";

export const usePayment = (initialStartDate: Date | null) => {
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

  // 구독권 연장/구매
  const handleSubmit = async () => {
    if (!selectedSubscription || !startDate) return;

    try {
      await subscriptionClientApi.postSubscription({
        cafeSubscriptionTypeId: selectedSubscription.subscription_id,
        subscriptionStart: startDate.toISOString().split("T")[0],
      });

      setShowModal(true);
    } catch (error) {
      console.error("구독 실패: ", error);
    }
  };

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
