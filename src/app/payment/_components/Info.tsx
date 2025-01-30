import { BasicSubscription } from "src/types/payment";

const Info = ({ cafe_name, menu, period, price }: BasicSubscription) => (
  <div className="w-full py-5 px-6 bg-gradient-to-r from-[#9596FD] to-[#D2A7E1] text-white rounded-2xl space-y-1">
    <h3 className="Headline_3">{cafe_name}</h3>
    <h5 className="Body_1_bold">
      {menu} ∙ {period}주권 ∙ ₩{price.toLocaleString()}
    </h5>
  </div>
);

export default Info;
