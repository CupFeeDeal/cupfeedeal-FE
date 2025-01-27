"use client";

import { Back } from "@assets/icons";
import { useRouter } from "next/navigation";

interface TopBarProps {
  title: string;
  onBack?: () => void;
  backLink?: string;
}

const TopBar = ({ title, onBack, backLink }: TopBarProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (backLink) {
      router.push(`${backLink}`);
    } else {
      router.back();
    }
  };

  return (
    <header className="Body_1_bold flex justify-between items-center py-3 px-5">
      <Back onClick={handleBack} />
      {title}
      <div className="w-6" />
    </header>
  );
};

export default TopBar;
