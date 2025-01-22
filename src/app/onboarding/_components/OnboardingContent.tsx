"use client";

import { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import { useRouter } from "next/navigation";

interface OnboardingProps {
  step: number;
  user: string;
  lottie: object;
  title: string;
  description: string;
  isLast: boolean;
}

const OnboardingContent = ({
  step,
  user,
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
      router.push(
        `/onboarding?step=${step + 1}&user=${encodeURIComponent(user)}`
      );
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
      className={`flex flex-col items-center justify-between transition-opacity duration-1000 ${
        isReady ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-[20.875rem] h-36  shrink-0 space-y-3 ">
        <h1 className="Headline_3 whitespace-pre-line">{title}</h1>
        <p className="Body_2_med text-Grey-600 whitespace-pre-line">
          {description}
        </p>
      </div>
      <Lottie
        key={step}
        animationData={lottie}
        loop
        play
        style={{ width: "20.875rem" }}
      />
      <button
        onClick={handleNext}
        className="Body_1_bold w-[20.875rem] bg-Main_Blue  text-white px-6 py-3.5  mt-4 rounded-xl"
      >
        {isLast ? "커피딜 시작하기" : "다음"}
      </button>
    </div>
  );
};

export default OnboardingContent;
