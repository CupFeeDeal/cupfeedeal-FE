export const getCardPosition = (
  index: number,
  totalCards: number,
  isSelected: boolean,
  selectedIndex: number
): string => {
  // 카드가 1장일 때
  if (totalCards === 1) return "bottom-0";

  // 선택된 카드일 때
  if (isSelected) return "bottom-0";

  // 선택된 카드보다 뒤에 있는 카드들
  if (index > selectedIndex) {
    if (totalCards === 2) return "bottom-4";
    return index === totalCards - 1 ? "bottom-8" : "-bottom-[2rem]";
  }

  // 선택된 카드보다 앞에 있는 카드들은 화면 밖으로
  return "-bottom-[10rem]";
};

export const formatSavedAmount = (amount: number): string => {
  const wholePart = Math.floor(amount);
  const hasHalf = amount % 1 !== 0;

  const numberToKorean = (num: number): string => {
    switch (num) {
      case 1:
        return "한";
      case 2:
        return "두";
      case 3:
        return "세";
      case 4:
        return "네";
      case 5:
        return "다섯";
      default:
        return `${num}`;
    }
  };

  return `${numberToKorean(wholePart)}${hasHalf ? " 잔 반" : " 잔"} 만큼의`;
};
