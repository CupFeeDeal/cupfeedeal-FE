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

export interface UseSubscriptionResult {
  is_getting_paw: boolean;
  saved_cups: number;
  paw_count: number;
}

export interface CancelSubscriptionResult {
  paw_count: number;
}

// Card에 필요한 props
export interface CardProps extends SubscriptionCard {
  backgroundClass: string;
  showDetails: boolean;
  idx: number;
  total: number;
}
