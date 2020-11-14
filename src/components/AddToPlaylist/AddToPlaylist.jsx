import React, { useContext, useState, useEffect } from 'react';
import Favourite from '../../assets/images/icons/favourite.svg';
import Modal from "../Modal/Modal"
import Success from "../Successful/Successful"

import Store from "../../store"

export default ({ item }) => {

  const [show, setShow] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const { state, setState } = useContext(Store);



  const openModal = () => {

    setShow(true)

  }

  const addToPlaylist = (playlistSelected) => {

    var playlists = localStorage.getItem("cday-playlist")
    if (playlists) {
      let newPlaylists = JSON.parse(playlists);
      if (newPlaylists[playlistSelected._id] && newPlaylists[playlistSelected._id].length) {
        newPlaylists[playlistSelected._id].push(item)
      } else {
        newPlaylists[playlistSelected._id] = [item]
      }
      localStorage.setItem("cday-playlist", JSON.stringify(newPlaylists))
    } else {
      let newPlaylists = {}
      newPlaylists[playlistSelected._id] = [item]
      localStorage.setItem("cday-playlist", JSON.stringify(newPlaylists))
    }

    setShowSuccess(true)
    setShow(false)

  }

  return (
    <>
      {showSuccess && <Success success="Canción añadida correctamente" close={() => { setShowSuccess(false) }} />}
      <Modal show={show} close={() => setShow(false)}>
        <div>
          {state.playlists.playlist.map((playlist) => {
            return <div
              key={playlist._id}
              onClick={() => { addToPlaylist(playlist) }}
              style={{ padding: "10px" }}>
              {playlist.name}
            </div>
          })}
        </div>

      </Modal>

      <img onClick={openModal} src={Favourite} />
    </>)
}