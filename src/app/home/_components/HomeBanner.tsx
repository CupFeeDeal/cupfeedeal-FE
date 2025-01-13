"use client";

import { BannerInit, BannerCup, BannerCat } from "@assets/icons";

interface BannerVariant {
  img: React.FC;
  title?: string;
  subtitle?: string;
}

const MOCK_STATE = {
  loggedIn: true,
  subs: 1,
};

const HomeBanner = () => {
  const variant: BannerVariant = !MOCK_STATE.loggedIn
    ? { img: BannerInit }
    : MOCK_STATE.subs === 0
    ? {
        img: BannerCup,
        title: "구독권을 구매하면\n컵캣이 찾아와요!",
        subtitle: "아직 카페를 구독하지 않았어요.",
      }
    : {
        img: BannerCat,
        title: "오늘의 커피가\n준비되어 있어요!",
        subtitle: `카페 ${MOCK_STATE.subs}곳 구독 중`,
      };

  return (
    <div className="relative">
      <variant.img />
      {variant.title && (
        <div className="absolute top-6 left-5">
          <h1 className="Headline_3 mb-2 whitespace-pre-line">
            {variant.title}
          </h1>
          <h3 className="Body_2_med">{variant.subtitle}</h3>
        </div>
      )}
    </div>
  );
};

export default HomeBanner;
