import { create } from "zustand";
import { SubscriptionCard } from "src/types/subscription";

interface SubscriptionState {
  subscriptions: SubscriptionCard[];
  paw_count: number;

  setSubscription: (data: {
    paw_count: number;
    userSubscriptionListResponseDtos: SubscriptionCard[];
  }) => void;

  updateSubscription: (
    id: number,
    updates: Partial<SubscriptionCard>,
    newPawCount: number
  ) => void;

  removeSubscription: (id: number, newPawCount: number) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscriptions: [],
  paw_count: 0,

  setSubscription: (data) =>
    set({
      subscriptions: data.userSubscriptionListResponseDtos,
      paw_count: data.paw_count,
    }),

  updateSubscription: (id, updates, newPawCount) =>
    set((state) => ({
      subscriptions: state.subscriptions.map((sub) =>
        sub.user_subscription_id === id ? { ...sub, ...updates } : sub
      ),
      paw_count: newPawCount,
    })),

  removeSubscription: (id, newPawCount) =>
    set((state) => ({
      subscriptions: state.subscriptions.filter(
        (sub) => sub.user_subscription_id !== id
      ),
      paw_count: newPawCount,
    })),
}));
