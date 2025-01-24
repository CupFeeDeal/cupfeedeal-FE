import { create } from "zustand";
import { Cafe } from "src/types/search";

interface CafeListState {
  cafes: Cafe[];
  setCafes: (cafes: Cafe[]) => void;
  updateCafeLikeStatus: (id: number, isLike: boolean) => void;
}

export const useCafeListStore = create<CafeListState>((set) => ({
  cafes: [],
  setCafes: (cafes) => set({ cafes }),
  updateCafeLikeStatus: (id: number, isLike: boolean) =>
    set((state) => ({
      cafes: state.cafes.map((cafe) =>
        cafe.id === id ? { ...cafe, is_like: isLike } : cafe
      ),
    })),
}));
