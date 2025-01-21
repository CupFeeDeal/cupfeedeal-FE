"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Nickname() {
  const [count, setCount] = useState(0);
  const [nickname, setNickname] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 10) {
      setNickname(inputValue);
      setCount(inputValue.length);
    }
  };

  const router = useRouter();
  const closeModal = () => {
    router.back();
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-[rgba(34,34,34,0.7)] flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="bg-white max-w-[350px] z-99 w-full mx-5 px-4 rounded-lg flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className=" Headline_3 text-Grey-900 mt-10 mb-5">닉네임 변경</h2>
        <div className="flex flex-row justify-between gap-2 border p-2 rounded-lg w-full px-3 py-[14px]">
          <input
            type="text"
            placeholder="새 닉네임 입력"
            className=" Body_2_med"
            value={nickname}
            onChange={handleInputChange}
          />
          <div className="text-Dark_Blue Body_2_med">중복확인</div>
        </div>
        <div className="w-full text-Grey-400 Caption_med flex flex-col items-end px-3 mt-1">
          {count}/10
        </div>
        <div className="mt-2 Body_2_med text-Grey-600 mb-8">
          변경 후 24시간 뒤 재변경이 가능해요.
        </div>
        <div className="flex mt-1 w-full px-[6px] mb-[18px] gap-2">
          <button
            onClick={closeModal}
            className="w-full Body_1_bold text-Grey-600 py-4 border border-solid border-Blue_Grey bg-Pale_Blue_2 rounded-lg"
          >
            돌아가기
          </button>
          <button className="w-full Body_1_bold py-4 bg-Main_Blue text-white rounded-lg">
            변경하기
          </button>
        </div>
      </div>
    </div>
  );
}
