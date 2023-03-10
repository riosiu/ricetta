import React from "react";
import { CiSearch } from "react-icons/ci";
const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <>
      <div className="items-center gap-10 mt-10 flex flex-col justify-center">
        <h1 className="text-5xl font-bold font-nunito">Search the Foods</h1>
        <form action="" className="items-center flex flex-row gap-8">
          <input
            className="bg-zinc-700 outline-none  p-2 rounded-xl"
            size={30}
            placeholder="cari resep ..."
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
