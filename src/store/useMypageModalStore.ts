import { create } from "zustand";

interface MypageModalState {
  isModalOpen: boolean;
  modalContent: {
    title: string;
    content: React.ReactNode;
    option: string;
    handleClick: () => void;
  } | null;
  openModal: (
    title: string,
    content: React.ReactNode,
    option: string,
    handleClick: () => void
  ) => void;
  closeModal: () => void;
}

const useMypageModalStore = create<MypageModalState>((set) => ({
  isModalOpen: false,
  modalContent: null,
  openModal: (title, content, option, handleClick) =>
    set({
      isModalOpen: true,
      modalContent: { title, content, option, handleClick },
    }),
  closeModal: () => set({ isModalOpen: false, modalContent: null }),
}));

export default useMypageModalStore;
