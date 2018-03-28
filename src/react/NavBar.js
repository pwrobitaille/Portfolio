import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'



class NavBar extends Component {

    render() {
      return (
        <div>
        <Menu right>
           <a id="home" className="menu-item" href="/">Home</a>
           <a id="about" className="menu-item" href="/about">About</a>
           <a id="contact" className="menu-item" href="/contact">Contact</a>
         </Menu>

         <div class="bm-burger-button">
           <span>
             <span class="bm-burger-bars"></span>
             <span class="bm-burger-bars"></span>
             <span class="bm-burger-bars"></span>
           </span>
         <button>Open Menu</button>
        </div>
       </div>

        // <div className="navbar">
        //   <a href="#"><span>About</span></a>
        //   <a href="#"><span>Portfolio</span></a>
        //   <a href="#"><span>Contact</span></a>
        // </div>
      )

  }
}

export default NavBar
