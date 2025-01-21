"use client";

import { useState } from "react";
import Card from "./Card";
import { SubscriptionCardData } from "src/types/subscription";
import { getCardPosition, getCardBackground } from "../_utils/CardHelpers";

interface CardListProps {
  data: SubscriptionCardData[];
}

const CardList = ({ data }: CardListProps) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  if (data.length === 0) return null;

  return (
    <>
      {data
        .map((item, idx) => {
          const positionClass = getCardPosition(idx, selectedIdx, data.length);
          const backgroundClass = getCardBackground(idx);

          return (
            <div
              key={`card-${idx}`}
              className={`
              absolute left-0 right-0
              transition-all duration-300 rounded-[1.25rem] ${positionClass}
            `}
              onClick={() => setSelectedIdx(idx)}
            >
              <Card
                {...item}
                idx={idx}
                total={data.length}
                backgroundClass={backgroundClass}
                showDetails={idx === selectedIdx}
              />
            </div>
          );
        })
        .reverse()}
    </>
  );
};

export default CardList;
