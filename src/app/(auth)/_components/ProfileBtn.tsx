"use client";

import { Dispatch, SetStateAction } from "react";
import { Profile1, Profile2, Profile3, Profile4 } from "@assets/icons";

interface ProfileBtnProps {
  selectedId: number | null;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
}

const ProfileBtn = ({ selectedId, setSelectedId }: ProfileBtnProps) => {
  const profiles = [
    { Component: Profile1, id: 11, name: "매일세잔" },
    { Component: Profile2, id: 12, name: "블랙카우" },
    { Component: Profile3, id: 13, name: "습관성탈출" },
    { Component: Profile4, id: 14, name: "응애뉴비" },
  ];

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6 w-[60%] mx-auto">
      {profiles.map(({ Component, id, name }) => (
        <div
          key={id}
          onClick={() => setSelectedId(id)}
          className="cursor-pointer space-y-2 transition-all duration-300"
        >
          <Component
            className={`${
              selectedId === id
                ? "drop-shadow-basic"
                : selectedId !== null
                ? "opacity-30"
                : ""
            }`}
          />
          <p className="Subhead_2_bold font-medium text-center">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileBtn;
