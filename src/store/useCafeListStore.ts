import { create } from "zustand";
import { Cafe } from "src/types/search";
import { persist } from "zustand/middleware";

interface CafeListState {
  cafes: Cafe[];
  setCafes: (cafes: Cafe[]) => void;
  updateCafeLikeStatus: (id: number, isLike: boolean) => void;
}

export const useCafeListStore = create(
  persist<CafeListState>(
    (set) => ({
      cafes: [],
      setCafes: (cafes) => set({ cafes }),
      updateCafeLikeStatus: (id, isLike) => {
        set((state) => ({
          cafes: state.cafes.map((cafe) =>
            cafe.id === id ? { ...cafe, is_like: isLike } : cafe
          ),
        }));
      },
    }),
    {
      name: "cafe-list",
    }
  )
);
