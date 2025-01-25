import Link from "next/link";
import { homeApi } from "@api/home";
import { token } from "@api/token";
import HomeTap from "@common/HomeTap";
import Footer from "@common/Footer";
import { Map } from "@assets/icons";

import Section from "./_components/Section";
import HomeBanner from "./_components/HomeBanner";
import RecommendCard from "./_components/RecommendCard";
import NewCard from "./_components/NewCard";

const HomePage = async () => {
  const [recommendCafes, newCafes] = await Promise.all([
    homeApi.getRecommendCafes(),
    homeApi.getNewCafes(),
  ]);

  if (await token.get()) {
    const bannerInfo = (await homeApi.getBannerInfo()).result;
  }

  return (
    <div className="flex flex-col h-full">
      <HomeTap />
      <div className="flex-1 overflow-auto">
        <HomeBanner />

        {/* 지도 */}
        <Section title="커피딜 지도에서 카페를 찾아봐요!">
          <Link href={"/search"}>
            <Map />
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
