import TopBar from "@common/TopBar";
import CafeList from "../_components/CafeList";

export default function NearList() {
  return (
    <div className="flex w-full h-full flex-col">
      <TopBar title="가까운 카페" />
      <div className="flex-1 overflow-auto">
        <CafeList />
      </div>
    </div>
  );
}
