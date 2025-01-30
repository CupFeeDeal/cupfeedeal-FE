import { serverApi } from "@api/server";
import { SubscriptionResponse } from "src/types/subscription";
import { PaymentResponse } from "src/types/payment";

export const subscriptionServerApi = {
  // 구독권 정보 불러오기 (in 서버단)
  getSubscriptionData: () =>
    serverApi.get<SubscriptionResponse>("/api/v1/userSubscription"),

  // 결제 정보 불러오기
  getPaymentData: (id: number, isExtension: boolean) =>
    serverApi.get<PaymentResponse>(
      `/api/v1/cafe/cafeSubscription/info?id=${id}&isExtension=${isExtension}`
    ),
};
