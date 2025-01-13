"use client";

import { Back } from "@assets/icons";
import { useRouter } from "next/navigation";

interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  const router = useRouter();
  return (
    <header className="Body_1_bold flex justify-between items-center py-3 px-5">
      <Back onClick={() => router.back()} cursor={"pointer"} />
      {title}
      <div className="w-6" />
    </header>
  );
}
