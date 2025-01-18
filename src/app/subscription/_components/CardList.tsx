"use client";

import { useState } from "react";
import Card from "./Card";

interface SubscriptionCardData {
  cafeName: string;
  menuName: string;
  subscriptionPeriod: number;
  savedCups: number;
}

const mockData: SubscriptionCardData[] = [
  {
    cafeName: "지구커피",
    menuName: "아이스 아메리카노",
    subscriptionPeriod: 4,
    savedCups: 1.5,
  },
  {
    cafeName: "달커피",
    menuName: "핫 라떼",
    subscriptionPeriod: 3,
    savedCups: 2.0,
  },
  {
    cafeName: "별커피",
    menuName: "아이스 카페 모카",
    subscriptionPeriod: 2,
    savedCups: 2.5,
  },
];

function getBaseAspect(index: number, total: number) {
  const baseWidth = 21.8125;

  if (total === 1) {
    // 카드 1장
    return `aspect-[${baseWidth}/21.2]`;
  }

  if (total === 2) {
    // 카드 2장
    switch (index) {
      case 0:
        return `aspect-[${baseWidth}/18.125]`;
      case 1:
        return `aspect-[${baseWidth}/22.25]`;
    }
  }

  if (total === 3) {
    // 카드 3장
    switch (index) {
      case 0:
        return `aspect-[${baseWidth}/14.75]`;
      case 1:
        return `aspect-[${baseWidth}/18.875]`;
      case 2:
        return `aspect-[${baseWidth}/23]`;
    }
  }

  return `aspect-[${baseWidth}/23]`;
}

function getPositionClass(
  currentIndex: number,
  selectedIndex: number,
  total: number
) {
  if (currentIndex < selectedIndex) {
    return currentIndex === 0
      ? "bottom-0 aspect-[21.8125/5] transition-[aspect-ratio] duration-500 ease-in-out"
      : "bottom-0 aspect-[21.8125/9.5] transition-[aspect-ratio] duration-500 ease-in-out";
  }

  if (total === 1) {
    return "bottom-0 aspect-[21.8125/21.2] transition-[aspect-ratio] duration-500 ease-in-out";
  }

  if (total === 2) {
    if (currentIndex === 0) {
      return "bottom-0 aspect-[21.8125/18] transition-[aspect-ratio] duration-500 ease-in-out";
    }
    return "bottom-0 aspect-[21.8125/22.5] transition-[aspect-ratio] duration-500 ease-in-out";
  }

  if (total === 3) {
    if (currentIndex === 0) {
      return "bottom-0 aspect-[21.8125/14.5] transition-[aspect-ratio] duration-500 ease-in-out";
    }
    if (currentIndex === 1) {
      return "bottom-0 aspect-[21.8125/19] transition-[aspect-ratio] duration-500 ease-in-out";
    }
    return "bottom-0 aspect-[21.8125/23.5] transition-[aspect-ratio] duration-500 ease-in-out";
  }

  return "bottom-0 aspect-[21.8125/23.5] transition-[aspect-ratio] duration-500 ease-in-out";
}

function getCardBackground(index: number) {
  if (index === 0) return "bg-card1";
  if (index === 1) return "bg-card2";
  if (index === 2) return "bg-card3";
  return "bg-card1";
}

export default function CardList() {
  const data = mockData;

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index: number) => {
    if (index !== selectedIndex) {
      setSelectedIndex(index);
    }
  };

  if (data.length === 0) {
    return null;
  }

  const total = data.length;

  return (
    <div className="">
      {data
        .map((item, idx) => {
          const positionClass = getPositionClass(idx, selectedIndex, total);
          const bgClass = getCardBackground(idx);
          const isSelected = idx === selectedIndex;

          return (
            <div
              key={`card-${idx}`}
              className={`
              absolute left-0 right-0 mx-auto
              transition-all duration-300
              ${positionClass}
            `}
              onClick={() => handleSelect(idx)}
            >
              <Card
                cafeName={item.cafeName}
                menuName={item.menuName}
                period={item.subscriptionPeriod}
                savedCups={item.savedCups}
                backgroundClass={bgClass}
                showDetails={isSelected}
                idx={idx}
                total={total}
              />
            </div>
          );
        })
        .reverse()}
    </div>
  );
}
