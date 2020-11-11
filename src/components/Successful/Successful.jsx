import React, { useEffect } from 'react';
import './Successful.scss';

const Successful = ({ success, close }) => {
  useEffect(() => {
    if (!success) return;

    setTimeout(() => {
      close();
      console.log('ldld');
    }, 1500);
  }, []);

  if (!success) return <></>;

  return <div className="success">{success}</div>;
};

export default Successful;
