import { privateApi, publicApi } from "./client";
import { RecommendCafe, NewCafe, BannerInfo } from "src/types/home";

export const homeApi = {
  // getBannerInfo: () => privateApi.get<BannerInfo>("/api/v1/users/main"),

  getRecommendCafes: () =>
    publicApi.get<RecommendCafe[]>("/api/v1/cafe/recommendation"),

  getNewCafes: () => publicApi.get<NewCafe[]>("/api/v1/cafe/new"),
};
