// components
import TopBar from "@common/TopBar";
import SearchBar from "./_components/SearchBar";
import HistoryContents from "./_components/HistoryContents";

export default function History() {
  return (
    <div className="flex w-full h-full flex-col">
      <TopBar title="구독 내역" />
      <div className="w-full relative">
        <SearchBar />
        <HistoryContents />
      </div>
    </div>
  );
}
