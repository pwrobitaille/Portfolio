import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import NavBar from './NavBar'
import HomePage from './HomePage'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import '../style.css';

const fullPageOptions = {
    scrollSensitivity: 7,
    touchSensitivity: 7,
    scrollSpeed: 500,
    hideScrollBars: true,
    easing: 'easeInExpo',
    enableArrowKeys: true
};

const slides = [
    <Slide> <HomePage /> </Slide>,
    <Slide> <AboutMe /> </Slide>,
    <Slide> <Portfolio /> </Slide>,
    <Slide> <Contact /> </Slide>,
    ]

    fullPageOptions.slides = slides;

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
