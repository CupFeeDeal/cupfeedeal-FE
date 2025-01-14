// components
import TopBar from "@common/TopBar";
import Map from "./_components/Map";
import BottomSheet from "./_components/BottomSheet";
import SearchBar from "./_components/SearchBar";
import SearchMenu from "./_components/SearchMenu";

// data
import { cafeInfo } from "./_components/mock";

export default function Search() {
  return (
    <div className="flex w-full flex-col">
      <TopBar title="커피딜 지도" />
      <div className="w-full relative">
        <SearchBar />
        <SearchMenu />
        <Map />
      </div>
      {/* <BottomSheet cafeInfo={cafeInfo} /> */}
    </div>
  );
}
