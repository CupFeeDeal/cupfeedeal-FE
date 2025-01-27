export interface SubscriptionCard {
  user_subscription_id: number;
  cafe_id: number;
  cafe_name: string;
  menu: string;
  price: number;
  period: number;
  saved_cups: number;
  is_used: boolean;
  visit: number;
  start: string;
  end: string;
  remaining_days: number;
}

export interface SubscriptionResponse {
  paw_count: number;
  userSubscriptionListResponseDtos: SubscriptionCard[];
}

// Card에 필요한 props
export interface CardProps extends SubscriptionCard {
  backgroundClass: string;
  showDetails: boolean;
  idx: number;
  total: number;
}

// 구독 카드
export interface SubscriptionCardData {
  id: number;
  name: string;
  menu: string;
  price: number;
  period: number;
  savedCups: number;
  isUsed: boolean;
  start: string;
  end: string;
  visit: number;
  remain: number;
}
