import React, {useContext} from 'react';
import './Table.scss';
import MyDatos from '../../pages/Datos/datos';
import Favourite from '../../assets/images/icons/favourite.svg';
import Store from '../../store';

const Table = ({ title, playlist }) => {
  const { state, setState} = useContext(Store);
  console.log(state);

  const setPlaylist = (index) => {
    setState({ playlist: MyDatos, playlistTitle: title, indexSong: index });
  };

  if (!playlist) return (
    <div className="musictable">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
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
          {MyDatos.map((list, index) => {
            return (
              <tr onClick={() => { setPlaylist(index) }} key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={Favourite} alt="favourite" />
                </td>
                <td>{list.title}</td>
                <td>{list.artist}</td>
                <td>Daily Plays</td>
                <td>{list.length}</td>
                <td>Option</td>
                <td></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
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
          {MyDatos.map((list, id) => {
            return (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>
                  <img src={Favourite} alt="favourite" />
                </td>
                <td>{list.title}</td>
                <td>{list.artist}</td>
                <td>Daily Plays</td>
                <td>{list.length}</td>
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
