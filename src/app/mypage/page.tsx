// components
import TopBar from "@common/TopBar";
import MyBanner from "./_components/MyBanner";
import MyTab from "./_components/MyTab";

export default function My() {
  return (
    <div className="flex w-full flex-col">
      <TopBar title="마이페이지" />
      <div className="w-full relative">
        <MyBanner isLevel={false} />
        <MyTab />
      </div>
    </div>
  );
}
