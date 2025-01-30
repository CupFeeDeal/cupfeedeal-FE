import { Logo } from "@assets/icons";
import { LogoText } from "@assets/icons";
import { SpeachBubble } from "@assets/icons";
import KakaoBtn from "./_components/KakaoBtn";
import MockProfile from "./_components/ProfileBtn";
import Link from "next/link";

const AuthPage = () => {
  return (
    <div className="h-full flex flex-col justify-center relative">
      <MockProfile />
      {/* 로고 */}
      <div className="flex flex-col items-center gap-2 my-36">
        <Logo className="w-24 " />
        <LogoText className="w-32 " />
      </div>

      {/* 로그인 버튼 */}
      <div className="flex flex-col items-center px-5 gap-3">
        <SpeachBubble className="relative drop-shadow-basic animate-bounce" />
        <KakaoBtn />
        <Link
          href={"/home"}
          className="Body_2_reg text-Grey-500 underline w-fit mt-1"
        >
          먼저 둘러보고 싶어요
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
