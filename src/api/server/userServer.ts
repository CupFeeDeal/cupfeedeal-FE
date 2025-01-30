import { serverApi } from "@api/server";
import { MyInfo, Subscription, CupcatList } from "src/types/mypage";

export const userServerApi = {
  // 마이페이지 메인 정보
  getMyInfo: async (): Promise<MyInfo> => {
    const response = await serverApi.get<MyInfo>(`/api/v1/users`);
    return response.result;
  },

  // 마이페이지 구독 내역
  getSubsList: async (): Promise<Subscription[]> => {
    const response = await serverApi.get<Subscription[]>(
      `/api/v1/userSubscription/manage`
    );
    return response.result;
  },

  // 마이페이지 지나간 컵캣
  getCupcats: async (): Promise<CupcatList> => {
    const response = await serverApi.get<CupcatList>(`/api/v1/users/cupcats`);
    return response.result;
  },
};
