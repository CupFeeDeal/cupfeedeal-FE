// 구독 카드
export interface SubscriptionCardData {
  name: string;
  menu: string;
  period: number;
  savedCups: number;
}

// Card에 필요한 props
export interface CardProps extends SubscriptionCardData {
  backgroundClass: string;
  showDetails: boolean;
  idx: number;
  total: number;
}
