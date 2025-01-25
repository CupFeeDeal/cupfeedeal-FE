import { useState, useEffect } from "react";
import { CafeSubscription } from "src/types/payment";

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

  const handleSubmit = async () => {
    try {
      // API 나중에 연결하자...
      setShowModal(true);
    } catch (error) {
      // 구독 실패 모달..?
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
