import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <div className="contact-container">
          <div className="contact-header">Contact
            <span className="sexy_line"></span>
          </div>
          <div className="contact-text">
            If you'd like to chat about my work, collaborating on a project, find out what music I'm listening to, or just say hi, <span className="underline-text">feel free to reach out!</span>
          </div>
          <div className="contact-links">
            <a href="mailto:pwrobitaille@gmail.com" className="action-button shadow animate email"><i className="fa fa-envelope fa-lg"/><span>EMAIL</span></a>
            <a href="https://www.facebook.com/peter.robitaille" target="_blank" className="action-button shadow animate facebook"><i className="fa fa-facebook-f fa-lg"/>FACEBOOK</a>
            <a href="https://www.linkedin.com/in/pwrobitaille" target="_blank" className="action-button shadow animate linkedin"><i className="fa fa-linkedin fa-lg"/>LINKEDIN</a>
            <a href="https://github.com/pwrobitaille" target="_blank" className="action-button shadow animate github"><i className="fa fa-github fa-lg"/>GITHUB</a>
          </div>
        </div>
        <div className="slant"></div>
      </div>
    );
  }
}

export default Contact
