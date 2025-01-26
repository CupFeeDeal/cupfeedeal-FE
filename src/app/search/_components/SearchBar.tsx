"use client";
import { ChangeEvent, useState } from "react";
import { Search } from "@assets/icons";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState(""); // 입력된 검색어

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClickSearch = () => {
    onSearch(query);
    console.log("click");
  };

  return (
    <div className="w-full px-5 absolute z-10 top-4">
      <div className="flex flex-row items-center gap-3 px-3 py-[0.88rem] rounded-[0.625rem] bg-white shadow-[0_0_11px_0_rgba(153,153,159,0.26)]">
        <input
          value={query}
          onChange={handleInputChange}
          className="flex flex-1 Body_2_med"
          placeholder="카페명 또는 주소 검색"
        />
        <Search
          onClick={handleClickSearch}
          width={18.5}
          height={18.5}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SearchBar;
