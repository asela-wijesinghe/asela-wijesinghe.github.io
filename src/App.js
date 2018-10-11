import React, { Component } from "react";

import "./assets/css/Style.css";
import RevealText from "./components/RevealText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg-img">
          <br />
          <label>
            <input type="checkbox" />
            <span class="menu">
              <span class="hamburger" />
            </span>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
            </ul>
          </label>
          <RevealText />

          <div className="footer">
            <p className="footer-text">Made with</p>
            <div class="lds-heart">
              <div />
            </div>
            <p className="footer-text">by @Asela Wijesinghe</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
