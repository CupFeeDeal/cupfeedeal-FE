import { privateApi } from "@api/client";
import { CafeDetail } from "src/types/search";

export const searchClientApi = {
  // 탐색페이지 카페 상세
  getCafeDetail: async (cafeId: number): Promise<CafeDetail> => {
    const response = await privateApi.get<CafeDetail>(`/api/v1/cafe/${cafeId}`);
    return response.result;
  },

  // 카페 좋아요 등록
  postLike: async (cafeId: number) => {
    const response = await privateApi.post<{ cafeId: number }>(
      `/api/v1/like/like`,
      { cafeId: cafeId }
    );
    return response.result;
  },

  // 카페 좋아요 삭제
  deleteLike: async (cafeId: number) => {
    const response = await privateApi.delete(`/api/v1/like/like`, {
      cafeId: cafeId,
    });
    return response.result;
  },
};
