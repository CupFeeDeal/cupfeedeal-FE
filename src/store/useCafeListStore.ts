import { create } from "zustand";
import { Cafe } from "src/types/search";

interface CafeListState {
  cafes: Cafe[];
  setCafes: (cafes: Cafe[]) => void;
}

export const useCafeListStore = create<CafeListState>((set) => ({
  cafes: [],
  setCafes: (cafes) => set({ cafes }),
}));
