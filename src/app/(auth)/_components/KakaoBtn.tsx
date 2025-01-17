"use client";

import { Kakao } from "@assets/icons";

export default function KakaoBtn() {
  const handleLogin = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;

    window.location.replace(KAKAO_AUTH_URL);
  };

  return (
    <button
      onClick={handleLogin}
      className="flex justify-center items-center gap-2 w-full h-12 bg-[#F5E14B] rounded-xl"
    >
      <Kakao />
      <p className="Body_1_med">카카오톡으로 계속하기</p>
    </button>
  );
}
