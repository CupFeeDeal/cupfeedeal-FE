"use client";

import { useContext } from "react";
import { PaymentContext } from "./PaymentWrapper";
import Info from "./_components/Info";
import OptionBtn from "./_components/OptionBtn";
import Calendar from "./_components/Calendar";
import { CafeSubscription, UserSubscriptionInfo } from "src/types/payment";

interface ExtendClientProps {
  cafe_name: string;
  subscriptions: CafeSubscription[];
  userSubscriptionInfo: UserSubscriptionInfo;
}

const ExtendClient = ({
  subscriptions,
  userSubscriptionInfo,
  cafe_name,
}: ExtendClientProps) => {
  const context = useContext(PaymentContext);
  if (!context) return null;

  const { selectedSubscription, startDate, endDate, handleSubscriptionChange } =
    context;

  return (
    <div className="flex-1 overflow-auto p-5">
      {/* 구독 정보 */}
      <Info
        cafe={cafe_name}
        menu={userSubscriptionInfo.menu}
        period={userSubscriptionInfo.period}
        price={userSubscriptionInfo.price}
      />

      <p className="Body_2_bold mt-6 mb-3">연장하고 싶은 기간을 알려주세요</p>
      <Calendar
        isExtension
        startDate={startDate}
        endDate={endDate}
        selectedSubscription={selectedSubscription}
      />
      <div className="h-9" />

      {/* 연장 기간 선택 */}
      <OptionBtn
        subscriptions={subscriptions}
        currentMenu={userSubscriptionInfo.menu}
        isExtension
        selectedSubscription={selectedSubscription}
        onSelect={handleSubscriptionChange}
      />
      <div className="h-28" />
    </div>
  );
};

export default ExtendClient;
