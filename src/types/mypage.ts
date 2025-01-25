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
