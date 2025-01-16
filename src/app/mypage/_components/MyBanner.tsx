"use client";

import {
  CupcatEx,
  Information,
  LevelBannerBg,
  MyBannerBg,
} from "@assets/icons";

import { myData } from "./mock";
import { useRouter } from "next/navigation";

interface BannerProps {
  isLevel: boolean;
}

const MyBanner = ({ isLevel }: BannerProps) => {
  const router = useRouter();

  return (
    <div className="w-full overflow-hidden relative z-5">
      {isLevel ? <LevelBannerBg /> : <MyBannerBg />}

      {/* 내 정보 */}
      <div className="absolute top-0 left-0 py-6 px-5 flex flex-row">
        <div>
          <div className="w-[72px] py-0.5 px-5 Body_1_bold text-white bg-Dark_Blue mb-3 rounded-[38px]">
            Lv.{myData.level}
          </div>
          {isLevel ? (
            <div className="flex shrink-0 flex-col w-44">
              <div className="Headline_3">
                {myData.cafe_name} 옆의
                <br />
                컵캣
              </div>
              <div className="Body_1_med text-Grey-700 mt-2">
                {myData.date} 만남
              </div>
            </div>
          ) : (
            <div className="Headline_3">
              컵캣이 무럭무럭
              <br />
              자라고 있어요!
            </div>
          )}
        </div>
        <CupcatEx width={198} height={289} className="p-2" />
      </div>

      {/*원두 바*/}
      {!isLevel && (
        <div className="absolute top-[223px] w-full px-5 ">
          <div className="w-full bg-white/50 px-5 py-4 rounded-xl border-[0.7px] border-solid border-white backdrop-blur">
            <div className="flex flex-row items-center justify-between">
              <span className="Body_2_bold">
                다음 레벨까지 {myData.bean}원두 남았어요!
              </span>
              <span>
                <Information
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  onClick={() => router.push("/my/level")}
                />
              </span>
            </div>
            <div className="relative w-full h-[7px] rounded-[3.5px] bg-white mt-2">
              <div className="absolute h-[7px] w-28 rounded-[3.5px] bg-Dark_Blue"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBanner;
