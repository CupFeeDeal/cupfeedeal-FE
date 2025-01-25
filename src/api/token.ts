export const token = {
  // 서버 컴포넌트용 비동기 버전
  get: async () => {
    if (typeof window === "undefined") {
      const { cookies } = require("next/headers");
      const cookieStore = await cookies();
      return cookieStore.get("accessToken")?.value;
    }
    return token.sync();
  },

  // 인터셉터용 동기 버전
  sync: () => {
    if (typeof window === "undefined") return null;
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];
  },

  // 클라이언트애서만 가능
  set: (value: string, name: string = "accessToken") => {
    if (typeof window === "undefined") return;
    document.cookie = `${name}=${value}; path=/; max-age=86400`;
  },

  // 클라이언트애서만 가능
  remove: () => {
    if (typeof window === "undefined") return;
    document.cookie =
      "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  },
};
