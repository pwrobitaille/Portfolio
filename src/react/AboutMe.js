import React, { Component } from 'react';
import Instafeed from 'react-instafeed';
import headshot from '../images/headshot.jpg'




class AboutMe extends Component {

  render() {

    const instafeedTarget = 'instafeed';

    return (
      <div className="about-me-body">
        <div className="slant-top-right"></div>
        <div className="about-me-container">
          <div className="about-text-container">
            <div className="name-text">about me</div>
            <div className="second-row-text">I am a full stack web developer living in beautiful Denver, Colorado. </div>
            <div className="third-row-text">I enjoy turning ideas into reality in the most creative way. When I'm not coding, you'll find me in the mountains hiking or skiing, or at a concert.</div>
          </div>
          <div className="headshot">
            <img src={headshot} className="headshot-img"></img>
          </div>
        </div>
        <hr />
        <div className="instafeed-container">
          <div id={instafeedTarget} className="instafeed">
             <Instafeed
               limit='5'
               ref='instafeed'
               resolution='standard_resolution'
               sortBy='most-recent'
               target={instafeedTarget}
               template='<a href="{{link}}" target="_blank"><img class="insta-feed" src="{{image}}" />'
               userId='364797272'
               clientId='a58ddc7edcc44c4c8d55a40d8c56badd'
               accessToken='364797272.1677ed0.be358c525fd7460e976fc6fedefd734b'
             />
           </div>
         </div>
      </div>
    );
  }
}

export default AboutMe
