import { create } from "zustand";

type SelectedCafeState = {
  selectedCafeId: number | null;
  setSelectedCafeId: (id: number | null) => void;

  showBottomSheet: boolean;
  setShowBottomSheet: (show: boolean) => void;

  isSheetOpen: boolean;
  setIsSheetOpen: (isOpen: boolean) => void;
};

const useSelectedCafeStore = create<SelectedCafeState>((set) => ({
  selectedCafeId: null,
  setSelectedCafeId: (id) => set({ selectedCafeId: id }),

  showBottomSheet: false,
  setShowBottomSheet: (show) => set({ showBottomSheet: show }),

  isSheetOpen: false,
  setIsSheetOpen: (isOpen) => set({ isSheetOpen: isOpen }),
}));

export default useSelectedCafeStore;
