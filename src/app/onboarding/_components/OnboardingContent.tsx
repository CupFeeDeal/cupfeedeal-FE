"use client";

import { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import { useRouter } from "next/navigation";

interface OnboardingProps {
  step: number;
  lottie: any;
  title: string;
  description: string;
  isLast: boolean;
}

const OnboardingContent = ({
  step,
  lottie,
  title,
  description,
  isLast,
}: OnboardingProps) => {
  // '다음' 로직: 마지막 페이지면 홈으로, 아니면 다음 스텝으로 이동
  const router = useRouter();
  const handleNext = () => {
    if (isLast) {
      router.push("/home");
    } else {
      router.push(`/onboarding?step=${step + 1}`);
    }
  };

  // lottie만 늦게 렌더링되는 문제 해결하기 위해 timeout과 애니메이션 적용
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`h-full flex flex-col items-center justify-between pt-[4.5rem] pb-[5.5rem] transition-opacity duration-1000 ${
        isReady ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-[20.875rem] flex flex-col gap-3 ">
        <h1 className="Headline_3 whitespace-pre-line">{title}</h1>
        <p className="Body_2_med text-Grey-600 whitespace-pre-line">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-16">
        <Lottie
          key={step}
          animationData={lottie}
          loop
          play
          style={{ width: "20.875rem" }}
        />
        <button
          onClick={handleNext}
          className="Body_1_bold w-[20.875rem] bg-Main_Blue  text-white px-6 py-3.5 rounded-xl"
        >
          {isLast ? "커피딜 시작하기" : "다음"}
        </button>
      </div>
    </div>
  );
};

export default OnboardingContent;
