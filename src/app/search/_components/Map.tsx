"use client";

import { useEffect, useRef, useState } from "react";
import { Coordinates, NaverMap } from "src/types/search";
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from "./useMap";

type MapProps = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
};

const Map = ({
  mapId = "map",
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
}: MapProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { initializeMap } = useMap();
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // naver 스크립트 로드 확인
  useEffect(() => {
    const checkNaverLoaded = () => {
      if (typeof window !== "undefined" && window.naver) {
        setIsMapLoaded(true);
      } else {
        setTimeout(checkNaverLoaded, 100);
      }
    };
    checkNaverLoaded();
  }, []);

  useEffect(() => {
    if (!isMapLoaded || !mapRef.current) return;

    // 지도 초기화
    const mapOptions = {
      center: new naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };

    const map = new naver.maps.Map(mapRef.current, mapOptions);
    initializeMap(map);

    return () => {
      map.destroy();
    };
  }, [initializeMap, initialCenter, initialZoom, isMapLoaded]);

  return (
    <div id={mapId} ref={mapRef} style={{ width: "100%", height: "100vh" }} />
  );
};

export default Map;
