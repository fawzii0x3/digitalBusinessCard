import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
const Main = () => {
  return (
    <main>
      <div className="whoAmI">
        <h1>Mohamed Ben chikha</h1>
        <h4>Frontend Developer</h4>
        <a href="#">mohamedbenchikha.com</a>
      </div>
      <div className="links">
        <a className="btn white" href="#"><FontAwesomeIcon icon={faEnvelope} />Email</a>
        <a className="btn blue" href="#"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>
      </div>
      <div className="description">
        <h5>About</h5>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="description">
        <h5>Interests</h5>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </main>
  );
};

export default Main;
