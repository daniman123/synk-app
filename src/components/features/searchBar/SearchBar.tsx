import Link from "next/link";
import { useState } from "react";

export interface ISearchResults {
  results: string[];
}

export const SearchResults = ({ results }: ISearchResults) => {
  return (
    <ul className="absolute left-1 w-11/12 bg-slate-100 rounded-b">
      {results.map((result, index) => (
        <Link key={index} href={"/" + result}>
          <li className=" indent-1 text-cyan-900 cursor-pointer opacity-95 hover:opacity-100 hover:bg-slate-300">
            {result}
          </li>
        </Link>
      ))}
    </ul>
  );
};

const items = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Honeydew"];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="block w-2/4 relative">
        <input
          type="search"
          placeholder="search"
          className="rounded-l outline-none text-slate-600 w-full h-7 text-base indent-1"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        {searchTerm && <SearchResults results={items} />}
      </div>

      <button className="border rounded-r outline-none h-7 w-8">X</button>
    </>
  );
};

export default SearchBar;
