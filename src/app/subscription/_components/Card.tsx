import { Setting, Coffee } from "@assets/icons";
import Cups from "./Cups";
import { CardProps } from "src/types/subscription";
import { CARD_STYLES } from "../_utils/CardStyles";
import { getBottomSpacing } from "../_utils/CardHelpers";

function Card({
  name,
  menu,
  period,
  savedCups,
  backgroundClass,
  showDetails,
  total,
}: CardProps) {
  const bottomSpacing = getBottomSpacing(total);

  return (
    <div className={`${CARD_STYLES.common.cardContainer} ${backgroundClass}`}>
      {/* 상단 영역 */}
      <div className="space-y-1">
        <p className="Headline_3 text-white inline-flex gap-3 items-center">
          {name}
          <Setting />
        </p>
        {showDetails && (
          <p className="Body_1_bold text-white">
            {menu}∙{period}주권
          </p>
        )}
      </div>

      {/* 구독권 사용 버튼 */}
      {showDetails && (
        <div className="absolute top-6 right-6 flex flex-col justify-center items-center py-4 px-3 rounded-xl w-fit bg-white">
          <Coffee className="w-[3.125rem]" />
          <p className="Caption_bold text-Main_Blue">구독권 사용하기</p>
        </div>
      )}

      {/* 이득 정보 */}
      {showDetails && (
        <div className={`absolute flex gap-2 ${bottomSpacing}`}>
          <Cups count={savedCups} />
        </div>
      )}
    </div>
  );
}

export default Card;
