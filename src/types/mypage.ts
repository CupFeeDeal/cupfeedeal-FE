export interface MyInfo {
  username: string;
  user_level: number;
  cupcatImgUrl: string;
  cafe_name: string;
  birth_date: string;
}

// 구독 내역
export interface Subscription {
  user_subscription_id: number;
  cafe_name: string;
  menu: string;
  cafe_subscription_name: string;
  period: number;
  price: number;
  start: string;
  end: string;
  status: string;
}

export interface HistoryItem {
  id: number;
  name: string;
  menu: string;
  subscriptionName: string;
  period: number;
  price: number;
  start: string;
  end: string;
  isAvailable: boolean;
}

// 지나간 컵캣
export interface Cupcat {
  cafe_name: string;
  cupcat_img_url: string;
}

export interface CupcatList {
  level: number;
  cupcats: Cupcat[];
}

// 문의하기
export interface Input {
  email: string;
  category: string;
  description: string;
}

export interface SelectProps {
  options: string[];
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}
