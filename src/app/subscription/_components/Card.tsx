import { Setting, Coffee } from "@assets/icons";
import Cups from "./Cups";

interface CardProps {
  cafeName: string;
  menuName: string;
  period: number;
  savedCups: number;
  backgroundClass: string;
  showDetails: boolean;
  savedInfoPosition?: string;
  idx: number;
  total: number;
}

function cupsToKorean(count: number): string {
  const base = Math.floor(count);
  const hasHalf = count % 1 !== 0;

  const dict = ["", "한 잔", "두 잔", "세 잔", "네 잔", "다섯 잔"];
  let result = "";

  if (base < dict.length) {
    result = dict[base];
  } else {
    result = `${base}잔`;
  }

  if (hasHalf) {
    if (!result) {
      result = "반 잔";
    } else {
      result += " 반";
    }
  }

  return result.trim() || "0 잔";
}

export default function Card({
  cafeName,
  menuName,
  period,
  savedCups,
  backgroundClass,
  showDetails,
  savedInfoPosition,
  idx,
  total,
}: CardProps) {
  const savedText = cupsToKorean(savedCups);

  const getBottomPercentage = () => {
    if (total === 1) return "bottom-[13%]";
    if (total === 2) return "bottom-[27%]";
    return "bottom-[42%]";
  };

  return (
    <div
      className={`absolute w-full aspect-[21.8125/23] rounded-[1.25rem] ${backgroundClass} bg-cover p-6 overflow-hidden`}
    >
      {/* 상단 영역 */}
      <div className="space-y-1">
        <p className="Headline_3 text-white inline-flex gap-3 items-center">
          {cafeName}
          <Setting />
        </p>
        {showDetails && (
          <p className="Body_1_bold text-white">
            {menuName}∙{period}주권
          </p>
        )}
      </div>
      {showDetails && (
        <div className="absolute top-6 right-6 flex flex-col justify-center items-center py-4 px-3 rounded-xl w-fit bg-white">
          <Coffee className="w-[3.125rem]" />
          <p className="Caption_bold text-Main_Blue">구독권 사용하기</p>
        </div>
      )}

      {showDetails && (
        <div className={`absolute flex gap-2 ${getBottomPercentage()}`}>
          <Cups count={savedCups} />
          <p className="Body_2_bold text-white whitespace-pre-line">
            {`${savedText} 만큼의\n커피값을 아꼈어요!`}
          </p>
        </div>
      )}
    </div>
  );
}
