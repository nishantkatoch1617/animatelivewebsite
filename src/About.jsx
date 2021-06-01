import React from 'react';
 import web from '../src/images/bg-1.png'
 import Common from './Common';

const About = () =>{
  return (
    <>
    <Common 
    name='This cafe is largest in our State' 
    text='Our Services are available from 9am-9pm in week.
    Making website for our state cafe  to delevier good service.
    we are deliver online through zomatto and home deleivery
    by our agent. The unmistakable full-flavour of NESCAFÉ Classic 
    is what makes our signature coffee so loved all over 
    the world. .'
    imgsrc={web} 
    visit='/contact'
    btn='Contact Now'/>
        </>

  );
};


export default About;