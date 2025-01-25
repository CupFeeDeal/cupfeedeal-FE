"use client";

import { useState, useEffect } from "react";
import { Back, Front } from "@assets/icons";
import { CafeSubscription } from "src/types/payment";

interface CalendarProps {
  isExtension: boolean;
  startDate: Date | null;
  endDate: Date | null;
  selectedSubscription: CafeSubscription | null;
  onDateSelect?: (date: Date) => void;
}

interface Day {
  date: Date;
  isActive: boolean;
  isCurrentMonth: boolean;
}

const Calendar = ({
  isExtension,
  startDate,
  endDate,
  selectedSubscription,
  onDateSelect,
}: CalendarProps) => {
  const [month, setMonth] = useState(() =>
    startDate ? new Date(startDate) : new Date()
  );

  useEffect(() => {
    if (endDate && isExtension && month.getMonth() !== endDate.getMonth()) {
      setMonth(new Date(endDate));
    }
  }, [endDate, isExtension]);

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

  // 시작일 ~ 종료일 하이라이트
  const isInRange = (date: Date) =>
    startDate && endDate && date >= startDate && date <= endDate;

  const getHighlight = (week: Day[]) => {
    if (!week.some(({ date }) => isInRange(date))) return null;

    const start = week.findIndex(
      ({ date }) => date.toDateString() === startDate?.toDateString()
    );
    const end = week.findIndex(
      ({ date }) => date.toDateString() === endDate?.toDateString()
    );

    // 시작일과 종료일에만 계산식 적용(동그라미 절반만큼)
    return {
      left: start !== -1 ? `calc(${((start * 2 + 1) / 14) * 100}%)` : "0",
      right: end !== -1 ? `calc(${(((7 - end) * 2 - 1) / 14) * 100}%)` : "0",
    };
  };

  // 달력 헤더
  const Header = () => (
    <header className="flex justify-center items-center gap-2 mb-2">
      <Back
        onClick={() =>
          setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1))
        }
        className="w-5 fill-Grey-400"
      />
      <h3 className="Headline_5 text-Grey-700 w-11 text-center">
        {month.getMonth() + 1}월
      </h3>
      <Front
        onClick={() =>
          setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1))
        }
        className="w-5 fill-Grey-400"
      />
    </header>
  );

  // 달력의 각 날짜
  const DayCell = ({ date, isActive }: Day) => {
    const isStartDay = date.toDateString() === startDate?.toDateString();
    const isEndDay = date.toDateString() === endDate?.toDateString();

    return (
      <div
        onClick={() => isActive && onDateSelect?.(date)}
        className={`flex justify-center items-center cursor-pointer
          ${isActive ? "text-Grey-700" : "text-Grey-300"} Body_1_med`}
      >
        <div
          className={`w-full aspect-square flex items-center justify-center 
          relative z-10 rounded-full
          ${isStartDay ? "bg-Main_Blue text-white" : ""}
          ${isEndDay ? "bg-Pale_Blue_1 text-white" : ""}`}
        >
          {date.getDate()}
        </div>
      </div>
    );
  };

  // 최종 달력 UI
  return (
    <div className="bg-Blue_Grey rounded-lg p-3">
      <Header />
      <div className="flex flex-col p-3 bg-white rounded-lg overflow-hidden divide-y divide-Grey-200">
        {getDays().map((week, i) => {
          const highlight = getHighlight(week);

          return (
            <div key={i} className="relative w-full grid grid-cols-7">
              {highlight && (
                <div
                  className="absolute inset-y-0 bg-Pale_Blue_2"
                  style={{ left: highlight.left, right: highlight.right }}
                />
              )}
              {week.map((day, j) => (
                <DayCell key={j} {...day} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
