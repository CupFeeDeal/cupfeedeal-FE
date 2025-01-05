import { Back } from "@assets/icons";

interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  return (
    <div className="Body_1_bold flex justify-between items-center py-3 px-5">
      <Back />
      {title}
      <div className="w-6" />
    </div>
  );
}
