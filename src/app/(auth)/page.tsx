import { Logo } from "@assets/icons";
import { LogoText } from "@assets/icons";
import { SpeachBubble } from "@assets/icons";
import KakaoBtn from "./_components/KakaoBtn";
import Link from "next/link";

export default function Auth() {
  return (
    <div className="h-full flex flex-col justify-center">
      {/* 로고 */}
      <div className="flex flex-col items-center gap-2 my-40">
        <Logo className="w-24 " />
        <LogoText className="w-32 " />
      </div>

      {/* 로그인 버튼 */}
      <div className="flex flex-col items-center px-5 gap-4">
        <SpeachBubble className="relative drop-shadow-basic" />
        <KakaoBtn />
        <Link
          href={"/onboarding"}
          className="Body_2_reg text-Grey-500 underline w-fit "
        >
          먼저 둘러보고 싶어요
        </Link>
      </div>
    </div>
  );
}
