"use client";

import { ModalProps } from "src/types/modal";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { Close } from "@assets/icons";

const Modal = ({
  isOpen,
  onClose,
  children,
  fullPage = false,
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
      <div
        className="fixed inset-0 mx-auto max-w-[440px] bg-black bg-opacity-65"
        onClick={onClose}
      />
      <div
        className={`relative bg-white overflow-visible  ${
          fullPage
            ? "h-[100dvh] flex flex-col w-full"
            : "rounded-[0.625rem] p-4 w-[90%]"
        }`}
      >
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
              <button onClick={onClose} className="btn-cancel">
                {cancelText}
              </button>
            )}

            {/* 확인 */}
            {confirmText && (
              <button
                onClick={() => {
                  onConfirm?.();
                }}
                className="btn-confirm"
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
