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
  updateProgress,
} from "../../app/audioPlayerSlice";

export default function AudioPlayer({ playlist }) {
  const { currentSong, isPlaying, listOpen, progress, duration } = useSelector(
    (state) => state.audioPlayer
  );
  const dispatch = useDispatch();
  const playlistStyle = listOpen ? "music-playlist open" : "music-playlist";

  // references
  const audio = useRef();

  useEffect(() => {
    dispatch(loadPlaylist());
  }, [dispatch]);

  useEffect(() => {
    isPlaying ? audio.current.play() : audio.current.pause();
  }, [isPlaying, audio, currentSong]);

  return (
    <div className="AudioPlayer">
      <div className="main">
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
          <div
            className="progress-container"
            onClick={(e) => {
              const newProgress = Math.floor(
                ((e.clientX - e.target.getBoundingClientRect().x) /
                  e.target.offsetWidth) *
                  100
              );
              dispatch(updateProgress(newProgress));
              audio.current.currentTime = (newProgress * duration) / 100;
              if (!isPlaying) dispatch(togglePlay());
            }}
          >
            <audio
              src={playlist[currentSong].src}
              className="audio"
              ref={audio}
              onLoadedMetadata={(e) => dispatch(setDuration(e.target.duration))}
              onTimeUpdate={(e) => {
                dispatch(
                  changeProgress({
                    currentTime: e.target.currentTime,
                    duration: e.target.duration,
                  })
                );
              }}
            ></audio>
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <button className="next audio-btn">
            <FontAwesomeIcon
              className="audioIcon"
              icon={faForward}
              onClick={() => dispatch(next(playlist.length))}
            />
          </button>
        </div>
      </div>
      <div className={playlistStyle}>
        {playlist.map((song) => {
          let classNames = "playlist-song";
          if (song.title === playlist[currentSong].title) {
            classNames += " current-song";
          }
          return (
            <button
              onClick={() => dispatch(changeSong(playlist.indexOf(song)))}
              key={song.title}
              className={classNames}
            >
              <h4 className="audioTitle">{song.title}</h4>
            </button>
          );
        })}
      </div>
    </div>
  );
}
