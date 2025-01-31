import { create } from "zustand";
import { token } from "@api/token";

interface AuthStore {
  accessToken: string | null;
  setAccessToken: (newToken: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>(() => ({
  // 초기값 = null
  accessToken: null,

  setAccessToken: (newToken: string) => {
    token.set(newToken);
    useAuthStore.setState({ accessToken: newToken });
  },

  logout: () => {
    token.remove();
    useAuthStore.setState({ accessToken: null });
  },
}));

// 클라이언트에서만 실행되는 초기화 함수
if (typeof window !== "undefined") {
  const initialToken = token.sync();
  if (initialToken) {
    useAuthStore.setState({ accessToken: initialToken });
  }
}
