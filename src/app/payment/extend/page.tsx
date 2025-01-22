import { redirect } from "next/navigation";
import TopBar from "@common/TopBar";
import { MOCK_PAYMENT_DATA } from "src/types/payment";

interface ExtendPageProps {
  searchParams: { id?: string };
}

const PaymentExtendPage = async ({ searchParams }: ExtendPageProps) => {
  const { id } = searchParams;
  if (!id) redirect("/home");

  // or.. 울보캣으로 잘못된 접근 페이지 하나 만들기..?
  // if (!id) return <p>잘못된 접근입니다.</p>;

  // MOCK_DATA로 진행
  const data = MOCK_PAYMENT_DATA;
  if (!data.userSubscriptionInfo) {
    redirect("/home");
  }

  return <TopBar title="구독 연장하기" />;
};

export default PaymentExtendPage;
