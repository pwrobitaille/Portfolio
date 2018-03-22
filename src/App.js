import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
// import home-background from './home-background.jpg'
import './App.css';

class HomeSlide extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="menu-container">
          <div className="menu">
            <a class="btn-draw" href="#"><span>About</span></a>
            <a class="btn-draw" href="#"><span>Portfolio</span></a>
            <a class="btn-draw" href="#"><span>Contact</span></a>
          </div>
        </div>

        <div className="title-text-container">
          <div className="title-text w3-container w3-center w3-animate-right">
            Hi I'm Peter - Full Stack Web Developer
          </div>
        </div>
      </div>
    );
  }
}


class SecondSlide extends Component {
  render() {
    return (
      <div>
        Hi I'm Peter - Full Stack Web Developer
      </div>
    );
  }
}



const fullPageOptions = {
    scrollSensitivity: 7,
    touchSensitivity: 7,
    scrollSpeed: 500,
    hideScrollBars: true,
    easing: 'easeInExpo',// : update fullpage-react for pluggable easing and submit pull-request
    enableArrowKeys: true
};

const slides = [
    <Slide> <HomeSlide /> </Slide>,
    <Slide> <SecondSlide /> </Slide>,
    // <Slide> <ThirdSlide /> </Slide>,
    // <Slide> <FourthSlide /> </Slide>,
    // <Slide> <FifthSlide /> </Slide>,
    // <Slide> <SixthSlide /> </Slide>
    ]

    fullPageOptions.slides = slides;
//
class App extends Component {
  render() {
    return (
      <div>
        <Fullpage {...fullPageOptions} />
      </div>
    );
  }
}

export default App;
