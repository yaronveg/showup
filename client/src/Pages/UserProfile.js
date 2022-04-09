import ConnectionCount from "../components/ConnectionCount/ConnectionCount";
import ProfilePic from "../components/ProfilePic/ProfilePic";
import UserLocation from "../components/UserLocation/UserLocation";
import Chips from "../components/Chips/Chips";
import ProfileGallery from "../components/ProfileGallery/ProfileGallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import TimeLine from "../components/TimeLine/TimeLine";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../api/user";

export default function UserProfile() {
  const [user, setUserData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getUser(id)
      .then((data) => {
        const newData = data.json();
        return newData;
      })
      .then((data) => {
        setUserData(data);
      });
  }, [id]);

  console.log("user: ", user);

  return (
    user && (
      <div className="UserProfile">
        <div className="container">
          <div className="cover-container">
            {user.coverPicture && (
              <img
                src={user.coverPicture}
                alt="COVER-ERR"
                className="cover-pic"
              />
            )}
          </div>
          <div className="profile-cols">
            <div className="side-push">
              <div className="side-fixed">
                <div className="side-col">
                  <div className="side-top">
                    <div className="profile-pic">
                      <ProfilePic src={user.profilePicture} />
                    </div>
                    <h4 className="profileName">
                      {user.firstName + " " + user.lastName}
                    </h4>
                    <UserLocation />
                    <ConnectionCount value={user.connections.length} />
                    {user.playlist && <AudioPlayer playlist={user.playlist} />}
                    <div className="profileChips">
                      {user.skills && <Chips chips={user.skills} />}
                    </div>
                    <div className="profileChips">
                      {user.genres && <Chips chips={user.genres} />}
                    </div>
                  </div>
                  <div className="side-bot">
                    {user.galleryPictures && (
                      <ProfileGallery galleryPictures={user.galleryPictures} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="main-col">
              <div className="profileBio">
                <FontAwesomeIcon className="bioIcon" icon={faFileAlt} />
                <p className="bioText">{user.bio}</p>
              </div>
              {user.timestamps && <TimeLine timestamps={user.timestamps} />}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
