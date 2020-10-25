import React, { useEffect } from 'react';
import './Alert.scss';

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
    }
  }, [success]);
  if (!success) return null;

  return <div className="success">{success}</div>;
};

export default Successful;
