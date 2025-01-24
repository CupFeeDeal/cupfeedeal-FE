"use client";

import { useEffect, useRef, useState } from "react";
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from "./useMap";
import { MapProps } from "src/types/search";
import useSelectedCafeStore from "@store/useSelectedCafeStore";
import { searchApi } from "@api/search";
import { useCafeListStore } from "@store/useCafeListStore";

const Map = ({
  mapId = "map",
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  query,
}: MapProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { initializeMap, addMarker } = useMap();
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // cafe 정보
  const cafes = useCafeListStore((state) => state.cafes);
  const setCafes = useCafeListStore((state) => state.setCafes);

  // 선택된 카페 정보 + 이전 지도 중심
  const {
    selectedCafeId,
    oldCenter,
    setSelectedCafeId,
    setShowBottomSheet,
    setIsSheetOpen,
  } = useSelectedCafeStore();

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

    // 전역에 저장 (useMap에 있는 initializeMap)
    initializeMap(map);

    // 지도 클릭/드래그 시 showBottomSheet 비활성화
    naver.maps.Event.addListener(map, "click", () => {
      setShowBottomSheet(false);
      setIsSheetOpen(false);
      setSelectedCafeId(null);
    });
    naver.maps.Event.addListener(map, "dragstart", () => {
      setShowBottomSheet(false);
      setIsSheetOpen(false);
      setSelectedCafeId(null);
    });
  }, [
    initializeMap,
    initialCenter,
    initialZoom,
    isMapLoaded,
    oldCenter,
    setIsSheetOpen,
    setSelectedCafeId,
    setShowBottomSheet,
  ]);

  // 카페 목록 api 호출
  useEffect(() => {
    const fetchCafes = async () => {
      try {
        const cafesData = await searchApi.getCafes(query, false);
        console.log("cafesData: ", cafesData);
        setCafes(cafesData);
      } catch (error) {
        console.error(error);
      }
    };

    if (isMapLoaded) {
      fetchCafes();
    }
  }, [isMapLoaded, query, setCafes]);

  // 마커 찍기
  useEffect(() => {
    if (isMapLoaded) {
      addMarker(cafes, selectedCafeId, (id) => {
        setSelectedCafeId(id);
        setShowBottomSheet(!!id);
      });
    }
  }, [
    addMarker,
    isMapLoaded,
    selectedCafeId,
    setSelectedCafeId,
    setShowBottomSheet,
    cafes,
  ]);

  const { map } = useMap();

  useEffect(() => {
    if (!isMapLoaded) return;

    const foundCafe = cafes.find((c) => c.id === selectedCafeId);
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
  }, [map, isMapLoaded, cafes, selectedCafeId]);

  return (
    <div
      id={mapId}
      ref={mapRef}
      style={{ width: "100%", height: "calc(100vh - 48px)" }}
    />
  );
};

export default Map;
