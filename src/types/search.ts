export type NaverMap = naver.maps.Map;

export type MapProps = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  query?: string;
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
