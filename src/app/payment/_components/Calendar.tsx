"use client";

import { Back, Front } from "@assets/icons";
import { CalendarProps, Day } from "src/types/payment";
import { useCalendar } from "../_hooks/useCalendar";
import { useHighlight } from "../_hooks/useHighlight";

const Calendar = (props: CalendarProps) => {
  const { startDate, endDate, onDateSelect } = props;

  // 캘린더 생성 커스텀 훅 사용
  const { month, getDays, moveMonth } = useCalendar(props);

  // 하이라이트 생성 커스텀 훅 사용
  const { getHighlight } = useHighlight(startDate, endDate);

  // 달력 헤더
  const Header = () => (
    <header className="flex justify-center items-center gap-2 mb-2">
      <Back onClick={() => moveMonth("prev")} className="w-5 fill-Grey-400" />
      <h3 className="Headline_5 text-Grey-700 w-11 text-center">
        {month.getMonth() + 1}월
      </h3>
      <Front onClick={() => moveMonth("next")} className="w-5 fill-Grey-400" />
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
