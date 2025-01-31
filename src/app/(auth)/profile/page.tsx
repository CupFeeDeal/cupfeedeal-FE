"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProfileBtn from "../_components/ProfileBtn";
import { authApi } from "@api/client/auth";
import { useAuthStore } from "@store/useAuthStore";

// 데모 시연용 프리뷰 로그인
const ProfilePage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const router = useRouter();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const handleNext = async () => {
    if (!selectedId) return;

    try {
      const response = await authApi.demoLogin(selectedId);
      setAccessToken(response.result.token);
      router.replace("/home");
    } catch (error) {
      console.error("데모 로그인 실패: ", error);
    }
  };

  return (
    <div className="h-full flex flex-col px-5 justify-center gap-6">
      <h1 className="Headline_4 text-center">
        로그인할 프리뷰 프로필을 <br />
        선택하세요
      </h1>
      <ProfileBtn selectedId={selectedId} setSelectedId={setSelectedId} />
      <button
        onClick={handleNext}
        disabled={!selectedId}
        className={`py-[0.88rem] rounded-xl transition-colors Body_1_bold mt-[17%]
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
