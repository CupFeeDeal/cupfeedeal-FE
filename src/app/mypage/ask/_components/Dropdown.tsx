"use client";

import { useState } from "react";

// icons
import { Back } from "src/assets/icons";
// types
import { SelectProps } from "src/types/mypage";

export default function Dropdown({
  options,
  value,
  placeholder,
  onChange,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false); // 드롭다운 닫기
  };

  return (
    <div className="relative w-full">
      {/* 드롭다운 버튼 */}
      <span
        onClick={() => setIsOpen(!isOpen)}
        className=" relative bg-white z-10 flex w-full p-3 max-h-[17.75rem] border rounded-[10px] rounded-Grey-300 cursor-pointer"
      >
        <div className={`w-full Body_2_med }`}>
          {value || <span className="text-Grey-400">{placeholder}</span>}
        </div>
        <Back className="-rotate-90" />
      </span>

      {/* 옵션 리스트 */}
      {isOpen && (
        <ul
          className=" relative z-5 flex flex-col w-full max-h-[17.75rem] border rounded-lg rounded-Grey-300 pt-6 -mt-6"
          onBlur={() => setIsOpen(false)}
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="Body_2_med text-Grey-500 hover:text-black py-[0.65rem] px-4 cursor-pointer border-b last:border-b-0"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
