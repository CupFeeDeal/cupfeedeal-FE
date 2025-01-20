import { Calendar, Price } from "@assets/icons";
import { HistoryItem } from "src/types/mypage";

interface HistoryItemProps {
  item: HistoryItem;
}

const HistoryCard = ({ item }: HistoryItemProps) => {
  return (
    <div
      className={`w-full flex flex-col py-5 px-[18px] mb-3 border-[1.2px] rounded-[10px] ${
        item.isAvailable
          ? "border-Pale_Blue_1 bg-white"
          : "border-Grey-300 bg-Grey-200"
      } shadow-[0_0_12.7px_0_rgba(175,176,187,0.31)]`}
    >
      <div
        className={`Headline_3 mb-[2px] ${
          item.isAvailable ? "text-black" : "text-Grey-700"
        }`}
      >
        {item.name}
      </div>
      <div
        className={`Body_2_med ${
          item.isAvailable ? "text-Main_Blue" : "text-Grey-500"
        }  `}
      >
        아이스 아메리카노 ∙ {item.subscribe}
      </div>

      <div className="flex flex-row Body_2_med text-Grey-600 items-center gap-1 mb-1 mt-7">
        <Price width={24} height={24} />
        <span>{item.price}</span>
      </div>
      <div className="flex flex-row Body_2_med text-Grey-600 items-center gap-1 mb-[18px]">
        <Calendar width={24} height={24} />
        <span>
          {item.startDate} 시작 - {item.endDate} 만료
        </span>
      </div>

      {item.isAvailable ? (
        <div className="flex flex-row w-full justify-between gap-[7px]">
          <span className="flex w-full bg-Pale_Blue_1 rounded-[10px] py-[10px] justify-center mx-auto Body_2_bold ">
            구독 취소하기
          </span>
          <span className="flex w-full bg-Main_Blue rounded-[10px] py-[10px] justify-center mx-auto Body_2_bold text-white">
            구독 연장하기
          </span>
        </div>
      ) : (
        <div className="flex w-full bg-Main_Blue rounded-[10px] py-[10px] justify-center items-center Body_2_bold text-white">
          다시 구독하기
        </div>
      )}
    </div>
  );
};

export default HistoryCard;
