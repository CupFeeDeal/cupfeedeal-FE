import TopBar from "@common/TopBar";
import ListItem from "../_components/CafeList";

import { cafeList } from "../_components/mock";

export default function Search() {
  return (
    <div className="flex w-full flex-col">
      <TopBar title="가까운 카페" />
      <ListItem cafeList={cafeList} />
    </div>
  );
}
