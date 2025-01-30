"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// components
import LoginModal from "../../../../common/LoginModal";
// api
import { searchClientApi } from "@api/client/searchClient";
import { token } from "@api/token";
// icons
import { FullHeart, EmptyHeart, Instagram } from "@assets/icons";
// store & hooks
import useMap from "../useMap";
import useSelectedCafeStore from "@store/useSelectedCafeStore";
import useDistance from "@app/search/_hooks/useDistance";
import { useCafeListStore } from "@store/useCafeListStore";
// types
import { CafeDetail } from "src/types/search";
// constants
import {
  HEART_STYLE,
  LABEL_STYLE,
  VALUE_STYLE,
} from "@app/search/_constants/constants";
import BottomSheetSkeleton from "./BottomSheetSkeleton";

interface BottomSheetContentProps {
  cafeId: number;
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-row justify-between items-start mb-3 z-25 gap-4">
      <span className={LABEL_STYLE}>{label}</span>
      <span className={`${VALUE_STYLE} w-[17.56rem]`}>{value}</span>
    </div>
  );
}

const BottomSheetContent = ({ cafeId }: BottomSheetContentProps) => {
  const router = useRouter();
  const accessToken = token.get();

  // 스토어
  const { updateCafeLikeStatus } = useCafeListStore();
  const { isSheetOpen } = useSelectedCafeStore();

  const [cafeInfo, setCafeInfo] = useState<CafeDetail | null>(null); // 실제 카페 정보
  const [fetchDone, setFetchDone] = useState(false); // fetch 완료 여부
  const [minTime, setMinTime] = useState(false); // 스켈레톤 최소 시간

  const [isLike, setIsLike] = useState(cafeInfo?.is_like || false);
  const [distance, setDistance] = useState<number | null>(null);

  // 비로그인 시 모달
  const [showModalforSave, setShowModalforSave] = useState(false);
  const [showModalforSubs, setShowModalforSubs] = useState(false);

  // 스켈레톤 렌더링
  useEffect(() => {
    // 초기화
    setCafeInfo(null);
    setFetchDone(false);
    setMinTime(false);
    setIsLike(false);
    setDistance(null);

    const timer = setTimeout(() => {
      setMinTime(true);
    }, 1000);

    searchClientApi
      .getCafeDetail(cafeId)
      .then((detail) => {
        setCafeInfo(detail);
        setIsLike(detail.is_like);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setFetchDone(true);
      });

    return () => {
      clearTimeout(timer); // 언마운트 시 타이머 정리
    };
  }, [cafeId]);

  const showContent = fetchDone && minTime && cafeInfo;

  useEffect(() => {
    if (cafeInfo) {
      setIsLike(cafeInfo.is_like);
    }
  }, [cafeInfo]);

  // 좋아요로 카페 저장
  const handleClickSave = async () => {
    if (!accessToken) {
      setShowModalforSave(true);
      return;
    }

    if (cafeInfo) {
      try {
        if (isLike) {
          await searchClientApi.deleteLike(cafeInfo.id);
        } else {
          await searchClientApi.postLike(cafeInfo.id);
        }

        const updatedIsLike = !isLike;
        setIsLike(updatedIsLike);

        updateCafeLikeStatus(cafeInfo.id, updatedIsLike);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // 현위치-카페 거리 관련
  const { getDistance, formatDistance } = useDistance();
  const { getCurrentLocation } = useMap();

  // 거리 계산
  useEffect(() => {
    const calculateDistance = async () => {
      if (cafeInfo) {
        try {
          // 현재 위치 가져오기
          const [currentLat, currentLng] = await getCurrentLocation();

          const calculatedDistance = getDistance(
            currentLat,
            currentLng,
            Number(cafeInfo.address_lat),
            Number(cafeInfo.address_lng)
          );
          setDistance(Math.round(calculatedDistance));
        } catch (error) {
          console.error(error);
        }
      }
    };

    calculateDistance();
  }, [cafeInfo, getDistance, getCurrentLocation]);

  // 구독하기
  const handleSubscription = (id: number) => {
    if (!accessToken) {
      setShowModalforSubs(true);
    } else {
      router.push(`/payment?type=new&id=${id}`);
    }
  };

  if (!showContent) {
    return <BottomSheetSkeleton />;
  }

  return (
    <>
      <div
        className={`bg-white z-30 overflow-scroll pb-[5.5rem] ${
          isSheetOpen ? "min-h-screen" : "max-h-full"
        } `}
      >
        <div className={`w-full px-5 ${isSheetOpen ? "pt-5" : ""}`}>
          {/*거리*/}
          <div className="Caption_bold text-Grey-500 h-4">
            {formatDistance(distance)}
          </div>

          {/*이름 & 좋아요 여부*/}
          <div className="flex flex-row items-center my-1">
            <span className="Headline_3 mr-2">{cafeInfo.name}</span>
            <span>
              {isLike ? (
                <span
                  onClick={handleClickSave}
                  className={`${HEART_STYLE} bg-Main_Blue`}
                >
                  <FullHeart width={12} height={12} />
                </span>
              ) : (
                <span className={`${HEART_STYLE} bg-white`}>
                  <EmptyHeart
                    onClick={handleClickSave}
                    width={11}
                    height={11}
                  />
                </span>
              )}
            </span>
          </div>

          {/*메뉴 & 구독권 종류*/}
          <div className=" Body_2_bold text-Main_Blue mb-5">
            {[
              ...cafeInfo.menus,
              ...cafeInfo.periods.map((period) => `${period}주권`),
            ].join(" ∙ ")}
          </div>

          {/*대표 이미지*/}
          <div className="flex overflow-x-scroll w-full gap-3 mb-7">
            {cafeInfo.images.map((image, index) => (
              <Image
                key={index}
                src={image.image_url.trim()}
                alt={image.image_url}
                width={169}
                height={169}
                className="w-[169px] h-[169px] rounded-xl object-cover shrink-0"
              />
            ))}
          </div>

          {/*세부 정보*/}
          <InfoRow label="주소" value={cafeInfo.address} />
          <InfoRow label="영업시간" value={cafeInfo.operation_time} />
          <InfoRow label="전화번호" value={cafeInfo.phone_num} />
          {/* <InfoRow label="SNS" value={cafeInfo.sns_address} /> */}
          <div className="flex flex-row justify-between items-center mb-3 z-25">
            <span className={LABEL_STYLE}>SNS</span>
            <span className="w-6 h-6 ml-4 mr-2 flex shrink-0">
              <Instagram className="w-full h-full" />
            </span>
            <span className={`${VALUE_STYLE} w-[17.56rem]`}>
              {cafeInfo.sns_address}
            </span>
          </div>

          {/*카페소개*/}
          <div className={`${LABEL_STYLE} mt-6`}>카페 소개</div>
          <div className={`${VALUE_STYLE} mt-2`}>{cafeInfo.description}</div>

          <div
            onClick={() => handleSubscription(cafeInfo.id)}
            className={`flex w-full justify-center Body_1_bold rounded-xl px-6 py-[0.88rem] mt-[3.6rem] ${
              cafeInfo.is_subscription
                ? "bg-Grey-200 text-Grey-400 cursor-not-allowed"
                : "bg-Main_Blue text-white cursor-pointer"
            }`}
          >
            구독하기
          </div>
        </div>
      </div>

      {/*비로그인 시 모달 */}
      <LoginModal
        isOpen={showModalforSave}
        onClose={() => setShowModalforSave(false)}
        onLogin={() => router.push("/")}
        message="즐겨찾기를 등록하려면"
      />

      <LoginModal
        isOpen={showModalforSubs}
        onClose={() => setShowModalforSubs(false)}
        onLogin={() => router.push("/")}
        message="구독권 구매는"
      />
    </>
  );
};

export default BottomSheetContent;
