import { FullCup, HalfCup } from "@assets/icons";

interface CupsProps {
  count: number;
}

const Cups = ({ count }: CupsProps) => {
  // 다 채워진 컵
  const fullCups = Math.floor(count);
  // 반만 채워진 컵
  const hasHalfCup = count % 1 !== 0;
  console.log({ fullCups, hasHalfCup });

  return (
    <div className="flex gap-2 items-center">
      {[...Array(fullCups)].map((_, idx) => (
        <FullCup key={`full-${idx}`} />
      ))}
      {hasHalfCup && <HalfCup />}
    </div>
  );
};

export default Cups;
