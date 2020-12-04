import React from "react";
import '../App.css';
import {FiGithub, FiMail} from 'react-icons/fi';
import {FaGithub} from 'react-icons/fa';




 
function ContactPage(props) {
  return (
<div className="container">
<section className="contact">
<a className="contactLink" target="_blank" href="https://github.com/elindesta"><FiGithub />&nbsp;Github</a>
<a className="contactLink" href="mailto:elin@elindesta.com"><FiMail />&nbsp;E-mail</a>
</section>

<footer>
<p>&copy; Elin Desta 2020</p>
          <span>
              <a target="_blank" href="https://github.com/elindesta">GitHub &nbsp;<FaGithub /></a>
          </span>
</footer>
</div>
    
  )
}
 
export default ContactPage;
