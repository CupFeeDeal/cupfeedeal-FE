"use client";

import { LogoText, Front, LogoContact } from "@assets/icons";
import Link from "next/link";

const FOOTER_LINKS = [
  {
    text: "이용약관",
    href: "https://rhealabs.notion.site/17b60d5f308780199bd4d04f711fcc0d?pvs=4",
  },
  {
    text: "개인정보처리방침",
    href: "https://rhealabs.notion.site/17b60d5f308780a3bc9ed8600f1bdd73?pvs=4",
  },
  {
    text: "사업자정보확인",
    href: "https://rhealabs.notion.site/17b60d5f308780b98ff2cf214f776670?pvs=4",
  },
] as const;

const Footer = () => {
  const openKakaoChat = () => {
    if (typeof window !== "undefined") {
      window.open(
        `https://pf.kakao.com/${process.env.NEXT_PUBLIC_KAKAO_CHANNEL_ID}/chat`,
        "_blank"
      );
    }
  };

  return (
    <footer className="space-y-5 py-6 px-5">
      <LogoText className="w-24" />

      {/* 정보 */}
      <section className="space-y-2.5">
        <p className="Caption_bold">사업자 정보</p>
        <p className="Caption_med leading-5">
          (주)리아랩스
          <br />
          Copyright(c) 2024 리아랩스 All Rights Reserved.
          <br />
          통신판매업 신고번호 : 2024-서울서대문-1050
          <br />
          사업자등록번호 : 452-88-03211&ensp;‖&ensp;대표자 : 서다원
        </p>
        <p className="Caption_bold">
          호스팅 제공자&ensp;<span className="Caption_med">Vercel Inc.</span>
        </p>
      </section>

      {/* 문의 및 약관 */}
      <section className="flex justify-between">
        <div className="space-y-3 self-end Caption_bold ">
          <p>Contact</p>
          <div className="flex flex-col justify-center items-center">
            <button
              className="mb-[2px] w-12 h-12 rounded-full grid place-items-center"
              onClick={openKakaoChat}
            >
              <LogoContact />
            </button>
            <div className=" Caption_med text-Main_Blue">kakao</div>
          </div>
        </div>

        <ul className="space-y-2 Caption_med">
          {FOOTER_LINKS.map(({ text, href }) => (
            <li key={text}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1 items-center justify-end"
              >
                {text}
                <Front />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
