import React from 'react';

import './MusicItem.scss'

const MusicItem = ({ item, rounded }) => {
    return (
        <div className={
            rounded ? "music-item--rounded" : "music-item"
        }>
            <div className={
                rounded ? "music-item__image--rounded" : "music-item__image"
            } style={{ background: `url('${item.image}')`, backgroundSize: "cover" }}></div>
            <div className="music-item__title">{item.title}</div>
            <div className="music-item__subtitle">{item.artist}</div>
        </div>
    )
}

export default MusicItem