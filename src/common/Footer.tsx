import { LogoText, Front } from "@assets/icons";
import Link from "next/link";

const FOOTER_LINKS = [
  { text: "이용약관", href: "https://notion.url/terms" },
  { text: "개인정보처리방침", href: "https://notion.url/privacy" },
  { text: "사업자정보확인", href: "https://notion.url/business" },
] as const;

const Footer = () => (
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
        호스팅 제공자&emsp;<span className="Caption_med">송유선</span>
      </p>
    </section>

    {/* 문의 및 약관 */}
    <section className="flex justify-between">
      <div className="space-y-3 self-end Caption_bold ">
        <p>Contact</p>
        <button className="text-white w-12 h-12 rounded-full bg-Grey-500 grid place-items-center">
          카카오
        </button>
      </div>

      <ul className="space-y-2 Caption_med mr-3">
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

export default Footer;
