import React, { Component } from "react";

import Loader from "./components/Loader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CommentsSection } from "./pages/blog.jsx";
import { HomePage } from "./pages/home.jsx";

import "./assets/css/Style.css";
import "./assets/css/animations.css";
import "./assets/css/navigation.css";
import "./assets/css/models.css";

class App extends Component {
  constructor() {
    super();
    this.state = { hasLoaded: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hasLoaded: true });
    }, 1000);
  }

  render() {
    const { hasLoaded } = this.state;
    if (!hasLoaded) {
      return <Loader />;
    } else {
      return (
        <Router className="App">
          <div>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/blog" component={CommentsSection} />
          </div>
        </Router>
      );
    }
  }
}

export default App;
