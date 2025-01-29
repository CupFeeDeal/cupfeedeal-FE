import React from "react";
import Link from "next/link";
import { Cryingcat } from "@assets/icons";

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-Grey-100 flex flex-col items-center justify-center">
      <div className="text-Grey-400 Subhead_med mb-6 text-center">
        <b>404</b> : Page Not Found
      </div>
      <Cryingcat width={102} height={102} className="my-4" />
      <div className="Body_1_bold text-Grey-700 text-center">
        요청하신 페이지를 찾을 수 없어요.
        <br />
        다시 로그인해주세요.
      </div>
      <Link href={"/"}>
        <button className="mt-4 Caption_med text-Grey-500 underline">
          로그인하러 가기
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
