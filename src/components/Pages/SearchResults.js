import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <button className="filter-title">
              <FontAwesomeIcon className="title-icon" icon={faAngleDown} />
              <span>Instruments</span>
            </button>
            <div className="filter-drawer">
              <button className="filter-btn">Bass (electric)</button>
              <button className="filter-btn">Guitar</button>
              <button className="filter-btn">Keynoard</button>
              <button className="filter-btn">Piano</button>
              <button className="filter-btn">Violin</button>
              <button className="filter-btn">Drums</button>
            </div>
          </div>
          <div className="filter genres">
            <button className="filter-title">
              <FontAwesomeIcon className="title-icon" icon={faAngleRight} />
              <span>Genres</span>
            </button>
            <div className="filter-samples">
              <button className="filter-btn">Rock</button>
              <button className="filter-btn">Alternative</button>
              <button className="filter-btn">Middle-Eastern</button>
              <button className="filter-btn">Pop</button>
              <button className="filter-btn">Folk</button>
            </div>
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
