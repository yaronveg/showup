import React from "react";

export default function SearchRsults() {
  return (
    <div className="SearchResults">
      <div className="area-side">
        <div className="main-cat">
          <button>All</button>
          <button>Players</button>
          <button>Gigs</button>
        </div>
      </div>
      <div className="area-results"></div>
    </div>
  );
}
