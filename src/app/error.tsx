"use client";
import React from "react";
import Link from "next/link";
import { Cryingcat } from "@assets/icons";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen bg-Grey-100 flex flex-col items-center justify-center">
      <Cryingcat width={102} height={102} className="my-4" />
      <div className="Body_1_bold text-Grey-700 text-center">
        예상치 못한 오류가 발생했어요.
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

export default ErrorPage;
