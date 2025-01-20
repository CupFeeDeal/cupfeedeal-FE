"use client";
import { Back, MyTabCupcatBg, MyTabHistoryBg } from "@assets/icons";
import { useRouter } from "next/navigation";

const MyTab = () => {
  const router = useRouter();
  // const handleWithdraw = router.push("/"); // 임시

  const menuList = [
    { id: 1, menu: "닉네임 변경" },
    { id: 2, menu: "문의하기", href: "/ask" },
    { id: 3, menu: "로그아웃", href: "/" },
    { id: 4, menu: "회원 탈퇴" },
  ];

  return (
    <div className="flex flex-col relative bg-white mb-[30px] rounded rounded-t-[20px] z-10 -mt-7">
      {/*탭 카드*/}
      <div className="flex flex-row justify-center gap-3 mt-7 mb-5">
        <span
          className="relative cursor-pointer"
          onClick={() => router.push("/mypage/history")}
        >
          <MyTabHistoryBg width={169} height={120} />
          <div className="absolute Body_1_bold top-3 left-4">구독 내역</div>
        </span>
        <span
          className="relative cursor-pointer"
          onClick={() => router.push("/mypage/previous")}
        >
          <MyTabCupcatBg width={169} height={120} />
          <div className="absolute Body_1_bold top-3 left-4">지나간 컵캣</div>
        </span>
      </div>

      {/*탭 메뉴*/}
      {menuList.map((tab) => (
        <div
          key={tab.id}
          className="flex flex-row w-full p-5 items-center justify-between border-b-[0.5px] border-b-Grey-200 cursor-pointer"
        >
          <span className="Body_1_bold bg-white">{tab.menu}</span>
          <Back className="-scale-x-100" />
        </div>
      ))}
    </div>
  );
};

export default MyTab;
