import { redirect } from "next/navigation";
import TopBar from "@common/TopBar";
import { MOCK_PAYMENT_DATA } from "src/types/payment";
import Info from "../_components/Info";
import OptionBtn from "../_components/OptionBtn";

interface ExtendPageProps {
  searchParams: { id?: string };
}

const PaymentExtendPage = ({ searchParams }: ExtendPageProps) => {
  const { id } = searchParams;
  if (!id) redirect("/home");

  // or.. 울보캣으로 잘못된 접근 페이지 하나 만들기..?
  // if (!id) return <p>잘못된 접근입니다.</p>;

  // MOCK_DATA로 진행
  const {
    cafe_name: cafe,
    userSubscriptionInfo,
    cafe_subscriptions,
  } = MOCK_PAYMENT_DATA;

  if (!userSubscriptionInfo) {
    redirect("/home");
  }

  const { menu, period, price, end } = userSubscriptionInfo;

  return (
    <div className="flex flex-col h-full">
      <TopBar title="구독 연장하기" />
      <div className="flex-1 p-5">
        <Info {...{ cafe, menu, period, price }} />
        <p className="Body_2_bold mt-9 mb-3">연장하고 싶은 기간을 알려주세요</p>
        <OptionBtn
          subscriptions={cafe_subscriptions}
          currentMenu={menu}
          isExtension
        />
      </div>
    </div>
  );
};

export default PaymentExtendPage;
