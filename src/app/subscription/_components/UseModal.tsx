"use client";

import Modal from "@common/Modal";
import { UseModalProps } from "src/types/modal";

const UseModal = ({ isOpen, onClose, name }: UseModalProps) => {
  const handleConfirm = () => {
    console.log("확인");
    onClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        showCloseButton
        cancelText="구독 취소하기"
        confirmText="구독 유지하기"
        onConfirm={handleConfirm}
      >
        <div>
          <h2 className="Headline_5 mb-2">구독권을 사용하시겠습니까?</h2>
          <p className="Body_1_med">{name}</p>
        </div>
      </Modal>
    </>
  );
};

export default UseModal;
