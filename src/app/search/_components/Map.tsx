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

  // 카페 목록 정보
  const cafes = useCafeListStore((state) => state.cafes);
  const setCafes = useCafeListStore((state) => state.setCafes);

  // 카페 목록 받아오기
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

  // 현재 선택한 카페 정보
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

  // 지도 객체 생성 및 초기 설정
  useEffect(() => {
    if (!isMapLoaded || !mapRef.current) return;

    // 선택된 카페 o -> 해당 카페 좌표로 초기 중앙 설정
    let centerLatLng = new naver.maps.LatLng(...initialCenter);
    const foundCafe = cafes.find((c) => c.id === selectedCafeId);
    if (foundCafe) {
      centerLatLng = new naver.maps.LatLng(
        parseFloat(foundCafe.address_lat),
        parseFloat(foundCafe.address_lng)
      );
    }

    const mapOptions = {
      center: centerLatLng,
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
    initializeMap(map);

    if (foundCafe) {
      const proj = map.getProjection();
      const point = proj.fromCoordToOffset(centerLatLng);
      const pixelOffset = 253 / 2;
      point.y += pixelOffset;
      const newCenter = proj.fromOffsetToCoord(point);

      // 초기 지도 위치를 오프셋 적용 좌표로 세팅
      map.setCenter(newCenter);
    }

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
