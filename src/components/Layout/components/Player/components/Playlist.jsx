import React, { useContext } from 'react';
import './Playlist';

import Modal from '../../../../Modal/Modal';
import Table from '../../../../Table/Table';
import Store from '../../../../../store';

export default ({ show, close }) => {
  const { state, setState } = useContext(Store);
  return (
    <>
      <Modal show={show} close={close}>
        <Table title={state.playlistTitle} playlist={state.player.playlist} />
      </Modal>
    </>
  );
};
