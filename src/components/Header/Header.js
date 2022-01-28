import { faCog, faSearch, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePic from "../ProfilePic/ProfilePic";
import ShowUpLogo from "./logo-showup.svg";

export default function Header() {
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
          <ProfilePic src="https://scontent.ftlv18-1.fna.fbcdn.net/v/t1.6435-9/30703931_10213905959975976_6380633123226386432_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=TIZP9kpyE84AX8Kh-so&_nc_ht=scontent.ftlv18-1.fna&oh=00_AT8vniqUZrz1P7tRq839ZxnhiOi-p1xRJDe2jUjk95aasA&oe=620D7344" />
        </div>
      </div>
    </div>
  );
}
