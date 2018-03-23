import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
// import home-background from './home-background.jpg'
import './App.css';

class NavBar extends Component {
    render() {
      return (
        <div className="navbar">
          <a href="#"><span>About</span></a>
          <a href="#"><span>Portfolio</span></a>
          <a href="#"><span>Contact</span></a>
        </div>
      )

  }
}

class HomeSlide extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="menu-container">
          <div className="menu">
            <a className="btn-draw" href="#"><span>About</span></a>
            <a className="btn-draw" href="#"><span>Portfolio</span></a>
            <a className="btn-draw" href="#"><span>Contact</span></a>
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


class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="about-me-container">
          <div className="about-text-container">
            <div className="name-text">Hi I'm Peter! Have These drop down and swing</div>
            <div className="second-row-text">I am a full stack web developer living in beautiful Denver, Colorado. </div>
            <div className="third-row-text">I enjoy turning ideas into reality in the most creative way. When I'm not coding, you'll find me in the mountains hiking or skiing, excercising, or at a concert.</div>
          </div>
          <div className="headshot">
            slideshow of images
          </div>
        </div>
      </div>
    );
  }
}

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className="portfolio-piece">
          portfolio
        </div>
        <div className="portfolio-piece">
          portfolio
        </div>
        <div className="portfolio-piece">
          portfolio
        </div>
        <div className="portfolio-piece">
          portfolio
        </div>
      </div>
    );
  }
}



const fullPageOptions = {
    scrollSensitivity: 7,
    touchSensitivity: 7,
    scrollSpeed: 500,
    hideScrollBars: true,
    easing: 'easeInExpo',
    enableArrowKeys: true
};

const slides = [
    <Slide> <HomeSlide /> </Slide>,
    <Slide> <AboutMe /> </Slide>,
    <Slide> <Portfolio /> </Slide>,
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
        <NavBar />
        <Fullpage {...fullPageOptions} />
      </div>
    );
  }
}

export default App;
