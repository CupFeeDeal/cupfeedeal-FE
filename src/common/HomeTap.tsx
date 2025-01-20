"use client";

import { Logo } from "@assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeTap = () => {
  const pathname = usePathname();

  const tapClass = (isActive: boolean) =>
    `w-1/2 flex justify-center items-center pb-3 border-b-[0.125rem] ${
      isActive ? "border-black" : "border-Grey-300 text-Grey-300"
    }`;

  return (
    <>
      <div className="flex justify-between items-center py-3 px-5">
        <Logo className="w-11" />
        <Link
          href={"/mypage"}
          className="Caption_bold py-[0.31rem] px-[0.88rem] border border-solid border-black rounded-3xl"
        >
          마이페이지
        </Link>
      </div>
      <header className="Body_1_bold flex mt-2">
        <Link href={"/home"} className={tapClass(pathname === "/home")}>
          HOME
        </Link>
        <Link
          href={"/subscription"}
          className={tapClass(pathname === "/subscription")}
        >
          구독권
        </Link>
      </header>
    </>
  );
};

export default HomeTap;
