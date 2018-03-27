import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import NavBar from './NavBar'
import HomePage from './HomePage'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import '../style.css';

// class NavBar extends Component {
//     render() {
//       return (
//         <div className="navbar">
//           <a href="#"><span>About</span></a>
//           <a href="#"><span>Portfolio</span></a>
//           <a href="#"><span>Contact</span></a>
//         </div>
//       )
//
//   }
// }
//
// class HomeSlide extends Component {
//
//   render() {
//     return (
//       <div className="home-page">
//         <div className="menu-container">
//           <div className="menu">
//             <a className="btn-draw" href="#"><span>About</span></a>
//             <a className="btn-draw" href="#"><span>Portfolio</span></a>
//             <a className="btn-draw" href="#"><span>Contact</span></a>
//           </div>
//         </div>
//         <div className="title-text-container">
//           <div className="title-text-grid">
//             <div className="title-text-left">
//               Hi I'm Peter
//             </div>
//             <div className="title-text-right">
//               Full Stack Web Developer
//             </div>
//           </div>
//         </div>
//         <div className="slant">About
//           {/* <div className="about">About</div> */}
//         </div>
//           {/* <div className="about-link-container">
//             <div className="about-link">
//             </div>
//           </div> */}
//       </div>
//     );
//   }
// }

//
// class AboutMe extends Component {
//
//   render() {
//     return (
//       <div className="about-me-body">
//         <div className="slant-top-right"></div>
//         <div className="about-me-container">
//           <div className="about-text-container">
//             <div className="name-text">Hi I'm Peter! Have These drop down and swing</div>
//             <div className="second-row-text">I am a full stack web developer living in beautiful Denver, Colorado. </div>
//             <div className="third-row-text">I enjoy turning ideas into reality in the most creative way. When I'm not coding, you'll find me in the mountains hiking or skiing, excercising, or at a concert.</div>
//           </div>
//           <div className="headshot">
//             slideshow of images
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


// class Portfolio extends Component {
//   render() {
//     return (
//       <div className="portfolio-body">
//         <div className="portfolio-container-left">
//           <div className="portfolio-piece">
//             portfolio
//           </div>
//           <div className="portfolio-piece">
//             portfolio
//           </div>
//         </div>
//         <div className="portfolio-container-right">
//           <div className="portfolio-piece">
//             portfolio
//           </div>
//           <div className="portfolio-piece">
//             portfolio
//           </div>
//         </div>
//         <div className="skill-container">
//           <div className="skills">
//             <div>
//               JavaScript
//             </div>
//             <div>
//               React.js
//             </div>
//             <div>
//               Node.js
//             </div>
//             <div>
//               Ruby on Rails
//             </div>
//             <div>
//               HTML
//             </div>
//             <div>
//               CSS
//             </div>
//             <div>
//               GitHub
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// class Contact extends Component {
//   render() {
//     return (
//       <div>
//       Contact
//       </div>
//     );
//   }
// }


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
        {/* <NavBar /> */}
        <Fullpage {...fullPageOptions} />
      </div>
    );
  }
}

export default App;
