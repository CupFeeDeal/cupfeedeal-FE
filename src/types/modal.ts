import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  showCloseButton?: boolean;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
}

export interface BasicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface UseCardModalProps extends BasicModalProps {
  cafe: string;
  onComplete: (showFootModal: boolean) => void;
}

export interface FootModalProps extends BasicModalProps {
  cafe: string;
}
