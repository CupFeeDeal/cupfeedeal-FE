import TopBar from "@common/TopBar";
import Map from "./_components/Map";
import BottomSheet from "./_components/BottomSheet";

import { cafeInfo } from "./_components/mock";

export default function Search() {
  return (
    <div className="flex w-full flex-col">
      <TopBar title="커피딜 지도" />
      <Map />
      <BottomSheet cafeInfo={cafeInfo} />
    </div>
  );
}
