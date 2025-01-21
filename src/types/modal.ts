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

export interface UseModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
}
