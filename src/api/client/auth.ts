import { publicApi } from "@api/client";

export const authApi = {
  // 카카오 로그인
  kakaoCallback: (code: string) =>
    publicApi.get<{ token: string; is_first: boolean; username: string }>(
      `/api/v1/auth/callback?code=${code}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`
    ),

  // 시연용 로그인
  demoLogin: (userId: number) =>
    publicApi.get<{ token: string }>(`/api/v1/auth/login/demo/${userId}`),
};
