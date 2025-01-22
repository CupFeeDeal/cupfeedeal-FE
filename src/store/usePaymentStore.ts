import { create } from "zustand";
import { CafeSubscription } from "src/types/payment";

interface PaymentStore {
  selectedSubscription: CafeSubscription | null;
  startDate: Date | null;
  setSubscription: (subscription: CafeSubscription | null) => void;
  setStartDate: (date: Date | null) => void;
  reset: () => void;
}

export const usePaymentStore = create<PaymentStore>((set) => ({
  selectedSubscription: null,
  startDate: null,
  setSubscription: (subscription) =>
    set({ selectedSubscription: subscription }),
  setStartDate: (date) => set({ startDate: date }),
  reset: () => set({ selectedSubscription: null, startDate: null }),
}));
