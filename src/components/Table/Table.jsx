import React, { useContext } from 'react';
import './Table.scss';
import Favourite from '../../assets/images/icons/favourite.svg';
import Store from '../../store';

const Table = ({ title, playlist }) => {
  const { state, setState } = useContext(Store);
  console.log(state);

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
            <th></th>
            <th></th>
            <th>Song</th>
            <th>Artist</th>
            <th>Daily Plays</th>
            <th>Time</th>
            <th>Option</th>
            <th></th>
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
                <td>
                  <img src={item.album.cover_small} alt="favourite" />
                </td>
                <td>
                  <img src={Favourite} alt="favourite" />
                </td>
                <td>{item.title}</td>
                <td>{item.artist.name}</td>
                <td>Daily Plays</td>
                <td>{item.duration}</td>
                <td>Option</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
