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
      <div className="Body_1_bold text-Grey-700">
        요청하신 페이지를 찾을 수 없어요.
      </div>
      <Link href={"/home"}>
        <button className="mt-2 Caption_med text-Grey-500 underline">
          홈으로 돌아가기
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
