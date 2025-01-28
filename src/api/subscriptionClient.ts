import { privateApi } from "./client";

export const subscriptionClientApi = {
  useSubscription: (user_subscription_id: number) =>
    privateApi.patch<{ is_getting_paw: boolean }>(
      `/api/v1/userSubscription/${user_subscription_id}`
    ),

  cancelSubscription: (user_subscription_id: number) =>
    privateApi.patch<null>(
      `/api/v1/userSubscription/cancel/${user_subscription_id}`
    ),

  postSubscription: (data: {
    cafeSubscriptionTypeId: number;
    subscriptionStart: string;
  }) => privateApi.post<null>("/api/v1/userSubscription", data),
};
