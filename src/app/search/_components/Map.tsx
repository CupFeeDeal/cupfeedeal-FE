"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

// types
import { MapProps } from "src/types/search";
// store & hooks
import useSelectedCafeStore from "@store/useSelectedCafeStore";
import useMap from "./useMap";
// constants
import { INITIAL_CENTER, INITIAL_ZOOM } from "../_constants/constants";

const Map = ({
  mapId = "map",
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  cafes,
}: MapProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const { map, initializeMap, addMarker } = useMap();

  const searchParams = useSearchParams();
  const selectedId = Number(searchParams.get("id")); // 바텀시트에 들어갈 상세 카페 id

  // 선택된 카페 정보 + 이전 지도 중심
  const { oldCenter } = useSelectedCafeStore();

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

  // 지도 초기 생성
  useEffect(() => {
    if (!isMapLoaded || !mapRef.current) return;

    let initLatLng = new naver.maps.LatLng(...initialCenter);
    if (oldCenter) {
      initLatLng = new naver.maps.LatLng(oldCenter[0], oldCenter[1]);
    }

    const mapOptions = {
      center: initLatLng,
      zoom: initialZoom,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };

    // 지도 생성
    const map = new naver.maps.Map(mapRef.current, mapOptions);

    // 전역에 저장
    initializeMap(map);

    // 지도 클릭/드래그 시 showBottomSheet 비활성화
    naver.maps.Event.addListener(map, "click", () => {
      const params = new URLSearchParams(window.location.search);
      params.delete("id");
      window.history.pushState(null, "", `/search?${params.toString()}`);
    });

    naver.maps.Event.addListener(map, "dragstart", () => {
      const params = new URLSearchParams(window.location.search);
      params.delete("id");
      window.history.pushState(null, "", `/search?${params.toString()}`);
    });
  }, [initializeMap, initialCenter, initialZoom, isMapLoaded, oldCenter]);

  // 마커 찍기
  useEffect(() => {
    if (isMapLoaded) {
      addMarker(cafes, selectedId);
    }
  }, [addMarker, isMapLoaded, selectedId, cafes]);

  useEffect(() => {
    if (!isMapLoaded) return;

    const foundCafe = cafes.find((c) => c.id === selectedId);
    if (!foundCafe) return;

    if (!map) return;

    // 새로 이동할 좌표(해당 카페 위치)
    const newLatLng = new naver.maps.LatLng(
      parseFloat(foundCafe.address_lat),
      parseFloat(foundCafe.address_lng)
    );

    // 오프셋 적용
    const proj = map.getProjection();
    const point = proj.fromCoordToOffset(newLatLng);
    const pixelOffset = 253 / 2;
    point.y += pixelOffset;
    const offsetCenter = proj.fromOffsetToCoord(point);

    map.panTo(offsetCenter, { duration: 500 });
  }, [map, isMapLoaded, cafes, selectedId]);

  return (
    <div
      id={mapId}
      className="naver-map-container"
      ref={mapRef}
      style={{ width: "100%", height: "calc(100vh - 48px)" }}
    />
  );
};

export default Map;
