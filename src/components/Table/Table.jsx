import React, { useContext, useState, useEffect } from 'react';
import './Table.scss';
import Favourite from '../../assets/images/icons/favourite.svg';
import PlayIcon from '../Layout/components/Player/img/play-icon.svg';
import Store from '../../store';
import api from "../../services/api"

const Table = ({ title, playlist, dense, hideImage }) => {
  const { state, setState } = useContext(Store);

  const { FavouriteItem, setFavorite } = useState([])

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
    const FavouriteItem = await api.post('music/favorite/' + state.user.id, { name: value, })

    console.log(FavouriteItem);
  };

  const hadleFavoriteSubmit = async (e) => {
    e.preventDefault();

    const favorites = await handleFavorite(FavouriteItem);
    setState('favorites', {
      FavoriteItem,
      favorites
    });

  }

  if (!playlist || !playlist[0] || !playlist[0].artist.name) return <></>;
  return (
    <div>
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            {!dense && <th></th>}
            {!dense || !hideImage && <th></th>}
            <th>Song</th>
            {!dense && <th>Artist</th>}
            {!dense && <th>Time</th>}
          </tr>
        </thead>
        <tbody>
          {playlist.map((item, index) => {
            return (
              <tr

                key={item.id}
              >
                <td>{index + 1}</td>
                <td>
                  <button className="favoritesbutton"
                    onClick={() => {
                      setPlaylist(index);
                    }}><img src={PlayIcon} />
                  </button>
                </td>
                {!dense && (
                  <td>
                    <button className="favoritesbutton"
                      value={item.id}
                      onChange={(e) => {
                        handleFavorite(e.target.value);
                      }}><img src={Favourite} />
                    </button>

                  </td>
                )}
                {!dense || !hideImage && (
                  <td>
                    <img src={item.album.cover_small} alt="favourite" />
                  </td>
                )}

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
