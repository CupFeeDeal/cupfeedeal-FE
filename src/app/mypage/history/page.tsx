// components
import TopBar from "@common/TopBar";
import HistoryContents from "./_components/HistoryContents";
// api
import { userServerApi } from "@api/server/userServer";
// types
import { Subscription } from "src/types/mypage";

export default async function History() {
  let historyData = await userServerApi.getSubsList();

  // 날짜 포맷팅
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear() % 100}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  };

  historyData = historyData.map((item: Subscription) => ({
    ...item,
    start: formatDate(item.start),
    end: formatDate(item.end),
  }));

  return (
    <div className="flex w-full h-full flex-col">
      <TopBar title="구독 내역" />
      <div className="w-full relative">
        <HistoryContents historyData={historyData} />
      </div>
    </div>
  );
}
