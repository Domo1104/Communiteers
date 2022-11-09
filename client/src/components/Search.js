

function Search() {
  <div>
    <form className="search-bar">
      <input
        type="text"
        placeholder="search by location..."
        value={searchValue}
        onChange={handleSearchChange}
      />
    </form>
  </div>;
}

export default Search;
