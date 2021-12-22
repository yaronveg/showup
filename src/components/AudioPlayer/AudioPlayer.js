import { faBars, faForward, faPlay } from "@fortawesome/free-solid-svg-icons";
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

  useEffect(() => {
    dispatch(loadPlaylist());
  }, []);

  return (
    <div className="AudioPlayer">
      <div className="main">
        <audio src={playlist[0].src} className="audio"></audio>
        <div className="navigation">
          <div className="left">
            <button className="library audio-btn">
              <FontAwesomeIcon className="audioIcon" icon={faBars} />
            </button>
            <button className="play audio-btn">
              <FontAwesomeIcon className="audioIcon" icon={faPlay} />
            </button>
          </div>
          <div className="progress-container">
            <div className="progress"></div>
          </div>
          <button className="next audio-btn">
            <FontAwesomeIcon className="audioIcon" icon={faForward} />
          </button>
        </div>
      </div>
      <div className="music-playlist">
        <h4 className="audioTitle">{playlist[0].title}</h4>
      </div>
    </div>
  );
}
