import React from "react";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Chips from "../Chips/Chips";
import Connect from "../Connect/Connect";
import ConnectionCount from "../ConnectionCount/ConnectionCount";
import ProfilePic from "../ProfilePic/ProfilePic";
import UserLocation from "../UserLocation/UserLocation";

const genres = ["Rock", "Alt", "Acoustic", "Pop", "Alternative"];
const skills = ["Saxophone", "Guitar", "Bass", "Piano", "Drums"];

export default function ResultCard() {
  return (
    <div className="ResultCard">
      <ProfilePic />
      <div className="card-main">
        <a href="www.google.com">Yaron Veg</a>
        <UserLocation />
        <ConnectionCount />
        <Connect />
      </div>
      <AudioPlayer />
      <div className="chips">
        <Chips chips={skills.slice(0, 2)} />
        <Chips chips={genres.slice(0, 2)} />
      </div>
    </div>
  );
}
