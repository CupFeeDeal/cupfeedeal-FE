"use client";

import { useContext } from "react";
import { PaymentContext } from "../PaymentWrapper";
import Info from "../_components/Info";
import OptionBtn from "../_components/OptionBtn";
import Calendar from "../_components/Calendar";
import { PaymentProps } from "src/types/payment";

const ExtendClient = ({ data }: PaymentProps) => {
  const { cafe_name, cafe_subscriptions, userSubscriptionInfo } = data;
  const context = useContext(PaymentContext);
  if (!context) return null;

  const { selectedSubscription, startDate, endDate, handleSubscriptionChange } =
    context;

  return (
    <div className="flex-1 overflow-auto p-5">
      {/* 구독 정보 */}
      <Info
        cafe_name={cafe_name}
        menu={userSubscriptionInfo!.menu}
        period={userSubscriptionInfo!.period}
        price={userSubscriptionInfo!.price}
      />

      <p className="Body_2_bold mt-6 mb-3">연장하고 싶은 기간을 알려주세요</p>
      <OptionBtn
        subscriptions={cafe_subscriptions}
        currentMenu={userSubscriptionInfo!.menu}
        isExtension
        selectedSubscription={selectedSubscription}
        onSelect={handleSubscriptionChange}
      />
      <div className="h-9" />

      {/* 연장 기간 선택 */}
      <Calendar
        isExtension
        startDate={startDate}
        endDate={endDate}
        selectedSubscription={selectedSubscription}
      />
      <div className="h-28" />
    </div>
  );
};

export default ExtendClient;
