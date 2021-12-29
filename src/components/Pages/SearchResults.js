import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ResultCard from "../ResultCard/ResultCard";
import {
  toggleOpen,
  selectFilter,
  deselectFilter,
} from "../../app/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SearchResults() {
  const { selectedFilters, filtersList } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();
  console.log(selectedFilters);
  return (
    <div className="SearchResults container">
      <div className="area-side">
        <div className="main-cat">
          <button className="active">All</button>
          <button>Players</button>
          <button>Gigs</button>
        </div>
        <div className="filters">
          {filtersList.map((filter) => {
            const icon = filter.isOpen ? faAngleDown : faAngleRight;
            const drawerHeight = filter.isOpen ? "200vh" : "0px";
            return (
              <div className={("filter ", filter.name)} key={filter.name}>
                <button
                  className="filter-title"
                  onClick={() => dispatch(toggleOpen(filter.name))}
                >
                  <FontAwesomeIcon className="title-icon" icon={icon} />
                  <span>{filter.name}</span>
                </button>
                <div
                  className="filter-drawer"
                  style={{ maxHeight: `${drawerHeight}` }}
                >
                  {filter.options.map((option) => {
                    let optionClass = "filter-btn";
                    if (selectedFilters.includes(option)) {
                      optionClass += " selected";
                    }
                    return (
                      <button
                        className={optionClass}
                        key={option}
                        onClick={(e) => {
                          if (selectedFilters.includes(option)) {
                            dispatch(deselectFilter(option));
                          } else {
                            dispatch(selectFilter(option));
                          }
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
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
