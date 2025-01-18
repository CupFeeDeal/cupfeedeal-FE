import HomeTap from "@common/HomeTap";
import { CardBackground } from "@assets/icons";
import CardList from "./_components/CardList";

export default function SubscriptionPage() {
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
          <CardList />
        </div>
      </div>
    </div>
  );
}
