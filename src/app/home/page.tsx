import HomeTap from "@common/HomeTap";
import HomeBanner from "./_components/HomeBanner";
import { Map } from "@assets/icons";
import { Section } from "./_components/Section";

const Home = () => {
  return (
    <div className="flex flex-col h-full">
      <HomeTap />
      <div className="flex-1 overflow-auto">
        <HomeBanner />

        <Section title="커피딜 지도에서 카페를 찾아봐요!">
          <Map className="shadow-basic rounded-lg" />
        </Section>
      </div>
    </div>
  );
};

export default Home;
