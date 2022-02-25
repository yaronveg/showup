import { faCog, faSearch, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePic from "../ProfilePic/ProfilePic";
import ShowUpLogo from "./logo-showup.svg";

export default function Header({ user }) {
  return (
    <div className="Header">
      <div className="container">
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
              <FontAwesomeIcon
                className="searchIcon"
                icon={faSearch}
                size="lg"
              />{" "}
            </button>
          </div>
        </div>
        <div className="areaIcons">
          <FontAwesomeIcon
            className="gigsIcon header-icon"
            icon={faUsers}
            size="lg"
          />
          <FontAwesomeIcon
            className="settingsIcon header-icon"
            icon={faCog}
            size="lg"
          />
          <ProfilePic src={user.profilePicture} />
        </div>
      </div>
    </div>
  );
}
