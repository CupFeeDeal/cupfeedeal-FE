import { privateApi } from "./client";

export const likeApi = {
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
