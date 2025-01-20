import { CARD_STYLES } from "./CardStyles";

export function getCardPosition(
  idx: number,
  selectedIdx: number,
  total: number
) {
  const { baseWidth, heights, collapsedHeights, common } = CARD_STYLES;

  // 선택된 카드 앞에 있는 건 접기(height 줄임)
  if (idx < selectedIdx) {
    const height = idx === 0 ? collapsedHeights.first : collapsedHeights.second;
    return `bottom-0 aspect-[${baseWidth}/${height}] ${common.transition}`;
  }

  // 그 외에는 정상 height
  const height = heights[total as keyof typeof heights][idx];

  return `bottom-0 aspect-[${baseWidth}/${height}] ${common.transition}`;
}

// 배경 이미지 불러오기
export function getCardBackground(idx: number) {
  return CARD_STYLES.backgrounds[idx % CARD_STYLES.backgrounds.length];
}

// cups 여백 불러오기
export function getBottomSpacing(total: number) {
  return CARD_STYLES.bottomSpacing[
    total as keyof typeof CARD_STYLES.bottomSpacing
  ];
}
