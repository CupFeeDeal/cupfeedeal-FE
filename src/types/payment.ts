export interface PaymentResponse {
  cafe_id: number;
  cafe_name: string;
  menus: string[];
  periods: number[];
  userSubscriptionInfo: {
    user_subscription_id: number;
    menu: string;
    period: number;
    price: number;
    end: string;
  } | null;
  cafe_subscriptions: Array<{
    subscription_id: number;
    menu: string;
    period: number;
    price: number;
  }>;
}

// 공통되는 기본 타입
export interface BasicSubscription {
  cafe_name?: string;
  menu: string;
  period: number;
  price: number;
}

// 카페 구독권 정보
export interface CafeSubscription extends BasicSubscription {
  subscription_id: number;
}

// 유저 구독권 정보
export interface UserSubscription extends BasicSubscription {
  user_subscription_id: number;
  end: string;
}

// 실질적으로 props에서 사용
export type PaymentProps = {
  data: PaymentResponse;
  type: "extend" | "new";
};

// wrapper에서 감싸주는 context 타입
export interface PaymentContextType {
  selectedSubscription: CafeSubscription | null;
  handleSubscriptionChange: (sub: CafeSubscription | null) => void;
  startDate: Date | null;
  endDate: Date | null;
  handleDateChange: (date: Date | null) => void;
}

// 달력에서 사용
export interface CalendarProps {
  isExtension: boolean;
  startDate: Date | null;
  endDate: Date | null;
  selectedSubscription: CafeSubscription | null;
  onDateSelect?: (date: Date) => void;
}

export interface Day {
  date: Date;
  isActive: boolean;
  isCurrentMonth: boolean;
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
