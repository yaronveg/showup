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
          <ProfilePic src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/132433140_10221371109080038_916252037937717771_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RL-ee5Kw7nUAX8vxlZC&_nc_ht=scontent-frt3-1.xx&oh=36e2345297e8dd8f94c24bc8ac4eaaf1&oe=61DDDAD8" />
        </div>
      </div>
    </div>
  );
}
