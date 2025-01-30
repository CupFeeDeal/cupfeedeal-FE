"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSubscriptionStore } from "@store/useSubscriptionStore";
import { SubscriptionCard } from "src/types/subscription";
import { CardBackground } from "@assets/icons";
import HomeTap from "@common/HomeTap";
import Card from "./Card";
import { getCardPosition, getCardBackground } from "../_utils/CardHelpers";

interface Props {
  initialPawCount: number;
  initialSubscriptions: SubscriptionCard[];
}

const SubscriptionContent = ({
  initialPawCount,
  initialSubscriptions,
}: Props) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { setSubscription, subscriptions, paw_count } = useSubscriptionStore();

  useEffect(() => {
    setSubscription({
      paw_count: initialPawCount,
      userSubscriptionListResponseDtos: initialSubscriptions,
    });
  }, [initialPawCount, initialSubscriptions, setSubscription]);

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

        <div className="relative my-8 overflow-hidden rounded-[1.25rem]">
          <CardBackground />
          <Link
            href="/search"
            className="absolute top-[33%] left-1/2 -translate-x-1/2 Body_2_bold text-white bg-Grey-800 px-8 py-3 rounded-lg hover:bg-Grey-700 transition-colors"
          >
            구독권 둘러보기
          </Link>

          {subscriptions.length > 0 && (
            <>
              {subscriptions
                .map((item, idx) => {
                  const positionClass = getCardPosition(
                    idx,
                    selectedIdx,
                    subscriptions.length
                  );
                  const backgroundClass = getCardBackground(idx);

                  return (
                    <div
                      key={`card-${item.user_subscription_id}`}
                      className={`
                        absolute left-0 right-0 
                        transition-all duration-300 rounded-[1.25rem]
                        ${positionClass}
                      `}
                      onClick={() => setSelectedIdx(idx)}
                    >
                      <Card
                        {...item}
                        idx={idx}
                        total={subscriptions.length}
                        backgroundClass={backgroundClass}
                        showDetails={idx === selectedIdx}
                      />
                    </div>
                  );
                })
                .reverse()}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionContent;
