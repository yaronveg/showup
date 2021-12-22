import {
  faBars,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  togglePlay,
  changeSong,
  next,
  togglePlaylist,
  changeProgress,
  loadPlaylist,
} from "../../app/audioPlayerSlice";

export default function AudioPlayer() {
  const { playlist, currentSong, isPlaying, listOpen, progress } = useSelector(
    (state) => state.audioPlayer
  );
  const dispatch = useDispatch();
  console.log(listOpen, progress);
  useEffect(() => {
    dispatch(loadPlaylist());
  }, [dispatch]);

  return (
    <div className="AudioPlayer">
      <div className="main">
        <audio src={playlist[currentSong].src} className="audio"></audio>
        <div className="navigation">
          <div className="left">
            <button className="library audio-btn">
              <FontAwesomeIcon
                className="audioIcon"
                icon={faBars}
                onClick={() => dispatch(togglePlaylist())}
              />
            </button>
            <button
              className="play audio-btn"
              onClick={() => dispatch(togglePlay())}
            >
              {!isPlaying && (
                <FontAwesomeIcon className="audioIcon" icon={faPlay} />
              )}
              {isPlaying && (
                <FontAwesomeIcon className="audioIcon" icon={faPause} />
              )}
            </button>
          </div>
          <div className="progress-container">
            <div
              className="progress"
              onClick={() => dispatch(changeProgress())}
            ></div>
          </div>
          <button className="next audio-btn">
            <FontAwesomeIcon
              className="audioIcon"
              icon={faForward}
              onClick={() => dispatch(next())}
            />
          </button>
        </div>
      </div>
      <div className="music-playlist">
        {playlist.map((song) => (
          <button onClick={() => dispatch(changeSong())} key={song.title}>
            <h4 className="audioTitle">{song.title}</h4>
          </button>
        ))}
      </div>
    </div>
  );
}
