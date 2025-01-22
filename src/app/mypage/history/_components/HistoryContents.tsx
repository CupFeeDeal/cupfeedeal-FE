"use client";
import { useState } from "react";

import { HistoryItem } from "src/types/mypage";
import HistoryCard from "./HistoryItem";
import Toggle from "./Toggle";

interface HistoryProps {
  historyData: HistoryItem[];
}

const HistoryContents = ({ historyData }: HistoryProps) => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const filteredHistoryData = isToggleOn
    ? historyData.filter((history) => history.isAvailable)
    : historyData;

  return (
    <div className="w-full px-5 bg-white">
      <div className="flex flex-row items-center gap-2 mb-4 justify-self-end">
        <span className="Caption_med text-Grey-500">
          사용 가능 구독권만 보기
        </span>
        <Toggle isToggleOn={isToggleOn} setIsToggleOn={setIsToggleOn} />
      </div>

      <div className="flex flex-col pb-[38px]">
        {filteredHistoryData.map((history) => (
          <HistoryCard key={history.id} item={history} />
        ))}
      </div>
    </div>
  );
};

export default HistoryContents;
