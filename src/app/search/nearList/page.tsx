import TopBar from "@common/TopBar";
import CafeList from "../_components/CafeList";

import { cafeList } from "../_components/mock";

export default function NearList() {
  return (
    <div className="flex w-full flex-col">
      <TopBar title="가까운 카페" />
      <CafeList />
    </div>
  );
}
