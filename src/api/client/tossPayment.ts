import { loadTossPayments } from "@tosspayments/payment-sdk";

interface TossPaymentParams {
  amount: number;
  orderId: string;
  orderName: string;
  subscription_id: number;
  startDate: string;
}

export const tossPaymentApi = {
  requestPayment: async ({
    amount,
    orderId,
    orderName,
    subscription_id,
    startDate,
  }: TossPaymentParams) => {
    const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;
    if (!clientKey) throw new Error("토스 클라이언트 키가 없음");

    const tossPayments = await loadTossPayments(clientKey);

    try {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.append("success", "true");
      currentUrl.searchParams.append("subId", subscription_id.toString());
      currentUrl.searchParams.append("subStart", startDate);

      return await tossPayments.requestPayment("카드", {
        amount,
        orderId,
        orderName,
        successUrl: currentUrl.toString(),
        failUrl: window.location.href,
      });
    } catch (error) {
      if ((error as Record<string, string>).code === "USER_CANCEL") {
        console.error("결제 취소");
      }
    }
    console.error("결제 중 오류 발생");
  },
};
