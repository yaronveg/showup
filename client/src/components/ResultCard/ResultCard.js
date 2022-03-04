import React from "react";
import { Link } from "react-router-dom";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Chips from "../Chips/Chips";
import Connect from "../Connect/Connect";
import ConnectionCount from "../ConnectionCount/ConnectionCount";
import ProfilePic from "../ProfilePic/ProfilePic";
import UserLocation from "../UserLocation/UserLocation";

export default function ResultCard({ user }) {
  const {
    _id,
    profilePicture,
    firstName,
    lastName,
    connections,
    playlist,
    skills,
    genres,
  } = user;

  return (
    <div className="ResultCard">
      {profilePicture && <ProfilePic src={profilePicture} />}
      <div className="card-main">
        <Link to={`/users/${_id}`}>{firstName + " " + lastName}</Link>
        <UserLocation />
        {connections.length > 0 && (
          <ConnectionCount count={connections.length} />
        )}
        <Connect />
      </div>
      {playlist.length > 0 && <AudioPlayer playlist={playlist} />}
      <div className="chips">
        {skills.length > 0 && <Chips chips={skills.slice(0, 2)} />}
        {genres.length > 0 && <Chips chips={genres.slice(0, 2)} />}
      </div>
    </div>
  );
}
