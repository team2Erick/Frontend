import React from 'react';
import '../assets/styles/components/ArtistPlayList.scss';

const BackArtist = 'src/assets/images/ArtistPlayList/BackArtist.svg';
const imgProfile =
  'https://avatars3.githubusercontent.com/u/36718796?s=460&u=7367200d79d0e0263f27e8d21340dad5113cfadb&v=4';

const ArtistPlayList = () => (
  <div className="artist-item">
    <div className="container">
      <img className="artist-item__img" src={BackArtist} alt="" />
      <div className="artist-item__details">
        <div className="artist-profile">
          <img
            className="artist-profile__image"
            src={imgProfile}
            alt="perfil"
          />
        </div>
        <div className="artist-name__album">
          <div>ARCENT</div>
        </div>
        <div className="artist-name__followers">
          <div>
            Followers
            <br />
            50,256
          </div>
        </div>
        <div className="artist-name__listener">
          <div>
            Listener
            <br />
            2.4m
          </div>
        </div>
        <div className="artist-name__songs">
          <div>
            Songs
            <br />
            78
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ArtistPlayList;
