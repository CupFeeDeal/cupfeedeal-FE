"use client";
import { useEffect, useState } from "react";
import { EmptyHeart, FullHeart, Crosshair } from "@assets/icons";
import useMap from "./useMap";
import { useRouter } from "next/navigation";
import { token } from "@api/client";
import LoginModal from "./modal/LoginModal";
import { searchApi } from "@api/search";
import { useCafeListStore } from "@store/useCafeListStore";

const defaultBtnStyle = `w-11 h-11 flex justify-center items-center bg-white rounded-[1.375rem] shadow-[0_0_11px_0_rgba(153,153,159,0.26)] cursor-pointer`;
const clickedBtnStyle = `w-11 h-11 flex justify-center items-center bg-Main_Blue rounded-[1.375rem] shadow-[0_0_11px_0_rgba(153,153,159,0.26)] cursor-pointer`;

const SearchMenu = () => {
  const { setCurrentLocation } = useMap();
  const router = useRouter();
  const setCafes = useCafeListStore((state) => state.setCafes);

  const [showHeart, setShowHeart] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [accessToken, setAccessToken] = useState<string | null | undefined>(
    null
  );

  useEffect(() => {
    setAccessToken(token.get());
  }, []);

  // 좋아요 버튼 눌렀을 때
  const handleClickHeart = async () => {
    if (!accessToken) {
      setShowLoginModal(true);
      return;
    }

    try {
      const isLikeOnly = !showHeart;
      const cafesData = await searchApi.getCafes("", isLikeOnly);
      setCafes(cafesData);
      setShowHeart(isLikeOnly);
    } catch (error) {
      console.error(error);
    }
  };

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
    <>
      <div className="w-full flex flex-row justify-between px-5">
        <span
          className={`absolute z-10 top-[4.75rem] flex h-9 px-4 py-2 justify-center items-center rounded-[1.15625rem] border-[1.2px] border-Pale_Blue_1 Body_2_bold cursor-pointer bg-white text-Main_Blue shadow-[0_0_12.7px_0_rgba(175,176,187,0.31)] hover:bg-Main_Blue hover:text-white hover:shadow-[0_0_11px_0_rgba(153,153,159,0.26)]`}
          onClick={() => router.push("/search/nearList")}
        >
          가까운 카페
        </span>
        <span className="absolute z-10 top-[4.75rem] right-5 flex flex-col gap-4">
          {showHeart ? (
            <div className={clickedBtnStyle} onClick={handleClickHeart}>
              <FullHeart width={24} height={24} />
            </div>
          ) : (
            <div className={defaultBtnStyle} onClick={handleClickHeart}>
              <EmptyHeart width={24} height={24} />
            </div>
          )}
          <div className={defaultBtnStyle} onClick={handleCurrentLocation}>
            <Crosshair width={24} height={24} />
          </div>
        </span>
      </div>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={() => router.push("/")}
        message="즐겨찾기를 보려면"
      />
    </>
  );
};

export default SearchMenu;
