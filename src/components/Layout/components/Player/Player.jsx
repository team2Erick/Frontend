import React, { useState, useEffect, useContext } from 'react';
import ShuffleIcon from './img/shuffle-icon.svg';
import BackIcon from './img/back-icon.svg';
import PauseIcon from './img/pause-icon.svg';
import PlayIcon from './img/play-icon.svg';
import NextIcon from './img/next-icon.svg';
import ContinueIcon from './img/continue-icon.svg';
import VolumeIcon from './img/volume-icon.svg';
import PlaylistIcon from './img/playlist-icon.svg';
import './Player.scss';

import Playlist from './components/Playlist';
import api from "../../../../services/api"
import Store from '../../../../store';

export default () => {
  const { state, setState } = useContext(Store);

  const [showPlaylist, setShowPlaylist] = useState(false);
  const [currentTime, setCurrentTime] = useState(false);
  const [playSended, setPlaySended] = useState(false);

  useEffect(() => {
    // on new song
    console.log(state.user);
    if (!state.player.playlist.length) return;
    if (state.player.audio) state.player.audio.pause();
    setState('player', {
      audio: new Audio(state.player.playlist[state.player.index].preview),
    });
    setTimeout(() => {
      setPlaySended(() => {
        return false;
      });
    }, 300);
  }, [state.player.index, state.player.playlist]);

  useEffect(() => {
    if (!state.player.playlist.length) return;
    setCurrentTime(0);
    state.player.audio.play();
    state.player.audio.addEventListener('timeupdate', () => {
      setCurrentTime((value) => {
        // if listen 60% about song, set a play
        if (value > state.player.audio.duration * 0.6) sendPlay();
        return state.player.audio.currentTime;
      });
    });
    state.player.audio.addEventListener('ended', () => {
      next();
    });
  }, [state.player.audio]);

  const sendPlay = () => {
    setPlaySended(async (value) => {
      if (!value) {

        const response = await api.post("music/play", {
          user: state.user.id,
          trackId: state.player.playlist[state.player.index].id,
          song: state.player.playlist[state.player.index]
        })

        console.log(response.data.data);

        return true;
      } else {
        return value;
      }
    });
  };

  const playToggle = () => {
    if (state.player.play) {
      setState('player', { play: false });
      state.player.audio.pause();
    } else {
      setState('player', { play: true });
      state.player.audio.play();
    }
  };

  const prev = () => {
    if (state.player.playlist[state.player.index - 1]) {
      setState('player', {
        index: state.player.index - 1,
      });
      // console.log(setState);
    }
  };
  const next = () => {
    if (state.player.playlist[state.player.index + 1]) {
      setState('player', {
        index: state.player.index + 1,
      });
    }
  };

  const updateTime = (event) => {
    setCurrentTime(event.target.value);
    state.player.audio.currentTime = event.target.value;
  };

  const secondsToString = (seconds) => {
    seconds = parseInt(seconds);
    var hour = Math.floor(seconds / 3600);
    hour = hour < 10 ? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = minute < 10 ? '0' + minute : minute;
    var second = seconds % 60;
    second = second < 10 ? '0' + second : second;
    return minute + ':' + second;
  };
  if (state.player.playlist.length < 1) return <></>;
  if (!state.player.playlist[0].artist.name) return <></>;
  return (
    <div className="player">
      <Playlist
        show={showPlaylist}
        close={() => {
          setShowPlaylist(false);
        }}
      />

      <div className="player__song">
        {state.player.playlist[state.player.index].album &&
          <img
            className="player__song__image"
            src={state.player.playlist[state.player.index].album.cover_small}
            alt=""
          />
        }
        <div className="player__song__content">
          <strong>{state.player.playlist[state.player.index].title}</strong>
          <p>{state.player.playlist[state.player.index].artist.name}</p>
          <img
            onClick={() => {
              setShowPlaylist(!showPlaylist);
            }}
            src={PlaylistIcon}
          />
        </div>
      </div>

      <div className="player__controls">
        <div className="player__controls__buttons">
          <button>
            <img src={ShuffleIcon} />
          </button>
          <button onClick={prev}>
            <img src={BackIcon} />
          </button>

          <button>
            <div onClick={playToggle} className="play">
              {state.player.play ? (
                <img src={PauseIcon} />
              ) : (
                  <img src={PlayIcon} />
                )}
            </div>
          </button>

          <button onClick={next}>
            <img src={NextIcon} />
          </button>
          <button>
            <img src={ContinueIcon} />
          </button>
        </div>
        {state.player.audio && (
          <div className="player__controls__progress">
            <span>{secondsToString(currentTime)}</span>

            <input
              type="range"
              max={parseInt(state.player.audio.duration)}
              className="player__controls__progress__bar"
              value={currentTime}
              onChange={(event) => updateTime(event)}
            ></input>

            <span>
              {secondsToString(state.player.audio.duration - currentTime || 0)}
            </span>
          </div>
        )}
      </div>
      {state.player.audio && (
        <div className="player__volume">
          <img src={VolumeIcon} alt="Volume" />
          <input
            type="range"
            value={state.player.audio.volume * 100}
            max={100}
            className="player__controls__progress__bar"
            onChange={(event) =>
              (state.player.audio.volume = (
                event.target.value / 100
              ).toString())
            }
          ></input>
        </div>
      )}
    </div>
  );
};
