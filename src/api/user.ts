import { privateApi } from "./client";

export const userApi = {
  // 마이페이지 메인 정보
  getMyInfo: async () => {
    const response = await privateApi.get<{
      username: string;
      user_level: number;
      cupcatImgUrl: string;
      cafe_name: string;
      birth_date: string;
    }>(`/api/v1/users`);
    return response.result;
  },

  // 마이페이지 닉네임 수정
  patchNickname: async (username: string) => {
    const response = await privateApi.patch<{
      username: string;
    }>(`/api/v1/users`, { username: username });
    return response.result;
  },

  // 마이페이지 구독 내역
  getSubsList: async () => {
    const response = await privateApi.get<
      {
        user_subscription_id: number;
        cafe_name: string;
        menu: string;
        cafe_subscription_name: string;
        period: number;
        price: number;
        start: string;
        end: string;
        status: string;
      }[]
    >(`/api/v1/userSubscription/manage`);
    return response.result;
  },
};
