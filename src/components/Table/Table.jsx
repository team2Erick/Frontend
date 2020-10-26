import React from 'react';
import './Table.scss';
import MyDatos from '../../pages/datos';

const Table = ({ title }) => {
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
                                <td>{id+1}</td>
                                <td><img src="/src/assets/images/icons/favourite.svg" alt="favourite" /></td>
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
};

export default Table;
