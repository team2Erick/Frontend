import React from 'react';
import Layout from '../../components/Layout/Layout';
import smolly404 from '../../assets/images/smolly404.svg';
import elipse from '../../assets/images/Ellipse 4.svg';
import './NotFound.scss';

const NotFound = () => (
  <>
    <Layout>
      <div className="content_404">
        {/* <h1>ERROR 404</h1> */}
        <img src={elipse} alt="" />
        <div className="content_404-image">
          <h1>ERROR 404</h1>
          <img src={smolly404} alt="" />
        </div>
        <h3>SORRY, THIS PAGE DOESN´T EXISTS</h3>
      </div>
    </Layout>
  </>
);

export default NotFound;
