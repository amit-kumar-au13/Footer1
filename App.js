import React from 'react';
import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faYou } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className = "main-footer footer-body">
      <div className="container">
        <div className = "row">
          {/* column1 */}
          <div className="col">
            <h4>Team CoAcco</h4>
            <p>provide Acomodation choice and help booking until we move you in and service you beyond.</p>
            <ul className = "list-unstyled">
              <li>Organization Nam: CoAcco</li>
              <li>Web Site:</li>
              <li>visit us</li>
              <li>CoAcco's Office</li>
              <li>#18,parshanth Layout,</li>
              <li>Hope Form Signal, Whitefield Baangalore - 56066</li>
            </ul>
          </div>
          {/* column2 */}
          <div className="col">
            <h4>COMPANY</h4>
            <ul className = "list-unstyled">
              <li><a >About Us</a></li>
              <li><a >Contact Us</a></li>
              <li><a >Careers with US</a></li>
              <li><a >Terms & Conditions</a></li>
            </ul>
          </div>
          {/* column3 */}
          <div className="col">
            <h4>CONTACT US</h4>
            <ul className = "list-unstyled">
              <li>Toll Free</li>
              <li>Email:</li>
              <li>CONNECT WITH US</li>
              <li>
                <span className="fa-facebook-square"></span>
                {/* <a href="#">
                  <FontAwesomeIcon icon = {faYoutube} size="2x" />
                </a> */}
              </li>

              
            </ul>
          </div>
        </div>
        <br/>
        <div className = "row">
          <p className = "col-sm">
            &copy;{new Date().getFullYear()} coompanyName
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;