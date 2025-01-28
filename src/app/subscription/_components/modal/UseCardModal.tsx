"use client";

import { subscriptionClientApi } from "@api/subscriptionClient";
import Modal from "@common/Modal";
import { UseCardModalProps } from "src/types/modal";
import { formatDate } from "@app/subscription/_utils/FormatDate";
import { Coffee, Notice } from "@assets/icons";

const UseCardModal = ({
  isOpen,
  onClose,
  cafe_name,
  onComplete,
  user_subscription_id,
}: UseCardModalProps) => {
  const today = formatDate();

  // 구독권 사용하기 로직
  const handleConfirm = async () => {
    try {
      const {
        result: { is_getting_paw },
      } = await subscriptionClientApi.useSubscription(user_subscription_id);
      console.log("사용함");
      onClose();

      if (is_getting_paw) {
        onComplete(true);
      }
    } catch (error) {
      console.error("구독권 사용 실패: ", error);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        showCloseButton
        confirmText="사용하기"
        onConfirm={handleConfirm}
      >
        {/* 모달 내용 */}
        <div className="flex flex-col justify-center items-center py-6">
          <p className="Caption_med text-Grey-600 border border-Grey-600 rounded-full px-3 py-1 mb-4">
            {today}
          </p>
          <h3 className="Headline_3 mb-2">{cafe_name}</h3>
          <Coffee className="w-20 mb-5" />
          <h5 className="Body_1_bold text-center mb-3">
            오늘 구독권을 사용하시겠어요?
            <br />
            사용 후에는 취소할 수 없어요.
          </h5>
          <div className="flex gap-1 items-center">
            <Notice className="w-4" />
            <p className="Caption_med text-Grey-700">
              사장님만 버튼을 누를 수 있어요.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UseCardModal;
