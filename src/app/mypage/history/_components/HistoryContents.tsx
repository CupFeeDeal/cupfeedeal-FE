"use client";
import { useEffect, useState } from "react";

import { HistoryItem } from "src/types/mypage";
import HistoryCard from "./HistoryItem";
import Toggle from "./Toggle";
import { userApi } from "@api/user";

const HistoryContents = () => {
  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);
  const [isToggleOn, setIsToggleOn] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear() % 100}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  };

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await userApi.getSubsList();
        const transformedData: HistoryItem[] = response.map((item) => ({
          id: item.user_subscription_id,
          name: item.cafe_name,
          menu: item.menu,
          subscriptionName: item.cafe_subscription_name,
          period: item.period,
          price: item.price,
          start: formatDate(item.start),
          end: formatDate(item.end),
          isAvailable: item.status === "VALID",
        }));

        setHistoryData(transformedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistoryData();
  }, []);

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
