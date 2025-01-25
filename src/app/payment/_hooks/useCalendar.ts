import { useState, useEffect } from "react";
import { CalendarProps, Day } from "src/types/payment";

export const useCalendar = ({
  isExtension,
  startDate,
  endDate,
  selectedSubscription,
}: CalendarProps) => {
  const [month, setMonth] = useState(() =>
    startDate ? new Date(startDate) : new Date()
  );

  const getDays = () => {
    const year = month.getFullYear();
    const currMonth = month.getMonth();
    const firstDay = new Date(year, currMonth, 1).getDay();
    const lastDate = new Date(year, currMonth + 1, 0).getDate();
    const prevLastDate = new Date(year, currMonth, 0).getDate();
    const today = new Date(new Date().setHours(0, 0, 0, 0));

    const createDay = (date: Date, isCurrentMonth: boolean): Day => {
      const isPastDate = date < today;
      const isBeforeStart = startDate && date < startDate;

      const isActive = isExtension
        ? isCurrentMonth && !isBeforeStart
        : isCurrentMonth && !!selectedSubscription && !isPastDate;

      return { date, isActive, isCurrentMonth };
    };

    // 이전 달 날짜 + 이번 달 날짜
    const days: Day[] = [
      ...Array(firstDay)
        .fill(null)
        .map((_, i) =>
          createDay(
            new Date(year, currMonth - 1, prevLastDate - firstDay + i + 1),
            false
          )
        ),
      ...Array(lastDate)
        .fill(null)
        .map((_, i) => createDay(new Date(year, currMonth, i + 1), true)),
    ];

    // 이번 달 남은 기간에 다음 달 날짜 추가
    const remainingDays = (7 - (days.length % 7)) % 7;
    if (remainingDays) {
      days.push(
        ...Array(remainingDays)
          .fill(null)
          .map((_, i) => createDay(new Date(year, currMonth + 1, i + 1), false))
      );
    }

    // 최종 날짜 배열
    return Array(days.length / 7)
      .fill(null)
      .map((_, i) => days.slice(i * 7, (i + 1) * 7));
  };

  // 달력 이동 1 : 자동적으로 종료일에 맞춰서 (extend)
  useEffect(() => {
    if (endDate && isExtension && month.getMonth() !== endDate.getMonth()) {
      setMonth(new Date(endDate));
    }
  }, [endDate, isExtension, month]);

  // 달력 이동 2 : 헤더에서 < > 클릭
  const moveMonth = (direction: "prev" | "next") => {
    setMonth(
      (prev) =>
        new Date(
          prev.getFullYear(),
          prev.getMonth() + (direction === "prev" ? -1 : 1)
        )
    );
  };

  return {
    month,
    getDays,
    moveMonth,
  };
};
