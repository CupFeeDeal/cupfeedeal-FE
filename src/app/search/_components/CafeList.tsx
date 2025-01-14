"use client";
import { useRouter } from "next/navigation";

interface ListItem {
  distance: number;
  name: string;
  address: string;
  subscribe: string;
  img: string;
}

interface ListProps {
  cafeList: ListItem[];
}

export default function CafeList({ cafeList }: ListProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full">
      <div className="h-11 flex items-center pl-5 Body_2_med text-Grey-400 border-b border-b-[var(--Grey400)]">
        거리순
      </div>
      {cafeList.map((cafe, index) => (
        <div key={index} className="flex flex-row items-center py-4 px-5 gap-3">
          <span className="w-[7.5rem] h-[7.5rem] rounded-lg bg-Grey-300 shrink-0"></span>
          <span>
            <div className="Caption_bold text-Main_Blue mb-1">
              {cafe.distance}m
            </div>
            <div className="Subhead_1_bold text-Grey-900 mb-2">{cafe.name}</div>
            <div className="flex flex-row gap-3 mb-1">
              <span className="Body_2_bold text-Grey-900 shrink-0">주소</span>
              <span className="Body_2_med text-Grey-600 truncate">
                {cafe.address}
              </span>
            </div>
            <div className="flex flex-row gap-3">
              <span className="Body_2_bold text-Grey-900">구독</span>
              <span className="Body_2_med text-Grey-600">
                ₩{cafe.subscribe}부터
              </span>
            </div>
          </span>
        </div>
      ))}
      <div className="w-6" />
    </div>
  );
}
