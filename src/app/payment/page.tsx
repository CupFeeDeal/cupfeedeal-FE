import { redirect } from "next/navigation";
import { MOCK_PAYMENT_DATA } from "src/types/payment";
import ExtendClient from "./ExtendClient";
import NewClient from "./NewClient";
import PaymentWrapper from "./PaymentWrapper";

interface PaymentPageProps {
  searchParams: { id?: string; type?: "extend" | "new" };
}

const PaymentPage = async ({ searchParams }: PaymentPageProps) => {
  const { id, type } = await searchParams;
  if (!id || !type) redirect("/home");

  // or.. 울보캣으로 잘못된 접근 페이지 하나 만들기..?
  // if (!id) return <p>잘못된 접근입니다.</p>;

  // MOCK_DATA로 진행

  const data = MOCK_PAYMENT_DATA;
  if (type === "extend" && !data.userSubscriptionInfo) {
    redirect("/home");
  }

  return (
    <PaymentWrapper
      type={type}
      cafe_name={data.cafe_name}
      userSubscriptionInfo={
        type === "extend" ? data.userSubscriptionInfo : null
      }
    >
      {type === "extend" ? (
        <ExtendClient
          cafe_name={data.cafe_name}
          subscriptions={data.cafe_subscriptions}
          userSubscriptionInfo={data.userSubscriptionInfo!}
        />
      ) : (
        <NewClient
          cafe_name={data.cafe_name}
          subscriptions={data.cafe_subscriptions}
          menus={data.menus}
          periods={data.periods}
        />
      )}
    </PaymentWrapper>
  );
};

export default PaymentPage;
