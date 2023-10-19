import { useContext, useState } from "react";
import { useGlobalContext } from "./context";
import customFetch from "./customFetch";

const SearchForm = () => {
  const { searchTerm, setSearchTerm, handleSubmit } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};
export default SearchForm;
