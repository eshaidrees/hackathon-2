'use client'

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto px-4 py-2">
      <div className="flex items-center px-4 py-2 border border-gray-300 rounded-full bg-gray-100 w-full sm:w-[300px] md:w-[300px] lg:w-[300px]">
        {/* Lucide Search Icon */}
        <SearchIcon className="w-5 h-5 text-gray-500 mr-2" />
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search categories...."
          value={query}
          onChange={handleInputChange}
          className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-500"
        />
      </div>
    </div>
  );
};

export default Search;
