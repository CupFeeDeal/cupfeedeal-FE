export interface CafeSubscription {
  subscription_id: number;
  menu: string;
  period: number;
  price: number;
}

export interface UserSubscriptionInfo {
  user_subscription_id: number;
  menu: string;
  period: number;
  price: number;
  end: string;
}

export interface PaymentResponse {
  cafe_id: number;
  cafe_name: string;
  menus: string[];
  periods: number[];
  userSubscriptionInfo: UserSubscriptionInfo | null;
  cafe_subscriptions: CafeSubscription[];
}

export const MOCK_PAYMENT_DATA: PaymentResponse = {
  cafe_id: 1,
  cafe_name: "지구커피",
  menus: ["아이스 아메리카노"],
  periods: [2, 4],
  userSubscriptionInfo: {
    user_subscription_id: 1,
    menu: "아이스 아메리카노",
    period: 4,
    price: 54000,
    end: "2025-02-09T17:53:52.688Z",
  },
  cafe_subscriptions: [
    {
      subscription_id: 1,
      menu: "아이스 아메리카노",
      period: 2,
      price: 30000,
    },
    {
      subscription_id: 2,
      menu: "아이스 아메리카노",
      period: 4,
      price: 54000,
    },
  ],
};
