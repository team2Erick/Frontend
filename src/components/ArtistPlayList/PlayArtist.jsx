import React from 'react';
import './PlayArtist.scss';
import Tabla from '../Table/Table';

const PlayArtist = () => {
  return (
    <div className="hide-scroll">
      <div className="viewport">
        <Tabla title="Lista de Canciones" />
      </div>
    </div>
  );
};

export default PlayArtist;
