import { serverApi } from "@api/server";
import { Cafe, CafeDetail } from "src/types/search";

export const searchServerApi = {
  // 탐색페이지 카페 리스트
  getCafes: (query?: string, like?: boolean): Promise<Cafe[]> => {
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
    return serverApi.get<Cafe[]>(finalUrl).then((response) => response.result);
  },

  // 탐색페이지 카페 상세
  // getCafeDetail: async (cafeId: number): Promise<CafeDetail> => {
  //   const response = await serverApi.get<CafeDetail>(`/api/v1/cafe/${cafeId}`);
  //   return response.result;
  // },
};
