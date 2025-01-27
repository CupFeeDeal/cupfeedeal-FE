import { useCallback } from "react";

/**
 * @param lat1
 * @param lng1
 * @param lat2
 * @param lng2
 * @returns 두 지점 사이의 거리 (m)
 */

const calculateDistance = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number => {
  const R = 6371e3; // 지구 반지름
  const toRadians = (deg: number) => (deg * Math.PI) / 180;

  const lat1toRad = toRadians(lat1);
  const lat2toRad = toRadians(lat2);
  const latDiff = toRadians(lat2 - lat1);
  const lngDiff = toRadians(lng2 - lng1);

  const a =
    Math.sin(latDiff / 2) ** 2 +
    Math.cos(lat1toRad) * Math.cos(lat2toRad) * Math.sin(lngDiff / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

// 거리 m->km 포맷팅
const formatDistance = (distance: number | null) => {
  if (distance === null) {
    return "";
  }
  if (distance >= 1000) {
    return `${(distance / 1000).toFixed(2)}km`;
  }
  return `${distance}m`;
};

const useDistance = () => {
  const getDistance = useCallback(calculateDistance, []);
  return { getDistance, formatDistance };
};

export default useDistance;
