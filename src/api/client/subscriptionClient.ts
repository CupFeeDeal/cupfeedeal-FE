import { privateApi } from "@api/client";
import {
  SubscriptionResponse,
  UseSubscriptionResult,
  CancelSubscriptionResult,
} from "src/types/subscription";

export const subscriptionClientApi = {
  // 구독권 정보 불러오기
  getSubscription: () =>
    privateApi.get<SubscriptionResponse>("/api/v1/userSubscription"),

  // 구독권 사용
  useSubscription: (user_subscription_id: number) =>
    privateApi.patch<UseSubscriptionResult>(
      `/api/v1/userSubscription/${user_subscription_id}`
    ),

  // 구독권 취소
  cancelSubscription: (user_subscription_id: number) =>
    privateApi.patch<CancelSubscriptionResult>(
      `/api/v1/userSubscription/cancel/${user_subscription_id}`
    ),

  // 구독권 결제
  postSubscription: (data: {
    cafeSubscriptionTypeId: number;
    subscriptionStart: string;
  }) => privateApi.post<SubscriptionResponse>("/api/v1/userSubscription", data),
};
