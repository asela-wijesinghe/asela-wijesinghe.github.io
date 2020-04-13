import React, { Component } from "react";

import Loader from "./components/Loader";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { HomePage } from "./pages/home.jsx";
import { WorkPage } from "./pages/work.jsx";
import { ContactPage } from "./pages/contact.jsx";
import { AboutPage } from "./pages/about.jsx";

import "./assets/css/Style.css";
import "./assets/css/animations.css";
import "./assets/css/navigation.css";
import "./assets/css/models.css";
import "./assets/css/work.css";
import "./assets/css/contact.css";
import "./assets/css/about.css";

class App extends Component {
  constructor() {
    super();
    this.state = { hasLoaded: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hasLoaded: true });
    }, 500);
  }

  render() {
    const { hasLoaded } = this.state;
    if (!hasLoaded) {
      return <Loader />;
    } else {
      return (
        <Router className="App" basename={process.env.PUBLIC_URL}>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/work" component={WorkPage} />

          </div>
        </Router>
      );
    }
  }
}

export default App;
