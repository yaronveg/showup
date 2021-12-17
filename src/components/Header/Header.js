import "./Header.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowUpLogo from "./logo-showup.svg";

export default function Header() {
  return (
    <div className="Header">
      <div className="header-container">
        <div className="areaLogo">
          <div className="logoAndTag">
            <img src={ShowUpLogo} alt="showUpLogo" className="logo" />
            <span className="tagline">Music Industry Connections</span>
          </div>
          <div className="areaSearch">
            <input
              className="searchBar"
              type={"text"}
              placeholder="..."
            ></input>
            <button className="btnSearch">
              <FontAwesomeIcon className="cartIcon" icon={faSearch} size="lg" />{" "}
            </button>
          </div>
        </div>
        <div className="areaIcons"></div>
      </div>
    </div>
  );
}
