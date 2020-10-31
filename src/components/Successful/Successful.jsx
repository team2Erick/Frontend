import React, { useEffect } from 'react';
import './Successful.scss';

const Successful = ({ success, close }) => {
  useEffect(() => {
    if (!success) return;

    const closeSuccessful = () => {
      setTimeout(() => {
        close();
      }, 1500);
    };

    closeSuccessful();

    return () => {
      clearTimeout(closeSuccessful);
    };
  }, [success]);
  if (!success) return null;

  return (
    <div className="successcontainer">
      <div className="success">{success}</div>
    </div>
  );
};

export default Successful;
