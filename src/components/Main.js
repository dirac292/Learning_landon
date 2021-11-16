import React from 'react';
import Hotelinfo from './Hotelinfo';
import Welcome from './Welcome';


const Main = () =>{
    return(
        <main id="wrapper">
          <Welcome />
          <Hotelinfo />
          </main>
    );
}

export default Main;