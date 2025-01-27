// icons
import { Search } from "@assets/icons";

interface SearchBarProps {
  onSearch: (value: string) => void;
  currQuery?: string;
}

const SearchBar = ({ onSearch, currQuery = "" }: SearchBarProps) => {
  const handleClickSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (e.target as HTMLFormElement).elements.namedItem(
      "query"
    ) as HTMLInputElement;
    onSearch(query.value);
  };

  return (
    <form
      onSubmit={handleClickSearch}
      className="w-full px-5 absolute z-10 top-4"
    >
      <div className="flex flex-row items-center gap-3 px-3 py-[0.88rem] rounded-[0.625rem] bg-white shadow-[0_0_11px_0_rgba(153,153,159,0.26)]">
        <input
          name="query"
          defaultValue={currQuery}
          className="flex flex-1 Body_2_med"
          placeholder="카페명 또는 주소 검색"
        />
        <button type="submit" className="cursor-pointer">
          <Search width={18.5} height={18.5} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
