import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faGithub} from '@fortawesome/free-brands-svg-icons'

const Footer =()=>{return(
<footer>
    <a href="https://www.facebook.com/profile.php?id=100033523902132" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
    <a href="https://www.instagram.com/mbenchikha" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
    <a href="https://github.com/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
</footer>
)};




export default Footer;