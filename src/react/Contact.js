import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <div className="contact-container">
          <div className="contact-header">Contact</div>
          <div className="contact-text">
            If you'd like to chat about my work, collaborating on a project, what music I'm listening to, or just say hi, feel free to reach out!
          </div>
          <div className="contact-links">
            <div className="email-button">
              <div className="fa fa-envelope"></div>
                <div className="email">Email</div>
              </div>
              <div className="linkedin-button">
                <div className="fa fa-linkedin"></div>
                <div className="linkedin">LinkedIn</div>
              </div>
              <div className="facebook-button">
                <div className="fa fa-facebook-f"></div>
                <div className="facebook">Facebook</div>
              </div>
              <div className="github-button">
                <div className="fa fa-github"></div>
                <div className="github">Github</div>
              </div>
            </div>
          </div>
        {/* <div className="footer-container">
          <div className="link-container">
          </div>
        </div> */}
      </div>
    );
  }
}

export default Contact
