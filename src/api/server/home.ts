import { serverApi } from "@api/server";
import { RecommendCafe, NewCafe, BannerInfo } from "src/types/home";

export const homeApi = {
  getBannerInfo: () => serverApi.get<BannerInfo>("/api/v1/users/main"),

  getRecommendCafes: () =>
    serverApi.get<RecommendCafe[]>("/api/v1/cafe/recommendation"),

  getNewCafes: () => serverApi.get<NewCafe[]>("/api/v1/cafe/new"),
};
