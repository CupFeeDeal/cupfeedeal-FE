"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// components
import LoginModal from "@common/LoginModal";
// icons
import { EmptyHeart, FullHeart, Crosshair } from "@assets/icons";
// api
import { token } from "@api/token";
// hook
import useMap from "./useMap";
// constant
import { CLICKED_BTN_STYLE, DEFAULT_BTN_STYLE } from "../_constants/constants";

interface SearchMenuProps {
  isLikeOnly: boolean;
  toggleLike: () => void;
}
const SearchMenu: React.FC<SearchMenuProps> = ({ isLikeOnly, toggleLike }) => {
  const router = useRouter();
  const { setCurrentLocation } = useMap();
  const [showLoginModal, setShowLoginModal] = useState(false);

  // 좋아요 보기 버튼 눌렀을 때
  const handleClickHeart = async () => {
    const accessToken = await token.get();

    if (!accessToken) {
      setShowLoginModal(true);
      return;
    }
    toggleLike();
  };

  // 현위치로 이동 핸들러
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(latitude, longitude);
        },
        (error) => {
          console.error(error);
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
          <div
            className={isLikeOnly ? CLICKED_BTN_STYLE : DEFAULT_BTN_STYLE}
            onClick={handleClickHeart}
          >
            {isLikeOnly ? (
              <FullHeart width={24} height={24} />
            ) : (
              <EmptyHeart width={24} height={24} />
            )}
          </div>
          <div className={DEFAULT_BTN_STYLE} onClick={handleCurrentLocation}>
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
