import { serverApi } from "@api/server";
import { RecommendCafe, NewCafe, BannerInfo } from "src/types/home";

export const homeApi = {
  // 홈 배너
  getBannerInfo: () => serverApi.get<BannerInfo>("/api/v1/users/main"),

  // 홈 추천 카페
  getRecommendCafes: () =>
    serverApi.get<RecommendCafe[]>("/api/v1/cafe/recommendation"),

  // 홈 신상 카페
  getNewCafes: () => serverApi.get<NewCafe[]>("/api/v1/cafe/new"),
};
