import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  let { searchTerm, setSearchTerm } = useGlobalContext();
  return (
    <div className="search">
      <div className="search-form ">
        <form className="form-control">
          <label>Search</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
