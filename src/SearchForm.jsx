import React from "react";

const SearchForm = () => {
  return (
    <section>
      <h1 className="title">Images Gallery</h1>
      <form className="search-form">
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
