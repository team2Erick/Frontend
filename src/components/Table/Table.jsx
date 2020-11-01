import React, { useContext } from 'react';
import './Table.scss';
import Favourite from '../../assets/images/icons/favourite.svg';
import Store from '../../store';

const Table = ({ title, playlist, dense, hideImage }) => {
  const { state, setState } = useContext(Store);
  const setPlaylist = (index) => {
    console.log(state);
    setState('player', {
      playlist: [...playlist],
      title: title,
      index: index,
      play: true,
    });
  };

  if (!playlist || !playlist[0] || !playlist[0].artist.name) return <></>;
  return (
    <div>
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
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
                onClick={() => {
                  setPlaylist(index);
                }}
                key={item.id}
              >
                <td>{index + 1}</td>
                {!dense || !hideImage && (
                  <td>
                    <img src={item.album.cover_small} alt="favourite" />
                  </td>
                )}
                {!dense && (
                  <td>
                    <img src={Favourite} alt="favourite" />
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
