import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import HomePage from './HomePage'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: {
        Fullpage: 0
      }
    }
  }

    render() {

      return (
        <Router>
        <div>
          <div className="bm-burger-button">
            <span>
              <span className="bm-burger-bars"></span>
              <span className="bm-burger-bars"></span>
              <span className="bm-burger-bars"></span>
            </span>
            <button>Open Menu</button>
          </div>
        <Menu>
           <div id="home"><Link to="/" className="menu-item">Home</Link></div>
           <div id="about"><Link to="/about" className="menu-item">About</Link></div>
           <div id="portfolio"><Link to="/portfolio" className="menu-item">Portfolio</Link></div>
           <div id="contact"><Link to="/contact" className="menu-item">Contact</Link></div>

           <div className="icon-container">
             <a href="https://www.linkedin.com/in/pwrobitaille/" target="_blank"><i className="fa fa-linkedin fa-lg"></i></a>
             <a href="https://github.com/pwrobitaille" target="_blank"><i className="fa fa-github fa-lg"></i></a>
             <a href="mailto:pwrobitaille@gmail.com" target="_blank"><i className="fa fa-envelope fa-lg"></i></a>
           </div>
         </Menu>
         <Route exact path="/" component={HomePage}/>
         <Route path="/about" component={AboutMe}/>
         <Route path="/portfolio" component={Portfolio}/>
         <Route path="/contact" component={Contact}/>
       </div>
     </Router>
      )

  }
}

export default NavBar
