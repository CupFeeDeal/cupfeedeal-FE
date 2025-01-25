// components
import TopBar from "@common/TopBar";
import MyBanner from "./_components/MyBanner";
import MyTab from "./_components/MyTab";

export default function Mypage() {
  return (
    <div className="flex w-full h-full flex-col">
      <TopBar title="마이페이지" />
      <div className="flex-1 overflow-auto w-full relative">
        <MyBanner isLevel={false} />
        <MyTab />
      </div>
    </div>
  );
}
