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
			<div className="relative max-w-full w-3/5">
				<input
					type="search"
					placeholder="search"
					className="w-full outline-none border rounded-s indent-1 text-cyan-900"
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
					}}
				/>
				{searchTerm && <SearchResults results={items} />}
			</div>
			<button className="w-7 border rounded-e">X</button>
		</>
	);
};

export default SearchBar;
