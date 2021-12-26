import {
  faBars,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  togglePlay,
  changeSong,
  next,
  togglePlaylist,
  changeProgress,
  loadPlaylist,
  setDuration,
} from "../../app/audioPlayerSlice";

export default function AudioPlayer() {
  const { playlist, currentSong, isPlaying, listOpen, progress, duration } =
    useSelector((state) => state.audioPlayer);
  const dispatch = useDispatch();

  // references
  const audio = useRef();
  useEffect(() => {
    dispatch(setDuration(audio.current.duration));
  }, [audio?.current?.loadedmetadata, audio?.current?.readyState, dispatch]);

  useEffect(() => {
    dispatch(loadPlaylist());
  }, [dispatch]);

  useEffect(() => {
    isPlaying ? audio.current.play() : audio.current.pause();
  }, [isPlaying, audio, currentSong]);

  const playlistStyle = listOpen ? "music-playlist open" : "music-playlist";

  return (
    <div className="AudioPlayer">
      <h1>{duration}</h1>
      <div className="main">
        <audio
          src={playlist[currentSong].src}
          className="audio"
          ref={audio}
        ></audio>

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
              style={{ width: `${progress}%` }}
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
      <div className={playlistStyle}>
        {playlist.map((song) => (
          <button
            onClick={() => dispatch(changeSong(playlist.indexOf(song)))}
            key={song.title}
          >
            <h4 className="audioTitle">{song.title}</h4>
          </button>
        ))}
      </div>
    </div>
  );
}
