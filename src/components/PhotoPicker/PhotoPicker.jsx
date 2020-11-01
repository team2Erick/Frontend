import React from 'react';

export default ({ children }) => {
  return (
    <>
      <label>
        <div class="activator"></div>
      </label>
      <input type="file" />
    </>
  );
};
