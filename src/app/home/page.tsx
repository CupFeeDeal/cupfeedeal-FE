import Link from "next/link";

import { homeApi } from "@api/server/home";
import { Map, MapPin } from "@assets/icons";
import HomeTap from "@common/HomeTap";
import Footer from "@common/Footer";

import Section from "./_components/Section";
import HomeBanner from "./_components/HomeBanner";
import RecommendCard from "./_components/RecommendCard";
import NewCard from "./_components/NewCard";

const HomePage = async () => {
  const [bannerInfo, recommendCafes, newCafes] = await Promise.all([
    homeApi.getBannerInfo(),
    homeApi.getRecommendCafes(),
    homeApi.getNewCafes(),
  ]);

  return (
    <div className="flex flex-col h-full">
      <HomeTap />
      <div className="flex-1 overflow-y-auto">
        {/* 배너 */}
        {bannerInfo ? (
          <HomeBanner {...bannerInfo.result} />
        ) : (
          <HomeBanner subscription_count={-1} userId={0} cupcat_id={0} />
        )}

        {/* 지도 */}
        <Section title="커피딜 지도에서 카페를 찾아봐요!">
          <Link href={"/search"}>
            <div className="relative">
              <Map />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <MapPin className="w-20 animate-floating drop-shadow-lg" />
              </div>
            </div>
          </Link>
        </Section>

        {/* 추천 카페 */}
        <Section title="이런 카페도 있어요!" scroll>
          {recommendCafes.result.map((cafe) => (
            <RecommendCard key={cafe.cafe_id} {...cafe} />
          ))}
        </Section>

        {/* 신상 카페 */}
        <Section title="새로 오픈했어요!" scroll>
          {newCafes.result.map((cafe) => (
            <NewCard key={cafe.cafe_id} {...cafe} />
          ))}
        </Section>

        <div className="h-14" />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
