export const token = {
  get: () => {
    // 서버일 때
    if (typeof window === "undefined") {
      const { cookies } = require("next/headers");
      const cookieStore = cookies();
      return cookieStore.get("accessToken")?.value;

      // 클라이언트일 때
    } else {
      return document.cookie
        .split("; ")
        .find((row) => row.startsWith("accessToken="))
        ?.split("=")[1];
    }
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
