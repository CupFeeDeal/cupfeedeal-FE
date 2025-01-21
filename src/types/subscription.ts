// 구독 카드
export interface SubscriptionCardData {
  name: string;
  menu: string;
  price: number;
  period: number;
  savedCups: number;
  isUsed: boolean;
  start: string;
  end: string;
  visit: number;
}

// Card에 필요한 props
export interface CardProps extends SubscriptionCardData {
  backgroundClass: string;
  showDetails: boolean;
  idx: number;
  total: number;
}
