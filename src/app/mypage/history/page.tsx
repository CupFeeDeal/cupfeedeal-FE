// components
import TopBar from "@common/TopBar";
import SearchBar from "./_components/SearchBar";

export default function History() {
  return (
    <div className="flex w-full flex-col">
      <TopBar title="구독 내역" />
      <div className="w-full relative">
        <SearchBar />
      </div>
    </div>
  );
}
