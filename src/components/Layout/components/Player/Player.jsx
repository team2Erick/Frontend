import React, { useState, useEffect } from "react";
import ShuffleIcon from './img/shuffle-icon.svg';
import BackIcon from './img/back-icon.svg';
import PauseIcon from './img/pause-icon.svg';
import PlayIcon from './img/play-icon.svg';
import NextIcon from './img/next-icon.svg';
import ContinueIcon from './img/continue-icon.svg';
import VolumeIcon from './img/volume-icon.svg'
import './Player.scss';



export default () => {

	const [currentIndexTrack, updateCurrentIndexTrack] = useState(0)
	const [currentTrack, updateCurrentTrack] = useState(playlist[currentIndexTrack])

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
		audio.pause();
		updateCurrentIndexTrack((value) => value + 1);
		updateCurrentTrack((value) => playlist[currentIndexTrack]);
		updatePlaying(false)
		updateCurrentTime(0)
		updateAudio(new Audio(currentTrack.song))
	}

	const prev = () => {
		audio.pause();
		updateCurrentIndexTrack((value) => value - 1);
		updateCurrentTrack((value) => playlist[currentIndexTrack]);
		updatePlaying(false)
		updateCurrentTime(0)
		updateAudio(new Audio(currentTrack.song))
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

	return (
		<div className="player">
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
				</div>
			</div>

			<div className="player__controls">
				<div className="player__controls__buttons">

					<button>
						<img src={ShuffleIcon} />
					</button>
					<button>
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
		</div >
	)
}

