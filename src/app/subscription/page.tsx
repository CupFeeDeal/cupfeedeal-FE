import Link from "next/link";
import HomeTap from "@common/HomeTap";
import { CardBackground } from "@assets/icons";
import CardList from "./_components/CardList";

const MOCK_CARDS = [
  {
    name: "지구커피",
    menu: "아이스 아메리카노",
    period: 2,
    savedCups: 0.5,
  },
  {
    name: "카페플레이스",
    menu: "아이스 아메리카노",
    period: 4,
    savedCups: 1,
  },
  {
    name: "카페앤",
    menu: "아이스 아메리카노",
    period: 4,
    savedCups: 2.5,
  },
];

function SubscriptionPage() {
  return (
    <div className="flex flex-col h-full">
      <HomeTap />
      <div className="flex-1 overflow-auto bg-Pale_Blue_2 px-5">
        <p className="Headline_3 py-6 whitespace-pre-line">
          {"오늘의 커피 한 잔 마시고\n발자국을 모아봐요!"}
        </p>

        {/* 구독권 카드 리스트 */}
        <div className="relative my-8 drop-shadow-basic overflow-hidden rounded-[1.25rem]">
          <CardBackground />
          {/* <Link
            href="/search"
            className="absolute top-[7.25rem] left-1/2 -translate-x-1/2 Body_2_bold text-white bg-Grey-800 px-8 py-3 rounded-lg"
          >
            구독권 둘러보기
          </Link> */}
          <CardList data={MOCK_CARDS} />
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPage;
