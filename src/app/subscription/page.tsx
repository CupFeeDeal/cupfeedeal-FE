import { subscriptionServerApi } from "@api/server/subscriptionServer";
import SubscriptionContent from "./_components/SubscriptionContent";

export const revalidate = 0; // 캐시 비활성화

const SubscriptionPage = async () => {
  const {
    result: { paw_count, userSubscriptionListResponseDtos },
  } = await subscriptionServerApi.getSubscriptionData();

  return (
    <SubscriptionContent
      initialPawCount={paw_count}
      initialSubscriptions={userSubscriptionListResponseDtos}
    />
  );
};

export default SubscriptionPage;
