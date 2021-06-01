import React from 'react';
import { NavLink } from 'react-router-dom';
 import web from '../src/images/bg.png'
 import Common from './Common';

const Home = () =>{
  return (
    <>
        <Common 
          name='Welcome to ' 
          text='you can choose your favourite coffe with meal'
          imgsrc={web} 
          visit='/service'
          btn='Get Started'/>
    </>

  );
};


export default Home;