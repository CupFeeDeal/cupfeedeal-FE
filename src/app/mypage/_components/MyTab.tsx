"use client";
import { Back, MyTabCupcatBg, MyTabHistoryBg } from "@assets/icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MyTab = () => {
  const router = useRouter();

  const menuList = [
    { id: 1, menu: "닉네임 변경", href: "/mypage/nickname" },
    { id: 2, menu: "문의하기", href: "/mypage/ask" },
    { id: 3, menu: "로그아웃", href: "/" },
    { id: 4, menu: "회원 탈퇴", href: "/mypage/quit" },
  ];

  const [bgWidth, setBgWidth] = useState(169);

  useEffect(() => {
    const handleResize = () => {
      setBgWidth(window.innerWidth <= 390 ? 160 : 169);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col relative bg-white pb-[30px] rounded rounded-t-[20px] z-10 -mt-16">
      {/*탭 카드*/}
      <div className="flex flex-row justify-center gap-3 mt-7 mb-5 px-5">
        <span
          className="relative cursor-pointer bg-Pale_Blue_2 w-full h-[120px] rounded-[10px]"
          onClick={() => router.push("/mypage/history")}
        >
          <MyTabHistoryBg
            width={bgWidth}
            height={120}
            className="absolute right-0"
          />
          <div className="absolute Body_1_bold top-3 left-4">구독 내역</div>
        </span>
        <span
          className="relative cursor-pointer bg-Pale_Blue_2 w-full h-[120px] rounded-[10px]"
          onClick={() => router.push("/mypage/previous")}
        >
          <MyTabCupcatBg
            width={bgWidth}
            height={120}
            className="absolute right-0 top-0 "
          />
          <div className="absolute Body_1_bold top-3 left-4">지나간 컵캣</div>
        </span>
      </div>

      {/*탭 메뉴*/}
      {menuList.map((tab) => (
        <div
          key={tab.id}
          className="flex flex-row w-full p-5 items-center justify-between border-b-[0.5px] border-b-Grey-200 cursor-pointer"
          onClick={() => router.push(tab.href)}
        >
          <span className="Body_1_bold bg-white">{tab.menu}</span>
          <Back className="-scale-x-100" />
        </div>
      ))}
    </div>
  );
};

export default MyTab;
