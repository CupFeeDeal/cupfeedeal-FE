"use client";

import { useCallback, useRef } from "react";
import useSWR, { mutate } from "swr";

// types
import { Coordinates, NaverMap, Cafe } from "src/types/search";
import { useRouter } from "next/navigation";

export const INITIAL_CENTER: Coordinates = [37.56717167, 126.931102];
export const INITIAL_ZOOM = 17;
export const MAP_KEY = "/serach";

const useMap = () => {
  const router = useRouter();

  const { data: map } = useSWR(MAP_KEY); // 지도 상태 관리
  const markersRef = useRef<naver.maps.Marker[]>([]); // 마커 배열 관리

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

  // 현재 위치 가져오기
  const getCurrentLocation = useCallback(
    (): Promise<Coordinates> =>
      new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error());
        }
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve([latitude, longitude]);
          },
          (error) => reject(error),
          { enableHighAccuracy: true }
        );
      }),
    []
  );

  // 지도 옵션 가져오기
  const getMapOptions = useCallback(() => {
    const mapCenter = map.getCenter();
    const center: Coordinates = [mapCenter.lat(), mapCenter.lng()];
    const zoom = map.getZoom();

    return { center, zoom };
  }, [map]);

  // 마커 리셋
  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
  }, []);

  // 마커 추가하기
  const addMarker = useCallback(
    (
      locations: Cafe[],
      selectedCafeId: number | null,
      setSelectedCafeId: (id: number | null) => void
    ) => {
      if (!map) return;
      clearMarkers();

      locations.forEach((location) => {
        const isSelected = selectedCafeId === location.id;

        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            parseFloat(location.address_lat),
            parseFloat(location.address_lng)
          ),
          map: map,
          title: location.name,
          icon: {
            content: isSelected
              ? `
              <div style="
                width: 40px; 
                height: 46px; 
                display: flex; 
                justify-content: center; 
                align-items: center;
              ">
                <img src='/svg/PinMarker.svg' style="width: 100%; height: 100%; object-fit: contain;"/>
              </div>`
              : location.is_like
              ? `
              <div style="width: 60px; height: 60px; display: flex; justify-content: center; align-items: center;">
                <img src='/svg/LikeMarker.png' style="width: 100%; height: 100%;"/>
              </div>
              `
              : `
              <div style="width: 40px; height: 46px; display: flex; justify-content: center; align-items: center;">
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
              </div>
            </div>`,
            anchor: new naver.maps.Point(20, 23),
          },
          zIndex: isSelected ? 40 : 35,
        });

        // 마커 클릭 이벤트리스너
        naver.maps.Event.addListener(marker, "click", () => {
          //setSelectedCafeId(isSelected ? null : location.id);
          const currentParams = new URLSearchParams(window.location.search);
          currentParams.set("id", String(location.id));
          router.push(`/search?${currentParams.toString()}`);

          // 바텀시트를 고려한 정중앙 배치
          if (map) {
            const currentCenter = new naver.maps.LatLng(
              parseFloat(location.address_lat),
              parseFloat(location.address_lng)
            );

            // 지도 중심에서 253px만큼 위로 이동된 좌표 계산
            const pixelOffset = 253 / 2;
            const proj = map.getProjection();
            const point = proj.fromCoordToOffset(currentCenter);
            point.y += pixelOffset;
            const newCenter = proj.fromOffsetToCoord(point);

            // 지도 중심 이동
            map.panTo(newCenter);
          }
        });

        markersRef.current.push(marker);
      });
    },
    [map, clearMarkers]
  );

  return {
    map,
    initializeMap,
    resetMapOptions,
    setCurrentLocation,
    getCurrentLocation,
    getMapOptions,
    addMarker,
  };
};

export default useMap;
