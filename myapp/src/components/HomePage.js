import React from "react";
import {FaGithub} from 'react-icons/fa';
import Weather from './Weather';


 
function HomePage(props) {
  return (
    <div className="container">

        <section>
            <h1>Hello, my name is Elin Desta</h1>
            <p>I'm a Front end-student from <span className="St">Stockholm,</span> <span className="Sw">Sweden.</span></p>

              <div className="weatherContainer">
                <h3>The weather in Stockholm:</h3>
                <Weather />
              </div>
            
        
        </section>
      
      <footer>
          <p>&copy; Elin Desta 2020</p>
          <span>
              <a target="_blank" href="https://github.com/elindesta">Visit my GitHub &nbsp;<FaGithub /></a>
          </span>
      </footer>
    </div>
  )
}
 
export default HomePage;