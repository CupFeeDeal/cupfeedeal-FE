// components
import TopBar from "@common/TopBar";
import MyBanner from "../_components/MyBanner";
import LevelInfo from "./_components/LevelInfo";

export default function Level() {
  return (
    <div className="flex w-full h-full flex-col">
      <TopBar title="레벨" />
      <div className="flex-1 overflow-auto w-full relative">
        <MyBanner isLevel={true} />
        <LevelInfo />
      </div>
    </div>
  );
}
