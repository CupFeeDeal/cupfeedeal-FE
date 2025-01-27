import { privateApi } from "./client";
import { SubscriptionResponse } from "src/types/subscription";

export const subscriptionApi = {
  cancelSubscription: (user_subscription_id: number) =>
    privateApi.patch<null>(
      `/api/v1/userSubscription/cancel/${user_subscription_id}`
    ),
};
