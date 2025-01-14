import { CupcatEx, Information, MyBannerBg } from "@assets/icons";

import { myData } from "./mock";

const MyBanner = () => {
  return (
    <div>
      <div className="relative">
        <MyBannerBg />

        {/* 내 정보 */}
        <div className="absolute top-0 left-0 py-6 px-5">
          <div className="w-[72px] py-0.5 px-5 Body_1_bold text-white bg-Dark_Blue mb-3 rounded-[38px]">
            Lv.{myData.level}
          </div>
          <div className="flex flex-row">
            <div className="Headline_3 mr-2">
              컵캣이 무럭무럭
              <br />
              자라고 있어요!
            </div>
            <CupcatEx width={182} height={273} />
          </div>
        </div>

        {/*레벨 바*/}
        <div className="absolute top-[223px] w-full px-5 ">
          <div className="w-full bg-white/50 px-5 py-4 rounded-xl border-[0.7px] border-solid border-white backdrop-blur">
            <div className="flex flex-row items-center justify-between">
              <span className="Body_2_bold">
                다음 레벨까지 {myData.bean}원두 남았어요!
              </span>
              <span>
                <Information width={20} height={20} />
              </span>
            </div>
            <div className="relative w-full h-[7px] rounded-[3.5px] bg-white mt-2">
              <div className="absolute h-[7px] w-28 rounded-[3.5px] bg-Dark_Blue"></div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default MyBanner;
