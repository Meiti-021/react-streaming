import { Link } from "react-router-dom";
import { SearchIcon } from "../utils/icons";
import { useState } from "react";

const HeaderSearch = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <div className="flex">
      <input
        type="text"
        className={`transition-all duration-300 mr-4 h-8 bg-black  text-gray ${
          searchOpen ? "w-44 rounded-2xl px-5" : "w-0"
        }`}
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Link
        to={`/movies/search/${search}`}
        onMouseEnter={() => {
          setSearchOpen(!searchOpen);
        }}
        aria-label="open search input"
        className="flex justify-center items-center"
      >
        <SearchIcon className={"h-5 w-5"} />
      </Link>
    </div>
  );
};

export default HeaderSearch;
