// components
import { CupcatBg } from "@assets/icons";
import TopBar from "@common/TopBar";

export default function Previous() {
  const level = 0;
  const levelToCount: { [key: number]: string } = {
    1: "한",
    2: "두",
    3: "세",
    4: "네",
    5: "다섯",
  };

  const count = levelToCount[level] || "";

  return (
    <div className="flex w-full h-full flex-col">
      <TopBar title="지나간 컵캣" />
      <div className="relative flex-1 overflow-auto flex-col w-full h-screen bg-Blue_Grey">
        <CupcatBg className="w-full mt-[243px] mb-[34px] absolute" />
        <div className="flex flex-row w-full px-5 mt-6 justify-between">
          {level === 0 ? (
            <span className="flex Headline_3">
              아직 만난
              <br />
              컵캣이 없어요.
            </span>
          ) : (
            <span className="flex Headline_3">
              지금까지 {count} 컵캣을
              <br />
              만났어요!
            </span>
          )}
          <span className="flex flex-row w-auto h-[26px] items-center Body_1_bold text-white py-0.5 px-5 gap-1 bg-Dark_Blue mb-3 rounded-[38px]">
            Lv.{level}
          </span>
        </div>
      </div>
    </div>
  );
}
