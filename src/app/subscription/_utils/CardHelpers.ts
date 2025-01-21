import { CARD_STYLES } from "./CardStyles";

export function getCardPosition(
  idx: number,
  selectedIdx: number,
  total: number
) {
  const { aspects, collapsedAspects, common } = CARD_STYLES;

  // 선택된 카드 앞에 있는 건 접기(height 줄임)
  if (idx < selectedIdx) {
    const collapsedAspect =
      idx === 0 ? collapsedAspects.first : collapsedAspects.second;

    return `bottom-0 ${collapsedAspect} ${common.transition}`;
  }

  // 그 외에는 정상 aspect
  const aspect = aspects[total as keyof typeof aspects][idx];

  return `bottom-0 ${aspect} ${common.transition}`;
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
