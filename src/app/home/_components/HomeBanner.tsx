import Image from "next/image";
import { BannerInfo } from "src/types/home";
import { BannerInit, BannerCup, BannerBasic } from "@assets/icons";

// 로그인 여부, 구독권 개수에 따라 다르게 렌더링
const HomeBanner = ({ subscription_count, cupcatImgUrl }: BannerInfo) => {
  const variant =
    subscription_count > 0
      ? {
          bgImg: BannerBasic,
          title: "오늘의 커피가\n준비되어 있어요!",
          subtitle: `카페 ${subscription_count}곳 구독 중`,
          cupcatImgUrl,
        }
      : subscription_count === 0
      ? {
          bgImg: BannerCup,
          title: "구독권을 구매하면\n컵캣이 찾아와요!",
          subtitle: "아직 카페를 구독하지 않았어요.",
        }
      : { bgImg: BannerInit };

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
      {variant.cupcatImgUrl && (
        <Image
          src={cupcatImgUrl}
          alt="컵캣 이미지"
          width={130}
          height={200}
          className="object-contain absolute -bottom-7 right-8 w-[40%]"
          priority
          unoptimized
        />
      )}
    </div>
  );
};

export default HomeBanner;
