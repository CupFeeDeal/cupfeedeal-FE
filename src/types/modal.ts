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
  cafe_name: string;
}

export interface UseCardModalProps extends BasicCafeModalProps {
  onComplete: (showFootModal: boolean) => void;
  user_subscription_id: number;
}

export interface CancelBfModalProps extends BasicCafeModalProps {
  remaining_days: number;
}

export interface LoginModalProps extends BasicModalProps {
  onLogin: () => void;
  message: string;
}

export interface ManageModalProps extends BasicCafeModalProps {
  user_subscription_id: number;
  menu: string;
  period: number;
  price: number;
  start: string;
  end: string;
  visit: number;
  remaining_days: number;
}
