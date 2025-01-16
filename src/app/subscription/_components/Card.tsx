import { Setting, Coffee, Stamp, Cup } from "@assets/icons";

const Card = () => {
  return (
    <div className="absolute bottom-0 w-full aspect-[21.8125/31.5] rounded-[1.25rem] bg-card1 bg-cover flex flex-col justify-between p-6 overflow-hidden">
      <div className="space-y-1">
        <p className="Headline_3 text-white inline-flex gap-3 items-center">
          지구커피
          <Setting />
        </p>
        <p className="Body_1_bold text-white">아이스 아메리카노∙4주권</p>
      </div>

      <div className=" absolute top-6 right-6 flex flex-col justify-center items-center py-4 px-3 rounded-xl w-fit bg-white">
        <Coffee className="w-[3.125rem]" />
        <p className="Caption_bold text-Main_Blue">구독권 사용하기</p>
      </div>

      {/* <Stamp className="absolute -top-[1.63rem] -right-[3.69rem] " /> */}

      <div className="flex gap-2">
        <Cup />
        <Cup />
        <p className="Body_2_bold text-white whitespace-pre-line">
          {"한 잔 반 만큼의\n커피값을 아꼈어요!"}
        </p>
      </div>
    </div>
  );
};

export default Card;
