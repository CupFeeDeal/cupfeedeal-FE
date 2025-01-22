"use client";

import { useEffect, useRef, useState } from "react";
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from "./useMap";

import { MapProps, Cafe } from "src/types/search";
import useSelectedCafeStore from "@store/useSelectedCafeStore";
import { searchApi } from "@api/search";

const Map = ({
  mapId = "map",
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  query,
}: MapProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { initializeMap, addMarker } = useMap();
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const [cafes, setCafes] = useState<Cafe[]>([]);

  // 카페 목록 받아오기
  useEffect(() => {
    const fetchCafes = async () => {
      try {
        const cafesData = await searchApi.getCafes(query, 1, true);
        console.log("cafesData: ", cafesData);
        setCafes(cafesData);
        console.log("cafes: ", cafes);
      } catch (error) {
        console.error("Failed to fetch cafes:", error);
      }
    };

    if (isMapLoaded) {
      fetchCafes();
    }
  }, [isMapLoaded, query]);

  // 현재 선택한 카페
  const {
    selectedCafeId,
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
    setIsSheetOpen,
    setSelectedCafeId,
    setShowBottomSheet,
  ]);

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

  return (
    <div
      id={mapId}
      ref={mapRef}
      style={{ width: "100%", height: "calc(100vh - 48px)" }}
    />
  );
};

export default Map;
