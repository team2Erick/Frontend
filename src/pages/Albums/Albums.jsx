import React from 'react';
import './Albums.scss';
import MyDatos from '../../pages/Datos/datos';
import Layout from '../../components/Layout/Layout'
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider'
import Table from '../../components/Table/Table'
import Singer from '../../assets/images/singer.jpg'

const Albums = () => (
  <Layout>
     <section className="main albums">
    <ScrollSlider title="Featured Tracks" items={MyDatos} />
    <div className="album">
      <div className="album__image">
        <h2>Kamelia</h2>
        <div className="album__image__contentimg">
          <img src={Singer}/>
        </div>
      </div>
      <div className="album__table">
        <h4>// Album</h4>
        <h1>Around The World</h1>
        <h4>Akcent Feat. Lidia Buble & DDY Nunes</h4>
        <p>The artists we represent are one of the most successful in Romania and also were a huge breakthrough in the international market, topping radio and sales around the world.</p>
         <Table/>
      </div>
       
    </div>
    
    </section>
  </Layout>
);

export default Albums;
