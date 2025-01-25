import { publicApi } from "./apiHelper";

export const authApi = {
  kakaoCallback: (code: string) =>
    publicApi.get<{ token: string; is_first: boolean; username: string }>(
      `/api/v1/auth/callback?code=${code}`
    ),
};
