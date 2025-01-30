"use client";

import { useContext } from "react";
import OptionBtn from "../_components/OptionBtn";
import Calendar from "../_components/Calendar";
import { PaymentProps } from "src/types/payment";
import { PaymentContext } from "../PaymentWrapper";

// 구매 클라이언트
const NewClient = ({ data }: PaymentProps) => {
  const { cafe_name, cafe_subscriptions, menus, periods } = data;
  const context = useContext(PaymentContext);
  if (!context) return null;

  const {
    selectedSubscription,
    startDate,
    endDate,
    handleSubscriptionChange,
    handleDateChange,
  } = context;

  const StepHeader = ({ step, title }: { step: number; title: string }) => (
    <div className="flex gap-1 items-center mb-3">
      <div className="w-4 h-4 bg-Grey-700 grid place-content-center text-[0.65rem] text-white rounded-full Caption_med ">
        {step}
      </div>
      <h5 className="Body_2_bold">{title}</h5>
    </div>
  );

  return (
    <div className="flex-1 overflow-auto p-5 space-y-9">
      {/* 카페 정보 */}
      <section className="space-y-1">
        <h1 className="Headline_3">{cafe_name}</h1>
        <h4 className="Body_2_bold text-Main_Blue">
          {[
            ...menus.map((menu) => menu),
            ...periods.map((period) => `${period}주권`),
          ].join(" ∙ ")}
        </h4>
      </section>

      {/* 구독권 종류 선택 */}
      <section>
        <StepHeader step={1} title="구독권을 선택하세요." />
        <OptionBtn
          subscriptions={cafe_subscriptions}
          isExtension={false}
          selectedSubscription={selectedSubscription}
          onSelect={handleSubscriptionChange}
        />
      </section>

      {/* 구독 시작 날짜 선택 */}
      <section>
        <StepHeader step={2} title="원하는 시작 날짜를 선택하세요." />
        <Calendar
          isExtension={false}
          startDate={startDate}
          endDate={endDate}
          selectedSubscription={selectedSubscription}
          onDateSelect={handleDateChange}
        />
      </section>
      <div className="h-20" />
    </div>
  );
};

export default NewClient;
