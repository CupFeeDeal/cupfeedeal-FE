"use client";

import { CafeSubscription } from "src/types/payment";
import { CheckBf, CheckAf } from "@assets/icons";

interface OptionBtnProps {
  subscriptions: CafeSubscription[];
  currentMenu?: string;
  isExtension: boolean;
  selectedSubscription: CafeSubscription | null;
  onSelect: (sub: CafeSubscription) => void;
}

const OptionBtn = ({
  subscriptions,
  currentMenu,
  isExtension,
  selectedSubscription,
  onSelect,
}: OptionBtnProps) => {
  // 연장: 같은 메뉴 필터링, 구매: 전체 구독 옵션
  const filtedSub =
    isExtension && currentMenu
      ? subscriptions.filter((sub) => sub.menu === currentMenu)
      : subscriptions;

  return (
    <div className="space-y-3">
      {filtedSub.map((sub) => {
        const { subscription_id, menu, period, price } = sub;
        const isSelected =
          selectedSubscription?.subscription_id === subscription_id;
        const optionTitle = `${
          isExtension
            ? `같은 메뉴 ${period}주 연장하기`
            : `${menu} ${period}주권`
        }`;
        return (
          <button
            key={subscription_id}
            onClick={() => onSelect(sub)}
            className={`w-full flex justify-between items-center rounded-lg py-3 px-5 border ${
              isSelected
                ? "border-Pale_Blue_1 bg-Pale_Blue_2 shadow-basic"
                : "border-Grey-200"
            }`}
          >
            <div className="space-y-2 text-left">
              <h5 className="Body_1_bold">{optionTitle}</h5>
              <p className="Caption_med">₩ {price.toLocaleString()}</p>
            </div>

            {isSelected ? <CheckAf /> : <CheckBf />}
          </button>
        );
      })}
    </div>
  );
};

export default OptionBtn;
