import React, { useContext, useState, useEffect } from 'react';

import Successful from '../../components/Successful/Successful';
import './Table.scss';
import PlayIcon from '../Layout/components/Player/img/play-icon.svg';

import AddToPlaylist from "../AddToPlaylist/AddToPlaylist"

import Store from '../../store';
import api from '../../services/api';

import Heart from "../../assets/images/icons/heart-solid.svg"

const Table = ({ title, playlist, dense, hideImage }) => {
  const { state, setState } = useContext(Store);
  // const { FavouriteItem, setFavorite } = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const setPlaylist = (index) => {
    console.log(state);
    setState('player', {
      playlist: [...playlist],
      title: title,
      index: index,
      play: true,
    });
  };

  const handleFavorite = async (value) => {
    const FavouriteItem = await api.post(
      'usermusic/add-favorites/' + state.user.id,
      { favorites: value }
    );
    setMessage(FavouriteItem.data.data.System);
    setShowSuccess(true);
  };

  if (!playlist || !playlist[0] || !playlist[0].artist.name) return <></>;
  return (
    <div>
      {showSuccess && (
        <Successful
          success={message}
          close={() => {
            setShowSuccess(false);
          }}
        />
      )}
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            {!dense && <th></th>}
            <th></th>
            {!dense || (!hideImage && <th></th>)}
            <th>Song</th>
            {!dense && <th>Artist</th>}
            {!dense && <th>Time</th>}
          </tr>
        </thead>
        <tbody>
          {playlist.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <button
                    className="favoritesbutton"
                    onClick={() => {
                      setPlaylist(index);
                    }}
                  >
                    <img src={PlayIcon} />
                  </button>
                </td>
                {(!dense || state.user.id) && (
                  <td>
                    <button
                      className="favoritesbutton"
                      onClick={() => {
                        handleFavorite(item.id);
                      }}
                    >
                      <img src={Heart} alt="like" />
                    </button>
                  </td>
                )}
                <td>
                  <button
                    className="favoritesbutton"

                  >
                    <AddToPlaylist item={item} />
                  </button>

                </td>
                {!dense ||
                  (!hideImage && (
                    <td>
                      <img src={item.album.cover_small} alt="favourite" />
                    </td>
                  ))}

                <td>{item.title}</td>
                {!dense && <td>{item.artist.name}</td>}
                {!dense && <td>{item.duration}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
