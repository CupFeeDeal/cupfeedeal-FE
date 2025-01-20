export const CARD_STYLES = {
  baseWidth: 21.8125,

  backgrounds: ["bg-card1", "bg-card2", "bg-card3"],

  // 1/2/3장일 때 각 카드들의 높이값
  heights: {
    1: [21.2],
    2: [18, 22.5],
    3: [14.5, 19, 23.5],
  },

  // 접힌 카드의 높이
  collapsedHeights: {
    first: 5,
    second: 9.5,
  },

  // 1/2/3장일 때 cups 부분 하단 여백
  bottomSpacing: {
    1: "bottom-[13%]",
    2: "bottom-[27%]",
    3: "bottom-[42%]",
  },

  common: {
    transition: "transition-[aspect-ratio] duration-500 ease-in-out",
    cardContainer:
      "absolute w-full aspect-[21.8125/23] bg-cover p-6 overflow-hidden rounded-[1.25rem]",
  },
} as const;
