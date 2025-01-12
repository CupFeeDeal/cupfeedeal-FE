"use client";

import { useCallback } from "react";
import { Coordinates, NaverMap } from "src/types/search";
import useSWR, { mutate } from "swr";

export const INITIAL_CENTER: Coordinates = [37.5262411, 126.99289439];
export const INITIAL_ZOOM = 15;
export const MAP_KEY = "/serach";

const useMap = () => {
  // 지도 상태 관리
  const { data: map } = useSWR(MAP_KEY);

  // 지도 초기화
  const initializeMap = useCallback((map: NaverMap) => {
    mutate(MAP_KEY, map);
  }, []);

  // 지도 리셋
  const resetMapOptions = useCallback(() => {
    map.morph(new naver.maps.LatLng(...INITIAL_CENTER), INITIAL_ZOOM);
  }, [map]);

  // 현재 위치 설정
  const setCurrentLocation = useCallback(
    (latitude: number, longitude: number) => {
      if (!map) return;

      const currentLocation = new naver.maps.LatLng(latitude, longitude);
      // new naver.maps.Marker({
      //   position: currentLocation,
      //   map,
      //   title: "Current location",
      // });

      map.setCenter(currentLocation);
    },
    [map]
  );

  // 지도 옵션 가져오기
  const getMapOptions = useCallback(() => {
    const mapCenter = map.getCenter();
    const center: Coordinates = [mapCenter.lat(), mapCenter.lng()];
    const zoom = map.getZoom();

    return { center, zoom };
  }, [map]);

  // 마커 추가하기
  const addMarker = useCallback(
    (
      locations: {
        id: number;
        name: string;
        address_lat: number;
        address_lng: number;
      }[]
    ) => {
      if (!map) return;

      locations.forEach((location) => {
        new naver.maps.Marker({
          position: new naver.maps.LatLng(
            location.address_lat,
            location.address_lng
          ),
          map: map,
          title: location.name,
          icon: {
            content: `
              <div style="
                width: 30px;
                height: 30px;
                background-color: #1b7be8;
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0px 0px 12.7px 0px rgba(175, 176, 187, 0.31);
              ">
              <img src="/svg/CoffeeBeanMarker.svg" style="width: 18px; height: 18px;" />
            </div>`,
          },
        });
      });
    },
    [map]
  );

  return {
    initializeMap,
    resetMapOptions,
    setCurrentLocation,
    getMapOptions,
    addMarker,
  };
};

export default useMap;
