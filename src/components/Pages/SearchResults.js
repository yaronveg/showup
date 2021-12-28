import React from "react";
import ResultCard from "../ResultCard/ResultCard";

export default function SearchResults() {
  return (
    <div className="SearchResults container">
      <div className="area-side">
        <div className="main-cat">
          <button className="active">All</button>
          <button>Players</button>
          <button>Gigs</button>
        </div>
        <div className="filters">
          <div className="filter instruments">
            <button className="filter-btn">Bass (electric)</button>
            <button className="filter-btn">Bass (electric)</button>
          </div>
        </div>
      </div>
      <div className="area-results">
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
      </div>
    </div>
  );
}
