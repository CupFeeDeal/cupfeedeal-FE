"use client";

import { levelData } from "./mock";

const LevelInfo = () => {
  const storedLevel = parseInt(window.localStorage.getItem("level") || "0", 10);

  return (
    <div className="w-full p-5 bg-white relative z-10 -mt-3">
      {/*레벨 안내*/}
      <div className="mb-8">
        <div className="Subhead_2_bold mb-2">레벨 안내</div>
        {levelData.info.map((data) => (
          <div
            key={data.lv}
            className={`flex flex-row p-2 gap-7 items-center mb-2 ${
              data.lv === storedLevel ? "bg-Pale_Blue_2 rounded-lg" : "bg-white"
            }`}
          >
            <span className="w-[72px] h-[72px] flex shrink-0">
              <data.svg className="w-full h-full" />
            </span>
            <span className="flex flex-col gap-1">
              <div
                className={`Body_2_bold ${
                  data.lv === storedLevel ? "text-Main_Blue" : "text-Grey-600"
                }`}
              >
                Lv.{data.lv}
              </div>
              <div
                className={`line-clamp-2 Body_2_reg ${
                  data.lv === storedLevel ? "text-black" : "text-Grey-600"
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
