"use client";
import { useState } from "react";
import { EmptyHeart, FullHeart, Crosshair } from "@assets/icons";
import useMap from "./useMap";

const defaultBtnStyle = `w-11 h-11 flex justify-center items-center bg-white rounded-[1.375rem] shadow-[0_0_11px_0_rgba(153,153,159,0.26)] cursor-pointer`;
const clickedBtnStyle = `w-11 h-11 flex justify-center items-center bg-Main_Blue rounded-[1.375rem] shadow-[0_0_11px_0_rgba(153,153,159,0.26)] cursor-pointer`;

const SearchMenu = () => {
  const { setCurrentLocation } = useMap();
  const [showNear, setShowNear] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error ", error);
        }
      );
    } else {
      alert("현재 위치를 가져올 수 없습니다.");
    }
  };

  return (
    <div className="w-full flex flex-row justify-between px-5 absolute z-10 top-[4.75rem]">
      <span
        className={`flex h-9 px-4 py-2 justify-center items-center rounded-[1.15625rem] border-[1.2px] border-Pale_Blue_1 Body_2_bold cursor-pointer ${
          showNear
            ? "bg-Main_Blue text-white shadow-[0_0_11px_0_rgba(153,153,159,0.26)]"
            : " bg-white text-Main_Blue shadow-[0_0_12.7px_0_rgba(175,176,187,0.31)]"
        }`}
        onClick={() => setShowNear(!showNear)}
      >
        가까운 카페
      </span>
      <span className="flex flex-col gap-4">
        {showHeart ? (
          <div
            className={clickedBtnStyle}
            onClick={() => setShowHeart(!showHeart)}
          >
            <FullHeart width={24} height={24} />
          </div>
        ) : (
          <div
            className={defaultBtnStyle}
            onClick={() => setShowHeart(!showHeart)}
          >
            <EmptyHeart width={24} height={24} />
          </div>
        )}
        <div className={defaultBtnStyle} onClick={handleCurrentLocation}>
          <Crosshair width={24} height={24} />
        </div>
      </span>
    </div>
  );
};

export default SearchMenu;
