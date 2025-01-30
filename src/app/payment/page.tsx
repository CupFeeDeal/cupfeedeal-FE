import { redirect } from "next/navigation";
import { subscriptionServerApi } from "@api/server/subscriptionServer";

import ExtendClient from "./_clients/ExtendClient";
import NewClient from "./_clients/NewClient";
import PaymentWrapper from "./PaymentWrapper";

interface PaymentPageProps {
  searchParams: Promise<{ id?: string; type?: "extend" | "new" }>;
}

const PaymentPage = async ({ searchParams }: PaymentPageProps) => {
  const { id, type } = await searchParams;
  if (!id || !type) redirect("/home");

  const data = await subscriptionServerApi.getPaymentData(
    parseInt(id),
    type === "extend"
  );

  if (type === "extend" && !data.result.userSubscriptionInfo) {
    redirect("/home");
  }

  return (
    <PaymentWrapper data={data.result} type={type}>
      {type === "extend" ? (
        <ExtendClient data={data.result} type={type} />
      ) : (
        <NewClient data={data.result} type={type} />
      )}
    </PaymentWrapper>
  );
};

export default PaymentPage;
