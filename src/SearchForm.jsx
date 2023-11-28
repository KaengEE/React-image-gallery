import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  //검색이벤트
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value?.trim();
    if (searchValue !== null && searchValue.length > 1) {
      //console.log(searchValue);
      setSearchTerm(searchValue); //검색어 저장
    }
    e.target.elements.search.value = "";
  };

  return (
    <section>
      <h1 className="title">Images Gallery</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
