import React, { useEffect } from 'react';
import './Successful.scss';

const Successful = ({ success, close, timeout }) => {
  useEffect(() => {
    if (!success) return;

    setTimeout(() => {
      close();
      console.log('ldld');
    }, timeout || 2000);
  }, []);

  if (!success) return <></>;

  return <div className="success">{success}</div>;
};

export default Successful;
