export interface MyInfo {
  username: string;
  user_level: number;
  cupcatImgUrl: string;
  cafe_name: string;
  birth_date: string;
}

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

export interface Cupcat {
  cafe_name: string;
  cupcat_img_url: string;
}

export interface CupcatList {
  level: number;
  cupcats: Cupcat[];
}
