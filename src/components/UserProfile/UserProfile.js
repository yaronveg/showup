import ConnectionCount from "../ConnectionCount/ConnectionCount";
import ProfilePic from "../ProfilePic/ProfilePic";
import UserLocation from "../UserLocation/UserLocation";
import Chips from "../Chips/Chips";
import ProfileGallery from "../ProfileGallery/ProfoileGallery";

const skills = ["Guitar", "Bass", "Piano", "Drums"];
const genres = ["Rock", "Alt", "Acoustic", "Pop"];
const galleryPictures = [
  "/assets/standbys/profileGallery1.jpg",
  "/assets/standbys/profileGallery2.jpg",
  "/assets/standbys/profileGallery3.jpg",
  "/assets/standbys/profileGallery4.jpg",
];

export default function UserProfile() {
  return (
    <div className="UserProfile">
      <div className="container">
        <div className="cover-container">
          <img
            src="https://scontent-frt3-2.xx.fbcdn.net/v/t1.6435-9/119903473_10220680526935916_899098172998622829_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=G9t_6V1_w2YAX-dm9Uu&tn=pn0p2CMwUbYckEOh&_nc_ht=scontent-frt3-2.xx&oh=36954f5b10f570af5d7ffdd9914a9f73&oe=61DD3618"
            alt="COVER-ERR"
            className="cover-pic"
          />
        </div>
        <div className="profile-cols">
          <div className="side-col">
            <div class="side-top">
              <div className="profile-pic">
                <ProfilePic />
              </div>
              <h4 className="profileName">Yaron Veg</h4>
              <UserLocation />
              <ConnectionCount />
              <div className="profileChips">
                <Chips arr={skills} />
              </div>
              <div className="profileChips">
                <Chips arr={genres} />
              </div>
            </div>
            <ProfileGallery arr={galleryPictures} />
          </div>
          <div className="main-col">right</div>
        </div>
      </div>
    </div>
  );
}
