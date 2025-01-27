import { privateApi } from "./client";

export const userApi = {
  // 마이페이지 닉네임 수정
  patchNickname: async (username: string): Promise<{ username: string }> => {
    const response = await privateApi.patch<{
      username: string;
    }>(`/api/v1/users`, { username: username });
    return response.result;
  },
};
