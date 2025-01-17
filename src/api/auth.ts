import { publicApi } from "./client";

export const authApi = {
  kakaoCallback: (code: string) =>
    publicApi.get<{ token: string; is_first: boolean }>(
      `/api/v1/auth/callback?code=${code}`
    ),
};
