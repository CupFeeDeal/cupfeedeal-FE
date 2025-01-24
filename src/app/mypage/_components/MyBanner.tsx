"use client";

import {
  CupcatEx,
  Information,
  LevelBannerBg,
  MyBannerBg,
} from "@assets/icons";

import { myData } from "./mock";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { userApi } from "@api/user";

interface BannerProps {
  isLevel: boolean;
}

const MyBanner = ({ isLevel }: BannerProps) => {
  const router = useRouter();

  const [level, setLevel] = useState(0);
  const [cafeName, setCafeName] = useState("");
  const [birth, setBirth] = useState("");
  const [cupcatImgUrl, setCupcatImgUrl] = useState("");

  useEffect(() => {
    const fetchMyInfo = async () => {
      try {
        const userInfo = await userApi.getMyInfo();
        console.log("userInfo: ", userInfo);
        setLevel(userInfo.user_level);
        // setCafeName(userInfo.cafe_name);
        // setBirth(userInfo.birth_date);
      } catch (error) {
        console.error("Failed to fetch userInfo:", error);
      }
    };

    fetchMyInfo();
  }, []);

  return (
    <div className="w-full overflow-hidden relative z-5">
      {isLevel ? <LevelBannerBg /> : <MyBannerBg />}

      {/* 내 정보 */}
      <div className="absolute top-0 left-0 py-6 px-5 flex flex-row w-full justify-between">
        <div className="flex flex-col">
          <span className="flex flex-row flex-grow-0 w-[84px] items-center py-0.5 pl-5 pr-3 gap-1 bg-Dark_Blue mb-3 rounded-[38px]">
            <div className="Body_1_bold text-white">Lv.{level}</div>
            <Information
              width={16}
              height={16}
              className="cursor-pointer"
              onClick={() => router.push("/mypage/level")}
            />
          </span>

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
    </div>
  );
};

export default MyBanner;
