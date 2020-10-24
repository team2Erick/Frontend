import React, { useState } from "react";
import './Player.scss';


export default ({ url }) => {

	var audio = new Audio(url);

	const [playing, updatePlaying] = useState(false)

	const playToggle = () => {

		console.log("before", playing);

		updatePlaying(!playing)

		console.log("after", playing);

		if (playing) {
			audio.pause();
		} else {
			audio.play();
		}

	}

	// audio.addEventListener("ended", playToggle)

	return (
		<div className="player">
			<div className="player__song">
				<div class="player__song__container">
					<img src="https://homepages.cae.wisc.edu/~ece533/images/pool.png" />
				</div>
				<div className="player__song__content">
					<strong>Titulos Canción</strong>
					<p>Autores de la canción</p>
				</div>
			</div>
			<div class="player__player">
				<div className="player__player__item">
					<img src="/src/components/components/Player/img/continue-icon.svg" />
				</div>
				<div className="player__player__item">
					<img src="/src/components/components/Player/img/shuffle-icon.svg" />
				</div>
				<div className="player__player__item">
					<img src="/src/components/components/Player/img/back-icon.svg" />
				</div>
				<div className="player__player__item">
					<div onClick={playToggle} className="player__player__item-play">
						{
							playing ? <img src="/src/components/components/Player/img/pause-icon.svg" /> : <img src="/src/components/components/Player/img/play-icon.svg" />
						}
					</div>
				</div>
				<div className="player__player__item">
					<img src="/src/components/components/Player/img/next-icon.svg" />
				</div>
				<div className="player__player__item">
					03:29
				</div>
				<div className="player__player__item">
					<div className="player__player__item__progress"></div>
				</div>
				<div className="player__player__item">
					03:29
				</div>
				<div className="player__player__item">
					<img src="/src/components/components/Player/img/volume-icon.svg" />
				</div>

			</div>
		</div>
	)
}

