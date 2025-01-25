export interface BannerInfo {
  userId: number;
  subscription_count: number;
  cupcapImgUrl: string;
}

export interface RecommendCafe {
  cafe_id: number;
  name: string;
  address: string;
  subscription_price: number;
  image_url: string;
}

export interface NewCafe {
  cafe_id: number;
  name: string;
  address: string;
  image_url: string;
}
