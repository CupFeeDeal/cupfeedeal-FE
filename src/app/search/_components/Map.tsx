"use client";

import { useEffect, useRef } from "react";
import { Coordinates, NaverMap } from "src/types/search";
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from "./useMap";

type MapProps = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};

const Map = ({
  mapId = "map",
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
}: MapProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { initializeMap } = useMap();

  // 지도 초기화
  useEffect(() => {
    if (!mapRef.current || !window.naver) return;

    const mapOptions = {
      center: new window.naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: window.naver.maps.Position.BOTTOM_LEFT,
      },
    };

    const map = new window.naver.maps.Map(mapRef.current, mapOptions);
    initializeMap(map);

    return () => {
      map.destroy();
    };
  }, [initializeMap, initialCenter, initialZoom]);

  return (
    <div id={mapId} ref={mapRef} style={{ width: "300px", height: "600px" }} />
  );
};

export default Map;
