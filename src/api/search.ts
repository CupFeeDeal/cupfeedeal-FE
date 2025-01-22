import { publicApi } from "./client";
import { Cafe } from "src/types/search";

export const searchApi = {
  getCafes: async (query?: string, userId?: number, like?: boolean) => {
    let url = `/api/v1/cafe?`;
    if (query && query.trim() !== "") {
      url += `search=${encodeURIComponent(query)}&`;
    }

    if (like !== undefined) {
      url += `like=${like}`;
    }

    const response = await publicApi.get<Cafe[]>(
      `/api/v1/cafe?search=${query}&like=${like}`
    );
    return response.result;
  },
};
