import React, { useState, useHistory } from "react";

function Home({handleSearch, search, eventListing}) {

  return (
    <div>
        <form className="search-bar">
            <input
            type="text"
            placeholder="search by location..."
            value={search}
            onChange={handleSearch}
            />
            <button> Search </button>
        </form>
    </div>
  );
}
export default Home;
