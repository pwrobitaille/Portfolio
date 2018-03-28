import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <div className="contact-container">
          <div className="contact-header">Contact
            <span class="sexy_line"></span>
          </div>
          <div className="contact-text">
            If you'd like to chat about my work, collaborating on a project, find out what music I'm listening to, or just say hi, feel free to reach out!
          </div>
          <div className="contact-links">
            <a href="#" class="action-button shadow animate email"><i className="fa fa-envelope fa-lg"/><span>EMAIL</span></a>
            <a href="#" class="action-button shadow animate facebook"><i className="fa fa-facebook-f fa-lg"/>FACEBOOK</a>
            <a href="#" class="action-button shadow animate linkedin"><i className="fa fa-linkedin fa-lg"/>LINKEDIN</a>
            <a href="#" class="action-button shadow animate github"><i className="fa fa-github fa-lg"/>GITHUB</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact
