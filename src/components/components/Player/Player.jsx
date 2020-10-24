import React from "react";
import './Player.scss';

export default () => {
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

            </div>
        </div>
    )
}

