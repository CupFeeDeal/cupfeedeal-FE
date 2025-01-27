// components
import TopBar from "@common/TopBar";
import MyBanner from "../_components/MyBanner";
import LevelInfo from "./_components/LevelInfo";
// api
import { userServerApi } from "@api/userServer";

export default async function Level() {
  const userInfo = await userServerApi.getMyInfo();
  const level = userInfo.user_level;

  return (
    <div className="flex w-full h-full flex-col">
      <TopBar title="레벨" />
      <div className="flex-1 overflow-auto w-full relative">
        <MyBanner userInfo={userInfo} isLevel={true} />
        <LevelInfo level={level} />
      </div>
    </div>
  );
}
