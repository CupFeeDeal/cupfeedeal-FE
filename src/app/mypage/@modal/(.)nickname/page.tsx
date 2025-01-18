"use client";

import { useRouter } from "next/navigation";

export default function Nickname() {
  const router = useRouter();

  const closeModal = () => {
    router.back(); // 이전 경로로 돌아가 모달 닫기
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 rounded-lg w-96"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록
      >
        <h2 className="text-lg font-bold mb-4">닉네임 변경</h2>
        <input
          type="text"
          placeholder="새 닉네임 입력"
          className="border p-2 rounded w-full"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 rounded mr-2"
          >
            취소
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
