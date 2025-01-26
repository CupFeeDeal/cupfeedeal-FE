// components
import TopBar from "@common/TopBar";
import HistoryContents from "./_components/HistoryContents";

export default function History() {
  return (
    <div className="flex w-full h-full flex-col">
      <TopBar title="구독 내역" />
      <div className="w-full relative">
        <HistoryContents />
      </div>
    </div>
  );
}
