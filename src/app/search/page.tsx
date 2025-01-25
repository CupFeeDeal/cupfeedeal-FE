// components
import TopBar from "@common/TopBar";
import SearchContent from "./_components/SearchContent";

export default function Search() {
  return (
    <div className="flex w-full h-full flex-col">
      <TopBar title="커피딜 지도" />
      <div className="flex-1 overflow-auto">
        <SearchContent />
      </div>
    </div>
  );
}
