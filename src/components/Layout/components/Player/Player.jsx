import React, { useState, useEffect, useContext } from "react";
import ShuffleIcon from './img/shuffle-icon.svg';
import BackIcon from './img/back-icon.svg';
import PauseIcon from './img/pause-icon.svg';
import PlayIcon from './img/play-icon.svg';
import NextIcon from './img/next-icon.svg';
import ContinueIcon from './img/continue-icon.svg';
import VolumeIcon from './img/volume-icon.svg'
import PlaylistIcon from './img/playlist-icon.svg'
import './Player.scss';

import Playlist from './components/Playlist'

import Store from "../../../../store"

export default () => {

	const { state, setState } = useContext(Store);

	if (state.playlist.length < 1) return <></>

	const [currentTrack, updateCurrentTrack] = useState(state.playlist[state.indexSong])

	useEffect(() => {
		updateCurrentTrack(state.playlist[state.indexSong])
	})

	const [playing, updatePlaying] = useState(false)
	const [audio, updateAudio] = useState(new Audio(currentTrack.song))
	const [currentTime, updateCurrentTime] = useState(0)

	useEffect(() => {
		audio.addEventListener("ended", () => {
			updatePlaying(false)
		})
		audio.addEventListener("timeupdate", () => {
			updateCurrentTime(audio.currentTime)
		})
	}, [audio]);

	const playToggle = () => {
		if (playing) {
			updatePlaying(false)
			audio.pause();
		} else {
			updatePlaying(true)
			audio.play();
		}
	}

	const updateTime = (event) => {
		updateCurrentTime(event.target.value)
		audio.currentTime = event.target.value
	}

	const next = () => {

		if (state.playlist[state.indexSong + 1]) {
			audio.pause();
			setState({ indexSong: state.indexSong + 1 })
			updateCurrentTrack(state.playlist[state.indexSong])

			updatePlaying(false)
			updateCurrentTime(0)
			updateAudio(new Audio(currentTrack.song))
		}

	}

	const prev = () => {
		if (state.playlist[state.indexSong - 1]) {
			audio.pause();
			setState({ indexSong: state.indexSong - 1 })
			updateCurrentTrack(state.playlist[state.indexSong])

			updatePlaying(false)
			updateCurrentTime(0)
			updateAudio(new Audio(currentTrack.song))
		}
	}

	const secondsToString = (seconds) => {
		seconds = parseInt(seconds)
		var hour = Math.floor(seconds / 3600);
		hour = (hour < 10) ? '0' + hour : hour;
		var minute = Math.floor((seconds / 60) % 60);
		minute = (minute < 10) ? '0' + minute : minute;
		var second = seconds % 60;
		second = (second < 10) ? '0' + second : second;
		return minute + ':' + second;
	}


	const [showPlaylist, setShowPlaylist] = useState(false)

	return (
		<div className="player">
			<Playlist show={showPlaylist} close={() => { setShowPlaylist(false) }} />

			<div className="player__song">

				<div className="player__song__image" style={{
					background: `url('${currentTrack.image}')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}>
				</div>
				<div className="player__song__content">
					<strong>{currentTrack.title}</strong>
					<p>{currentTrack.artist}</p>
					<img onClick={() => { setShowPlaylist(!showPlaylist) }} src={PlaylistIcon} />
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
							{
								playing ? <img src={PauseIcon} /> : <img src={PlayIcon} />
							}
						</div>
					</button>

					<button onClick={next}>
						<img src={NextIcon} />
					</button>
					<button>
						<img src={ContinueIcon} />
					</button>

				</div>

				<div className="player__controls__progress">
					<span>
						{secondsToString(currentTime)}
					</span>
					<input type="range"
						value={currentTime}
						max={audio.duration || 0}
						className="player__controls__progress__bar"
						onChange={event => updateTime(event)}
					></input>
					<span>
						{secondsToString(audio.duration - currentTime || 0)}
					</span>
				</div>

			</div>

			<div className="player__volume">
				<img src={VolumeIcon} alt="Volume" />
				<input type="range"
					value={audio.volume * 100}
					max={100}
					className="player__controls__progress__bar"
					onChange={event => audio.volume = ((event.target.value / 100).toString())}
				></input>
			</div>

		</div>
	);
};
