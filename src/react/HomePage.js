import React, { Component } from 'react';


class HomePage extends Component {

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
          <div className="title-text-grid">
            <div className="title-text-left">
              Hi I'm Peter
            </div>
            <div className="title-text-right">
              Full Stack Web Developer
            </div>
          </div>
        </div>
        <div className="slant">
          {/* <div className="about">About</div> */}
        </div>
          {/* <div className="about-link-container">
            <div className="about-link">
            </div>
          </div> */}
      </div>
    );
  }
}

export default HomePage
