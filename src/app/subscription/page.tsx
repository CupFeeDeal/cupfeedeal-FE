import Link from "next/link";

import { subscriptionServerApi } from "@api/subscriptionServer";

import HomeTap from "@common/HomeTap";
import { CardBackground } from "@assets/icons";
import CardList from "./_components/CardList";

const SubscriptionPage = async () => {
  const {
    result: { paw_count, userSubscriptionListResponseDtos },
  } = await subscriptionServerApi.getSubscriptionData();

  return (
    <div className="flex flex-col h-full">
      <HomeTap />
      <div
        className={`flex-1 relative overflow-auto bg-Pale_Blue_2 px-5 bg-no-repeat bg-[position:right_top] ${
          paw_count > 0 ? `bg-foot${paw_count}` : ""
        }`}
      >
        <p className="Headline_3 py-6 whitespace-pre-line">
          {"오늘의 커피 한 잔 마시고\n발자국을 모아봐요!"}
        </p>

        {/* 구독권 카드 리스트 */}
        <div className="relative my-8 overflow-hidden rounded-[1.25rem]">
          <CardBackground />
          <Link
            href="/search"
            className="absolute top-[33%] left-1/2 -translate-x-1/2 Body_2_bold text-white bg-Grey-800 px-8 py-3 rounded-lg"
          >
            구독권 둘러보기
          </Link>
          <CardList data={userSubscriptionListResponseDtos} />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
