import React, { Component } from 'react';
import BAMS from '../images/BAMS-Home-Page-copy.png'
import OnTour from '../images/OnTour.png'
import SongBook from '../images/SongBook-logo.png'
import WTF from '../images/WTF-Profile-copy.png'


class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-body">
        <div className="portfolio-container">
          <div className="portfolio-container-left">
            <div className="portfolio-piece">
              <p className="portfolio-text-header">BAMS</p>
              <img src={BAMS} className="portfolio-image"></img>
              <p className="portfolio-text-footer">Links</p>
            </div>
            <div className="portfolio-piece">
              <img src={WTF} className="portfolio-image"></img>
            </div>
          </div>
          <div className="quote">“When I need to delegate something, I know can I count on Peter to ask the right questions and come up with a creative solution. You can tell he’s a natural collaborator. At Adeptry, he’s put in the hours on unfamiliar tools and frameworks just to make sure he’s informed and ready.”
          <div className="alex-text">- Alex Perez, Adeptry</div>
          </div>
        </div>
        <div className="portfolio-container-right">
          <div className="portfolio-piece">
            <img src={OnTour} className="portfolio-image"></img>
          </div>
          <div className="portfolio-piece">
            <img src={SongBook} className="portfolio-image"></img>
          </div>
        </div>
        <div className="skill-container">
          <div className="skills">
            <div>
              JavaScript
            </div>
            <div>
              React.js
            </div>
            <div>
              Node.js
            </div>
            <div>
              Ruby on Rails
            </div>
            <div>
              HTML
            </div>
            <div>
              CSS
            </div>
            <div>
              GitHub
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio
