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

  const data = {
    ...MOCK_PAYMENT_DATA,
    type,
  };
  if (type === "extend" && !data.userSubscriptionInfo) {
    redirect("/home");
  }

  return (
    <PaymentWrapper data={data} type={data.type}>
      {data.type === "extend" ? (
        <ExtendClient data={data} type={data.type} />
      ) : (
        <NewClient data={data} type={data.type} />
      )}
    </PaymentWrapper>
  );
};

export default PaymentPage;
