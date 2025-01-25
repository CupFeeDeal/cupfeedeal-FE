export type NaverMap = naver.maps.Map;

export type MapProps = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  //query?: string;
  cafes: Cafe[];
};

type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];

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
