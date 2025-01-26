"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// components
import Dropdown from "./Dropdown";

// types
import { Input } from "src/types/mypage";

const AskContents = () => {
  const router = useRouter();

  const [inputInfo, setInputInfo] = useState<Input>({
    email: "",
    category: "",
    description: "",
  });

  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  const isEmailValid = pattern.test(inputInfo.email);

  const askCategory = [
    "기술적 오류",
    "디자인 오류",
    "환불 및 취소 관련",
    "결제 관련",
    "구독 관련 기타",
  ];

  // 입력값 관리 핸들러
  const handleInputChange = (name: string, value: string) => {
    setInputInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 문의 내용 입력 핸들러
  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 100) {
      setInputInfo((prev) => ({
        ...prev,
        description: value,
      }));
    }
  };

  // 문의하기 버튼 활성화
  const isFormValid =
    Object.values(inputInfo).every((v) => v.trim() !== "") && isEmailValid;

  return (
    <div className="w-full flex flex-col px-5 pt-12">
      <div className="flex flex-col gap-12">
        <div>
          <div className="Body_1_bold px-2 mb-3">답변받을 이메일</div>
          <input
            name="email"
            value={inputInfo.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="aaaaaaaa@aaaa.com"
            className="flex w-full px-4 py-[14px] Body_2_med border rounded-[10px] rounded-Grey-300"
          />
          {inputInfo.email && !isEmailValid ? (
            <div className="flex w-full Body_2_bold text-Red py-2 px-1 ml-2">
              이메일 형식이 올바르지 않습니다
            </div>
          ) : (
            <></>
          )}
        </div>

        <div>
          <div className="Body_1_bold px-2 mb-3">문의 유형</div>
          <Dropdown
            options={askCategory}
            placeholder="문의 유형"
            value={inputInfo.category}
            onChange={(value) => handleInputChange("category", value)}
          />
        </div>

        <div>
          <div className="Body_1_bold px-2 mb-3">문의 내용</div>

          <textarea
            name="description"
            placeholder="문의 내용을 작성해 주세요."
            value={inputInfo.description}
            onChange={handleDescription}
            className="flex focus:outline-none w-full h-32 resize-none p-3 Body_2_reg border rounded-[10px] rounded-Grey-300"
          ></textarea>
          <div className=" Caption_med text-gray-400 mt-1 px-3 justify-self-end">
            {inputInfo.description.length} / 100
          </div>
        </div>
      </div>
      <div
        onClick={() => isFormValid && router.push("/mypage")}
        className={`flex w-full justify-center Body_1_bold rounded-xl px-6 py-[0.88rem] mt-[3.6rem] ${
          isFormValid
            ? "bg-Main_Blue text-white cursor-pointer"
            : "bg-Grey-200 text-Grey-400"
        }`}
      >
        문의하기
      </div>
    </div>
  );
};

export default AskContents;
