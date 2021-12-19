import ConnectionCount from "../ConnectionCount/ConnectionCount";
import ProfilePic from "../ProfilePic/ProfilePic";
import UserLocation from "../UserLocation/UserLocation";
import Chips from "../Chips/Chips";
import ProfileGallery from "../ProfileGallery/ProfileGallery";

const skills = ["Guitar", "Bass", "Piano", "Drums"];
const genres = ["Rock", "Alt", "Acoustic", "Pop"];
const galleryPictures = [
  "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-9/75424765_2564581346971015_1892483167529467904_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=xFlrDOe5rw0AX8azPXy&_nc_ht=scontent.fsdv3-1.fna&oh=00_AT_2dumOPxlPfRYhvWqQFRLCaXAy6GAvkznOXhZzRL-tRw&oe=61E39B59",
  "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-9/76646823_2564579766971173_4628760476229042176_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=ZdIEc5yNwmQAX_hVEJ_&_nc_ht=scontent.fsdv3-1.fna&oh=00_AT90EMLnNWajE7iDv5uztobbu9SCzVHKdQrWZmtabruxow&oe=61E240CF",
  "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-9/119950836_1250680441932985_1241221853795240522_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=y2iIkIrPuIwAX_3AMVG&_nc_ht=scontent.fsdv3-1.fna&oh=00_AT_r3OQocTW-bhSzFErCY7XgTzJ3u1XnOs-Fx6hlYziwaQ&oe=61E59993",
  "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-9/75250913_2564580826971067_7237483063033200640_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=chPib9lSCaEAX9OtVN-&_nc_ht=scontent.fsdv3-1.fna&oh=00_AT8o0jyP0zc2TGArqLilpQoLQ4vXhfUC-7RZkpUPptpHiQ&oe=61E35A42",
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
            <div className="side-top">
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
            <div className="side-bot">
              <ProfileGallery arr={galleryPictures} />
            </div>
          </div>
          <div className="main-col">right</div>
        </div>
      </div>
    </div>
  );
}
