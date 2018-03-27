import React, { Component } from 'react';


class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-body">
        <div className="portfolio-container-left">
          <div className="portfolio-piece">
            portfolio
          </div>
          <div className="portfolio-piece">
            portfolio
          </div>
        </div>
        <div className="portfolio-container-right">
          <div className="portfolio-piece">
            portfolio
          </div>
          <div className="portfolio-piece">
            portfolio
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
