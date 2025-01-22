import { FullCup, HalfCup } from "@assets/icons";

interface CupsProps {
  count: number;
}

const Cups = ({ count }: CupsProps) => {
  if (count === 0) return null;

  // 다 채워진 컵
  const fullCups = Math.floor(count);
  // 반만 채워진 컵
  const hasHalfCup = count % 1 !== 0;

  // 숫자-> 텍스트 변환
  const getCupText = (count: number): string => {
    switch (count) {
      case 0.5:
        return "반 잔";
      case 1:
        return "한 잔";
      case 1.5:
        return "한 잔 반";
      case 2:
        return "두 잔";
      case 2.5:
        return "두 잔 반";
      case 3:
        return "세 잔";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="flex gap-2 items-center">
        {[...Array(fullCups)].map((_, idx) => (
          <FullCup key={`full-${idx}`} />
        ))}
        {hasHalfCup && <HalfCup />}
      </div>
      <p className="Body_2_bold text-white whitespace-pre-line">
        {`${getCupText(count)} 만큼의\n커피값을 아꼈어요!`}
      </p>
    </>
  );
};

export default Cups;
