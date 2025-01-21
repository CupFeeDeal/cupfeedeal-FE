"use client";

import { ModalProps } from "src/types/modal";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { Close } from "@assets/icons";

const Modal = ({
  isOpen,
  onClose,
  children,
  showCloseButton = false,
  cancelText = "",
  confirmText = "",
  onConfirm,
}: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center mx-auto max-w-[440px]">
      <div className="fixed inset-0 bg-black bg-opacity-65" onClick={onClose} />
      <div className="relative bg-white rounded-[0.625rem] p-4 w-[90%] overflow-visible">
        {/* X 버튼 */}
        {showCloseButton && (
          <Close
            onClick={onClose}
            className=" w-6 absolute top-4 right-4 cursor-pointer"
          />
        )}

        {/* 모달 내용 */}
        {children}

        {/* 선택 버튼 */}
        {(cancelText || confirmText) && (
          <div className="flex gap-2 overflow-visible">
            {/* 취소 */}
            {cancelText && (
              <button
                onClick={onClose}
                style={{ border: "1px solid #E3E8F5" }}
                className="w-full py-4 rounded-[0.625rem] bg-Pale_Blue_2 Body_1_bold text-gray-600"
              >
                {cancelText}
              </button>
            )}

            {/* 확인 */}
            {confirmText && (
              <button
                onClick={() => {
                  onConfirm?.();
                  onClose();
                }}
                className="w-full py-4 rounded-[0.625rem] bg-Main_Blue Body_1_bold text-white"
              >
                {confirmText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
