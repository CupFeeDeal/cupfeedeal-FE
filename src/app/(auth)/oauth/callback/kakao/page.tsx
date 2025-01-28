"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "@api/client/auth";
import { token } from "@api/token";

// lottie
import loadingUI from "@assets/json/loading_UI.json";
import Lottie from "react-lottie-player";

export default function KakaoCallback() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      router.replace("/");
      return;
    }

    const handleKakaoCallback = async () => {
      try {
        const response = await authApi.kakaoCallback(code);
        token.set(response.result.token, "accessToken");

        // 첫 로그인 시에만 온보딩 이동
        if (response.result.is_first) {
          const encodedUsername = encodeURIComponent(response.result.username);
          router.replace(`/onboarding?step=1&user=${encodedUsername}`);
        } else {
          router.replace("/home");
        }
      } catch (error) {
        console.error("카카오 로그인 실패: ", error);
        router.replace("/");
      }
    };

    handleKakaoCallback();
  }, [router]);

  return (
    <div className="h-full flex justify-center items-center">
      <Lottie animationData={loadingUI} loop play style={{ width: "18rem" }} />
    </div>
  );
}
