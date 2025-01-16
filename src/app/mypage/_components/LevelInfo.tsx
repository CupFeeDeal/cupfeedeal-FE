"use client";

import { levelData } from "./mock";

const LevelInfo = () => {
  const progressBar = levelData.bean / 10;

  return (
    <div className="w-full p-5 bg-white relative z-10 ">
      {/*다음 레벨까지*/}
      <div className="Subhead_2_bold">다음 레벨까지</div>
      <div className="relative w-full h-2 rounded-[3.5px] bg-Grey-200 mt-4">
        <div
          className="absolute h-2 rounded-[3.5px] bg-Main_Blue"
          style={{ width: `${progressBar}%` }}
        ></div>
        <div
          className="absolute flex flex-col items-center transform -translate-x-1/2 "
          style={{ left: `${progressBar - 2.5}%` }} // 프로그레스바 거의 다 채워졌을 때 예외처리
        >
          <div className="w-0.5 h-[17px] bg-Main_Blue mt-2"></div>
          <div className="flex py-[5px] px-[14px] justify-center items-center rounded-[13.5px] bg-Main_Blue Caption_bold text-white ">
            {levelData.bean}원두 남았어요!
          </div>
        </div>

        <div className="relative flex flex-row w-full justify-between top-4">
          <span className="Caption_bold text-Main_Blue">
            Lv.{levelData.level}
          </span>
          <span className="Caption_bold text-Grey-400">
            Lv.{levelData.level + 1}
          </span>
        </div>
      </div>

      {/*레벨 안내*/}
      <div className="mb-8">
        <div className="Subhead_2_bold mt-20">레벨 안내</div>
        {levelData.info.map((data) => (
          <div
            key={data.lv}
            className={`flex flex-row p-2 gap-7 items-center mb-2 ${
              data.lv === levelData.level
                ? "bg-Pale_Blue_2 rounded-lg"
                : "bg-white"
            }`}
          >
            <span className="w-[72px] h-[72px] bg-Grey-300 flex shrink-0"></span>
            <span className="flex flex-col gap-1">
              <div
                className={`Body_2_bold ${
                  data.lv === levelData.level
                    ? "text-Main_Blue"
                    : "text-Grey-600"
                }`}
              >
                Lv.{data.lv}
              </div>
              <div
                className={`line-clamp-2 Body_2_reg ${
                  data.lv === levelData.level ? "text-black" : "text-Grey-600"
                }`}
              >
                {data.description}
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelInfo;
