import { privateApi } from "./client";
import { MyInfo, Subscription, CupcatList } from "src/types/mypage";

export const userApi = {
  // 마이페이지 메인 정보
  getMyInfo: async (): Promise<MyInfo> => {
    const response = await privateApi.get<MyInfo>(`/api/v1/users`);
    return response.result;
  },

  // 마이페이지 닉네임 수정
  patchNickname: async (username: string): Promise<{ username: string }> => {
    const response = await privateApi.patch<{
      username: string;
    }>(`/api/v1/users`, { username: username });
    return response.result;
  },

  // 마이페이지 구독 내역
  getSubsList: async (): Promise<Subscription[]> => {
    const response = await privateApi.get<Subscription[]>(
      `/api/v1/userSubscription/manage`
    );
    return response.result;
  },

  // 마이페이지 지나간 컵캣
  getCupcats: async (): Promise<CupcatList> => {
    const response = await privateApi.get<CupcatList>(`/api/v1/users/cupcats`);
    return response.result;
  },
};
