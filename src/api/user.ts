import { privateApi } from "./client";

export const userApi = {
  getMyInfo: async () => {
    const response = await privateApi.get<{
      username: string;
      user_level: number;
      cupcatImgUrl: string;
    }>(`/api/v1/users`);
    return response.result;
  },

  patchNickname: async (username: string) => {
    const response = await privateApi.patch<{
      username: string;
    }>(`/api/v1/users`, { username: username });
    return response.result;
  },
};
