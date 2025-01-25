// components
import TopBar from "@common/TopBar";
import SearchContent from "./_components/SearchContent";

export default function Search() {
  return (
    <div className="flex w-full flex-col">
      <TopBar title="커피딜 지도" />
      <SearchContent />
    </div>
  );
}
