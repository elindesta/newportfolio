import React from "react"
import {FaGithub} from 'react-icons/fa';
 
function AboutPage(props) {
  return (
    <div className="container">
    <section>
      <h1>About Me</h1>
      <h2>Under construction...</h2>
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
 
export default AboutPage;