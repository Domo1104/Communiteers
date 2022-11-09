function Home({handleSearch, search, eventListing}) {
    function filterSearch() {

    }
    
  return (
    <div>
        <form className="search-bar">
            <input
            type="text"
            placeholder="search by location..."
            value={search}
            onChange={handleSearch}
            />
        </form>
    </div>
  );
}
export default Home;
