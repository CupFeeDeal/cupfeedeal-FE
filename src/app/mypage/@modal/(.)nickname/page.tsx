"use client";

import { userApi } from "@api/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nickname() {
  const [count, setCount] = useState(0);
  const [nickname, setNickname] = useState("");
  const router = useRouter();

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const disabledTimestamp = localStorage.getItem("nicknameDisabled");
    if (disabledTimestamp) {
      const remainingTime =
        24 * 60 * 60 * 1000 - (Date.now() - Number(disabledTimestamp));
      if (remainingTime > 0) {
        setIsDisabled(true);
        setTimeout(() => {
          setIsDisabled(false);
          localStorage.removeItem("nicknameDisabled");
        }, remainingTime);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 10) {
      setNickname(inputValue);
      setCount(inputValue.length);
    }
  };

  const handleChangeNickname = async () => {
    try {
      await userApi.patchNickname(nickname);

      localStorage.setItem("nicknameDisabled", Date.now().toString());
      setIsDisabled(true);

      setTimeout(() => {
        setIsDisabled(false);
        localStorage.removeItem("nicknameDisabled");
      }, 24 * 60 * 60 * 1000);

      router.back();
    } catch (error) {
      console.error(error);
    }
  };

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
          <button
            onClick={handleChangeNickname}
            className={`w-full Body_1_bold py-4 rounded-lg ${
              isDisabled
                ? "bg-Grey-200 cursor-not-allowed text-Grey-400"
                : "bg-Main_Blue text-white"
            }`}
            disabled={isDisabled}
          >
            변경하기
          </button>
        </div>
      </div>
    </div>
  );
}
