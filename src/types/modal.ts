import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  fullPage?: boolean;
  showCloseButton?: boolean;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
}

export interface BasicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

export interface BasicCafeModalProps extends BasicModalProps {
  cafe: string;
}

export interface UseCardModalProps extends BasicCafeModalProps {
  onComplete: (showFootModal: boolean) => void;
}

export interface CancelBfModalProps extends BasicCafeModalProps {
  remain: number;
}

export interface ManageModalProps extends BasicCafeModalProps {
  id: number;
  menu: string;
  period: number;
  price: number;
  start: string;
  end: string;
  visit: number;
  remain: number;
}
