export type NaverMap = naver.maps.Map;

// 지도 props
export type MapProps = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  cafes: Cafe[];
};

type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];

// 카페 리스트의 개별 카페
export type Cafe = {
  id: number;
  name: string;
  address_lat: string;
  address_lng: string;
  address: string;
  price: number;
  image_url: string;
  is_like: boolean;
};

// 카페 상세
export interface CafeDetail {
  id: number;
  name: string;
  address: string;
  address_lat: string;
  address_lng: string;
  menus: string[];
  periods: number[];
  images: Image[];
  operation_time: string;
  phone_num: string;
  sns_address: string;
  description: string;
  is_like: boolean;
  is_subscription: boolean;
}

interface Image {
  image_url: string;
}
