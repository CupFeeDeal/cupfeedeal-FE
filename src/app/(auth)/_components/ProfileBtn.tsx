"use client";

import { useRouter } from "next/navigation";
import { Profile1, Profile2, Profile3, Profile4 } from "@assets/icons";
import { authApi } from "@api/client/auth";
import { token } from "@api/token";

const ProfileBtn = () => {
  const router = useRouter();

  const handleDemoLogin = async (userId: number) => {
    try {
      const response = await authApi.demoLogin(userId);
      token.set(response.result.token);
      router.replace("/home");
    } catch (error) {
      console.error("데모 로그인 실패:", error);
    }
  };

  const profiles = [
    { Component: Profile1, id: 11 },
    { Component: Profile2, id: 12 },
    { Component: Profile3, id: 13 },
    { Component: Profile4, id: 14 },
  ];

  return (
    <div className="absolute top-5 right-6 flex flex-col gap-4">
      {profiles.map(({ Component, id }) => (
        <div
          key={id}
          onClick={() => handleDemoLogin(id)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Component />
        </div>
      ))}
    </div>
  );
};

export default ProfileBtn;
