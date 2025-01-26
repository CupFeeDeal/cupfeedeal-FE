import { privateApi } from "./client";
import { Cafe, CafeDetail } from "src/types/search";

export const searchApi = {
  // 탐색페이지 카페 리스트
  getCafes: async (query?: string, like?: boolean): Promise<Cafe[]> => {
    const url = `/api/v1/cafe`;
    const params: string[] = [];

    // 검색어 params
    if (query && query.trim() !== "") {
      params.push(`search=${encodeURIComponent(query)}`);
    }
    // 좋아요 여부 params (like=true만 추가)
    if (like === true) {
      params.push(`like=${like}`);
    }

    // 최종 url
    const finalUrl = params.length > 0 ? `${url}?${params.join("&")}` : url;
    const response = await privateApi.get<Cafe[]>(finalUrl);
    return response.result;
  },

  // 탐색페이지 카페 상세
  getCafeDetail: async (cafeId: number): Promise<CafeDetail> => {
    const response = await privateApi.get<CafeDetail>(`/api/v1/cafe/${cafeId}`);
    return response.result;
  },
};

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
