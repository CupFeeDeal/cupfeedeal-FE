import { BannerInfo } from "src/types/home";
import { BannerInit, BannerBasic } from "@assets/icons";
import { useCupcatImg } from "src/hooks/useCupcatImg";

// 로그인 여부, 구독권 개수에 따라 다르게 렌더링
const HomeBanner = ({ subscription_count, cupcat_id }: BannerInfo) => {
  const variant =
    subscription_count > 0
      ? {
          bgImg: BannerBasic,
          title: "오늘의 커피가\n준비되어 있어요!",
          subtitle: `카페 ${subscription_count}곳 구독 중`,
          cupcat_id,
        }
      : subscription_count === 0
      ? {
          bgImg: BannerBasic,
          title: "구독권을 구매해서\n컵캣을 키워봐요!",
          subtitle: "현재 카페를 구독하고 있지 않아요.",
          cupcat_id,
        }
      : { bgImg: BannerInit };

  const CupcatSvg = useCupcatImg(cupcat_id);

  return (
    <div className="relative overflow-hidden">
      <variant.bgImg />
      {variant.title && (
        <div className="absolute top-6 left-5">
          <h1 className="Headline_3 mb-2 whitespace-pre-line">
            {variant.title}
          </h1>
          <h4 className="Body_2_med">{variant.subtitle}</h4>
        </div>
      )}
      {variant.cupcat_id && (
        <div className="absolute -bottom-7 right-6 w-[35%]">
          <CupcatSvg className="w-full h-full" />
        </div>
      )}
    </div>
  );
};

export default HomeBanner;
