import { Day } from "src/types/payment";

export const useHighlight = (startDate: Date | null, endDate: Date | null) => {
  // 범위: 시작일 ~ 종료일
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

  return {
    isInRange,
    getHighlight,
  };
};
