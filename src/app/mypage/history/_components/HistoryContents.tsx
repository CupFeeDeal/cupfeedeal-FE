"use client";
import { useEffect, useState } from "react";
import { Search } from "@assets/icons";

// components
import HistoryCard from "./HistoryItem";
import Toggle from "./Toggle";

// api
import { HistoryItem } from "src/types/mypage";
import { userApi } from "@api/user";

const HistoryContents = () => {
  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<HistoryItem[]>([]);

  // 날짜 포맷팅
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
        console.log(transformedData);
        setHistoryData(transformedData);
        setFilteredData(transformedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistoryData();
  }, []);

  // 검색 기능
  const handleSearch = () => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = historyData
      .filter((history) =>
        history.name.toLocaleLowerCase().includes(lowerCaseQuery)
      )
      .filter((history) => (isToggleOn ? history.isAvailable : true));

    setFilteredData(filtered);
  };

  // 토글과 검색 필터링된 데이터
  useEffect(() => {
    const filtered = historyData
      .filter((history) =>
        history.name.toLowerCase().includes(query.toLowerCase())
      )
      .filter((history) => (isToggleOn ? history.isAvailable : true));

    setFilteredData(filtered);
  }, [isToggleOn, historyData, query]);

  return (
    <div className="w-full px-5 bg-white">
      <div className="w-full z-10 pt-4 pb-3">
        <div className="flex flex-row items-center gap-3 px-3 py-[0.88rem] rounded-[0.625rem] bg-white shadow-[0_0_11px_0_rgba(153,153,159,0.26)]">
          <input
            className="flex flex-1 Body_2_med"
            placeholder="카페와 구독권을 검색해보세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search
            onClick={handleSearch}
            width={18.5}
            height={18.5}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-row items-center gap-2 mb-4 justify-self-end">
        <span className="Caption_med text-Grey-500">
          사용 가능 구독권만 보기
        </span>
        <Toggle isToggleOn={isToggleOn} setIsToggleOn={setIsToggleOn} />
      </div>

      <div className="flex flex-col pb-[38px]">
        {filteredData.map((history) => (
          <HistoryCard key={history.id} item={history} />
        ))}
      </div>
    </div>
  );
};

export default HistoryContents;
