// components
import TopBar from "@common/TopBar";
import MyBanner from "../_components/MyBanner";
import LevelInfo from "./_components/LevelInfo";

export default function Level() {
  return (
    <div className="flex w-full flex-col">
      <TopBar title="레벨" />
      <div className="w-full relative">
        <MyBanner isLevel={true} />
        <LevelInfo />
      </div>
    </div>
  );
}
