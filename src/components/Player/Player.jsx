import React, { useState, useEffect } from "react";
import './Player.scss';


export default ({ playlist }) => {

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
						<img src="/src/components/Player/img/shuffle-icon.svg" />
					</button>
					<button>
						<img src="/src/components/Player/img/back-icon.svg" />
					</button>

					<button>
						<div onClick={playToggle} className="play">
							{
								playing ? <img src="/src/components/Player/img/pause-icon.svg" /> : <img src="/src/components/Player/img/play-icon.svg" />
							}
						</div>
					</button>

					<button onClick={next}>
						<img src="/src/components/Player/img/next-icon.svg" />
					</button>
					<button>
						<img src="/src/components/Player/img/continue-icon.svg" />
					</button>

				</div>

				<div className="player__controls__progress">
					<span>
						03:29
					</span>
					<input type="range"
						value={currentTime}
						max={audio.duration || 0}
						className="player__controls__progress__bar"
						onChange={event => updateTime(event)}
					></input>
					<span>
						03:29
					</span>
				</div>

			</div>

			<div className="player__volume">
				<img src="/src/components/Player/img/volume-icon.svg" alt="" />
				<input type="range"
					value={audio.volume * 100}
					max={100}
					className="player__controls__progress__bar"
					onChange={event => audio.volume = (event.target.value / 100)}
				></input>
			</div>
		</div >
	)
}

