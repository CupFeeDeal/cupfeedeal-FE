import { serverApi } from "./server";
import { PaymentResponse } from "src/types/payment";

export const paymentApi = {
  getPaymentData: (id: number, isExtension: boolean) =>
    serverApi.get<PaymentResponse>(
      `/api/v1/cafe/cafeSubscription/info?id=${id}&isExtension=${isExtension}`
    ),

  postPaymentData: (data: {
    cafeSubscriptionTypeId: number;
    subscriptionStart: string;
  }) => serverApi.post<null>("/api/v1/userSubscription", data),
};
