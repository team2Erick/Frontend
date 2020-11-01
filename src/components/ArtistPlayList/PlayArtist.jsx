import React from 'react';
import './PlayArtist.scss';
import Table from '../Table/Table';

const PlayArtist = ({ title, playlist }) => {
  return (
    <div className="hide-scroll">
      <div className="viewport">
        <Table playlist={playlist} dense={true} />
      </div>
    </div>
  );
};

export default PlayArtist;
