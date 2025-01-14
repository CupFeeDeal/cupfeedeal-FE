// components
import TopBar from "@common/TopBar";
import MyBanner from "./_components/MyBanner";
import MyTab from "./_components/MyTab";

export default function Search() {
  return (
    <div className="flex w-full flex-col">
      <TopBar title="마이페이지" />
      <div className="w-full relative">
        <MyBanner />
        <MyTab />
      </div>
    </div>
  );
}
