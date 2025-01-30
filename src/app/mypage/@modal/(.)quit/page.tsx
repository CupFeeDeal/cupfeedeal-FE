"use client";

import { userClientApi } from "@api/client/userClient";
import { token } from "@api/token";
import { useRouter } from "next/navigation";

export default function Quit() {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };

  // 탈퇴하기
  const handleWithdraw = async () => {
    try {
      await userClientApi.deleteUser();
      token.remove();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-[rgba(34,34,34,0.7)] flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="bg-white max-w-[350px] z-[99] w-full mx-5 px-4 rounded-lg flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className=" Headline_3 text-Grey-900 mt-10 mb-8">
          정말 탈퇴하시겠어요?
        </h2>
        <div className="flex justify-center text-center w-full Body_1_bold mb-2">
          모든 구독 기록과 결제 내역이
          <br />
          30일 후 삭제됩니다.
        </div>
        <div className="Body_1_med text-Grey-700 mb-8 text-center">
          현재 구독 중인 구독권이 있다면
          <br />
          환불 규정에 따라 자동 환불 처리됩니다.
        </div>
        <div className="flex mt-1 w-full mb-[18px] gap-2">
          <button
            onClick={closeModal}
            className="w-full Body_1_bold text-Grey-600 py-[14px] border border-solid border-Blue_Grey bg-Pale_Blue_2 rounded-lg"
          >
            돌아가기
          </button>
          <button
            onClick={handleWithdraw}
            className="w-full Body_1_bold py-[14px] bg-Main_Blue text-white rounded-lg"
          >
            탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
}
