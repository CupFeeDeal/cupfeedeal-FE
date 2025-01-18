interface Card {
  id: number;
  cafeName: string;
  menuName: string;
  period: number;
  savedAmount: number;
}

export interface CardListProps {
  cards: Card[];
}

export interface CardProps extends Card {
  isSelected: boolean;
  index: number;
  totalCards: number;
  onSelect: (id: number) => void;
  cardBg: string; // 추가된 prop
}
