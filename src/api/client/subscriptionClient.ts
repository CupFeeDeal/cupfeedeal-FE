import { privateApi } from "@api/client";
import {
  SubscriptionResponse,
  UseSubscriptionResult,
  CancelSubscriptionResult,
} from "src/types/subscription";

export const subscriptionClientApi = {
  getSubscription: () =>
    privateApi.get<SubscriptionResponse>("/api/v1/userSubscription"),

  useSubscription: (user_subscription_id: number) =>
    privateApi.patch<UseSubscriptionResult>(
      `/api/v1/userSubscription/${user_subscription_id}`
    ),

  cancelSubscription: (user_subscription_id: number) =>
    privateApi.patch<CancelSubscriptionResult>(
      `/api/v1/userSubscription/cancel/${user_subscription_id}`
    ),

  postSubscription: (data: {
    cafeSubscriptionTypeId: number;
    subscriptionStart: string;
  }) => privateApi.post<SubscriptionResponse>("/api/v1/userSubscription", data),
};
