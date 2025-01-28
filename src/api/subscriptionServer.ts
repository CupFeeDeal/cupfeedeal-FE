import { serverApi } from "./server";
import { SubscriptionResponse } from "src/types/subscription";
import { PaymentResponse } from "src/types/payment";

export const subscriptionServerApi = {
  getSubscriptionData: () =>
    serverApi.get<SubscriptionResponse>("/api/v1/userSubscription"),

  getPaymentData: (id: number, isExtension: boolean) =>
    serverApi.get<PaymentResponse>(
      `/api/v1/cafe/cafeSubscription/info?id=${id}&isExtension=${isExtension}`
    ),
};
