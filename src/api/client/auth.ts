import { publicApi } from "@api/client";

export const authApi = {
  kakaoCallback: (code: string) =>
    publicApi.get<{ token: string; is_first: boolean; username: string }>(
      `/api/v1/auth/callback?code=${code}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`
    ),
};
