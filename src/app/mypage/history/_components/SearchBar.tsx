"use client";
//import { useState } from "react";
import { Search } from "@assets/icons";

const SearchBar = () => {
  //const [query, setQuery] = useState("");

  return (
    <div className="w-full px-5 z-10 pt-4 pb-3">
      <div className="flex flex-row items-center gap-3 px-3 py-[0.88rem] rounded-[0.625rem] bg-white shadow-[0_0_11px_0_rgba(153,153,159,0.26)]">
        <input
          className="flex flex-1 Body_2_med"
          placeholder="카페와 구독권을 검색해보세요"
        />
        <Search width={18.5} height={18.5} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
