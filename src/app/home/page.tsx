import Link from "next/link";
import HomeTap from "@common/HomeTap";
import Footer from "@common/Footer";
import { Map } from "@assets/icons";

import Section from "./_components/Section";
import HomeBanner from "./_components/HomeBanner";
import RecommendCard from "./_components/RecommendCard";
import NewCard from "./_components/NewCard";

const MOCK_RECOMMEND_CAFES = [
  {
    id: 1,
    img: "",
    name: "카페이름카페이름카페이름카페이름",
    location: "텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트",
    price: 25000,
  },
  {
    id: 2,
    img: "",
    name: "카페이름카페이름카페이름카페이름",
    location: "텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트",
    price: 25000,
  },
  {
    id: 3,
    img: "",
    name: "카페이름카페이름카페이름카페이름",
    location: "텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트",
    price: 25000,
  },
  {
    id: 4,
    img: "",
    name: "카페이름카페이름카페이름카페이름",
    location: "텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트",
    price: 25000,
  },
];

const MOCK_NEW_CAFES = [
  {
    id: 1,
    img: "",
    name: "카페이름카페이름카페이름카페이름",
    info: "텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트",
  },
  {
    id: 2,
    img: "",
    name: "카페이름카페이름카페이름카페이름",
    info: "텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트",
  },
  {
    id: 3,
    img: "",
    name: "카페이름카페이름카페이름카페이름",
    info: "텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트",
  },
  {
    id: 4,
    img: "",
    name: "카페이름카페이름카페이름카페이름",
    info: "텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트",
  },
];

const Home = () => {
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
          {MOCK_RECOMMEND_CAFES.map((cafe) => (
            <RecommendCard key={cafe.id} {...cafe} />
          ))}
        </Section>

        {/* 신상 카페 */}
        <Section title="새로 오픈했어요!" scroll>
          {MOCK_NEW_CAFES.map((cafe) => (
            <NewCard key={cafe.id} {...cafe} />
          ))}
        </Section>

        <div className="h-14" />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
