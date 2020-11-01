import React from 'react';
import './PlayArtist.scss';
import Table from '../Table/Table';

const PlayArtist = () => {
  return (
    <div className="hide-scroll">
      <div className="viewport">
        <Table title="Lista de Canciones" />
      </div>
    </div>
  );
};

export default PlayArtist;
