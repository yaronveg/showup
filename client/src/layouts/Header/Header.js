import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";
import ProfilePic from "../../components/ProfilePic/ProfilePic";
// import ShowUpLogo from "./logo-showup.svg";
import ShowUpLogo from "./showup-logo-text.svg";

export default function Header({ user }) {
  return (
    <>
      <div className="Header">
        <div className="container">
          <div className="areaLogo">
            <Link to="/search">
              <div className="logoAndTag">
                <img src={ShowUpLogo} alt="showUpLogo" className="logo" />
                <span className="tagline">Music Industry Connections</span>
              </div>
            </Link>
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
            {/* <FontAwesomeIcon
            className="gigsIcon header-icon"
            icon={faUsers}
            size="lg"
          />
          <FontAwesomeIcon
            className="settingsIcon header-icon"
            icon={faCog}
            size="lg"
          /> */}
            <Link to="/signup">Signup</Link>
            <Link to="/users/61fd846eef6febfc4e212bf7">
              <ProfilePic src={user.profilePicture} />
            </Link>
          </div>
        </div>
      </div>
      <>
        <Outlet />
      </>
    </>
  );
}
