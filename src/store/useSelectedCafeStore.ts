import { create } from "zustand";

type SelectedCafeState = {
  selectedCafeId: number | null;
  setSelectedCafeId: (id: number | null) => void;
};

const useSelectedCafeStore = create<SelectedCafeState>((set) => ({
  selectedCafeId: null,
  setSelectedCafeId: (id) => set({ selectedCafeId: id }),
}));

export default useSelectedCafeStore;
