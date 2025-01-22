interface InfoProps {
  cafe: string;
  menu: string;
  period: number;
  price: number;
}

const Info = ({ cafe, menu, period, price }: InfoProps) => (
  <div className="w-full py-5 px-6 bg-gradient-to-r from-[#9596FD] to-[#D2A7E1] text-white rounded-2xl space-y-1">
    <h3 className="Headline_3">{cafe}</h3>
    <h5 className="Body_1_bold">
      {menu} ∙ {period}주권 ∙ ₩{price.toLocaleString()}
    </h5>
  </div>
);

export default Info;
