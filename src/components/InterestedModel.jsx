import React from "react";
import Button from "../components/Button";
import react from "../assets/images/tech_logos/react.png";
import firebase from "../assets/images/tech_logos/firebase.png";
import redux from "../assets/images/tech_logos/redux.png";
import sass from "../assets/images/tech_logos/sass.png";
import java from "../assets/images/tech_logos/java.png";
import rn from "../assets/images/tech_logos/rn.png";
import aws from "../assets/images/tech_logos/aws.png";
import spring from "../assets/images/tech_logos/spring.png";
import hibernate from "../assets/images/tech_logos/hibernate.png";
import node from "../assets/images/tech_logos/node.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class ArModal extends React.Component {
  render() {
    const { toggleClose } = this.props;
    return (
      <div className="big_model_container">
        <div>
          <p className="black-normal">
            You seems interested, why dont you check what i do?
          </p>
          <br />
        </div>

        <div className="model_container">
          <div className="ar-info">
            <h3>Web Developing</h3>
            <p className="pricing-small">
              $ <span className="pricing">20</span> /hour
            </p>
            <p className="black-small">
              From simple web designing to complex single page client side
              applications for business purposes using latest technologies
              available
            </p>
            <div>
              {" "}
              <img src={react} className="logo-square-image" />{" "}
              <img src={sass} className="logo-square-image" />{" "}
              <img src={redux} className="logo-square-image" />{" "}
              <img src={firebase} className="logo-square-image" />{" "}
            </div>
          </div>
          {/* <div className="ar-info">
            <h3>App Developing</h3>
            <p className="pricing-small">
              $ <span className="pricing">25</span> /hour
            </p>
            <p className="black-small">
              Both Android/IOS applications with proper UX solutions generated
              from javascript enviorenment and converted to proper native apps
              deployed on app stores
            </p>
            <img src={rn} className="logo-square-image-extended" />
          </div>
          <div className="ar-info">
            <h3>Software Developing</h3>
            <p className="pricing-small">
              $ <span className="pricing">40</span> /hour
            </p>
            <p className="black-small">
              Planned from the scratch for customized business
              software,enterprise solutions,SaaS and e-Commerce applications
              using latest design patterns
            </p>
            <div>
              {" "}
              <img src={java} className="logo-square-image" />{" "}
              <img src={aws} className="logo-square-image" />{" "}
              <img src={hibernate} className="logo-square-image" />{" "}
              <img src={spring} className="logo-square-image" />{" "}
            </div>
          </div> */}
        </div>
        <div>
          <br /> <br />
          <p className="black-normal">
            or you can check{" "}
            <Link className="links" to={"/work"}>
              my work
            </Link>{" "}
            or you can find out more{" "}
            <Link className="links" to={"/about"}>
              about me
            </Link>
            .Here you can <span className="links">contact me</span> unless you
            don't want to
          </p>
          <Button label="Go Back" onClick={toggleClose} />
        </div>
      </div>
    );
  }
}
