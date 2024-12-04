import React from 'react';
import About from '../home/about/About';
import StayTouch from '../home/stay-touch/StayTouch';
import GetStarted from '../home/get-started/GetStarted';


const AboutCom = () => {
  return (
    <>
      <div className="aboutPage">
        <About />
        <StayTouch />
        <GetStarted />
      </div>
    </>
  )
}

export default AboutCom