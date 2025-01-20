import OnboardingContent from "./_components/OnboardingContent";
import { redirect } from "next/navigation";
import { token } from "@api/client";

// 로티 파일 불러오기
import lottie1 from "@assets/json/onboarding_1.json";
import lottie2 from "@assets/json/onboarding_2.json";
import lottie3 from "@assets/json/onboarding_3.json";
import lottie4 from "@assets/json/onboarding_4.json";

// Next15부터 searchParams가 단순 객체로 오는 게 아니라 Promise로 감싸져서 오는 듯함.
interface OnboardingProps {
  searchParams: Promise<{ step?: string; user?: string }>;
}

async function OnboardingPage(props: OnboardingProps) {
  const sp = await props.searchParams;
  const step = Number(sp.step) || 1;
  const user = sp.user ? decodeURIComponent(sp.user) : "원두";

  // 온보딩 각 단계에서 쓰이는 내용 정리
  const steps = [
    {
      lottie: lottie1,
      title: `${user}님, 환영해요!`,
      description: "컵캣과 함께\n즐거운 커피생활을 시작해요.",
    },
    {
      lottie: lottie2,
      title: "원하는 카페를 구독하고\n커피값을 아껴봐요.",
      description:
        "자주 방문하는 카페가 있나요?\n단골 카페의 구독권을 구매하면, 훨씬 저렴한\n가격으로 하루 한 잔 커피를 마실 수 있어요.",
    },
    {
      lottie: lottie3,
      title: `${user}님만의 컵캣을\n키워보세요.`,
      description: `컵캣은 커피를 좋아하는 작은 고양이에요.\n하루 한 잔, 꾸준히 커피를 소비하면\n${user}님의 컵캣이 무럭무럭 자랄 거예요.`,
    },
    {
      lottie: lottie4,
      title: "발자국을 찍어 레벨을 올리고\n다양한 컵캣을 만나봐요.",
      description: `${user}님이 구독한 카페를 자주 방문하면\n해당 카페에 발자국을 찍을 수 있어요.\n발자국을 찍어 레벨을 올리고, 더 다양한 컵캣을 만나봐요.`,
    },
  ] as const;

  // 잘못된 step 처리
  if (step < 1 || step > steps.length) {
    redirect("/home");
  }

  return (
    <div className="h-full grid place-content-center overflow-auto">
      <OnboardingContent
        step={step}
        user={user}
        lottie={steps[step - 1].lottie}
        title={steps[step - 1].title}
        description={steps[step - 1].description}
        isLast={step === steps.length}
      />
    </div>
  );
}

export default OnboardingPage;
