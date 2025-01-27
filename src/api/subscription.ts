import { serverApi } from "./server";
import { SubscriptionResponse } from "src/types/subscription";

export const subscriptionApi = {
  getSubscriptionData: () =>
    serverApi.get<SubscriptionResponse>("/api/v1/userSubscription"),
};
