import React from 'react';
import './Table.scss';

const Table = () => {
    return (
        <div>
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
                    <tr>
                        <td>1</td>
                        <td></td>
                        <td>Song Name</td>
                        <td>Artist</td>
                        <td>Daily Plays</td>
                        <td>Time</td>
                        <td>Option</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td></td>
                        <td>Song Name</td>
                        <td>Artist</td>
                        <td>Daily Plays</td>
                        <td>Time</td>
                        <td>Option</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table