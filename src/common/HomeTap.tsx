"use client";

import { useState } from "react";
import { Logo } from "@assets/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@store/useAuthStore";
import LoginModal from "./LoginModal";

const HomeTap = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSubClick = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }
    router.push("/subscription");
  };

  const tapClass = (isActive: boolean) =>
    `w-1/2 flex justify-center items-center pb-3 border-b-[0.125rem] cursor-pointer ${
      isActive ? "border-black" : "border-Grey-300 text-Grey-300"
    }`;

  return (
    <>
      <div className="flex justify-between items-center py-3 px-5">
        <Logo className="w-11" />
        <Link
          href={isAuthenticated ? "/mypage" : "/"}
          className="Caption_bold py-[0.31rem] px-[0.88rem] border border-solid border-black rounded-3xl"
        >
          {isAuthenticated ? "마이페이지" : "로그인"}
        </Link>
      </div>

      {/* HOME <=> 구독권 탭 */}
      <header className="Body_1_bold flex mt-2">
        <Link href={"/home"} className={tapClass(pathname === "/home")}>
          HOME
        </Link>
        <div
          onClick={handleSubClick}
          className={tapClass(pathname === "/subscription")}
        >
          구독권
        </div>
      </header>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={() => router.push("/")}
        message="구독권 탭은"
      />
    </>
  );
};

export default HomeTap;
