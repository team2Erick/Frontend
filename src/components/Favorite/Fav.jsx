import React from 'react';

const Fav = ({ id }) => {
  const handleClick = () => {
    alert(id);
  };
  return (
    <button type="button" onClick={handleClick}>
      <span aria-label="Fav-Gif" role="img">
        ❤️
      </span>
    </button>
  );
};

export default Fav;
