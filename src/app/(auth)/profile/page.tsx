"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProfileBtn from "../_components/ProfileBtn";
import { authApi } from "@api/client/auth";
import { token } from "@api/token";

// 데모 시연용 프리뷰 로그인
const ProfilePage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const router = useRouter();

  const handleNext = async () => {
    if (!selectedId) return;

    try {
      const response = await authApi.demoLogin(selectedId);
      token.set(response.result.token);
      router.replace("/home");
    } catch (error) {
      console.error("데모 로그인 실패: ", error);
    }
  };

  return (
    <div className="h-full flex flex-col px-5 justify-center gap-9">
      <h1 className="Headline_4 text-center">
        로그인할 프리뷰 프로필을 <br />
        선택하세요
      </h1>
      <ProfileBtn selectedId={selectedId} setSelectedId={setSelectedId} />
      <button
        onClick={handleNext}
        disabled={!selectedId}
        className={`py-[0.88rem] rounded-xl transition-colors Body_1_bold mt-[20%]
          ${
            selectedId ? "bg-Main_Blue text-white" : "bg-Grey-200 text-Grey-400"
          }`}
      >
        다음
      </button>
    </div>
  );
};

export default ProfilePage;
