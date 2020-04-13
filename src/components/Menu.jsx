import React from "react";
import { Link } from "react-router-dom";

export const MenuComponent = ()=> {
    return (
        <label>
        <input type="checkbox" />
        <span className="menu">
          <span className="hamburger" />
        </span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Publications</Link>
          </li>
          <li>
            <Link to="/contact">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li>
            <Link href="#">Resume</Link>
          </li> */}
        </ul>
      </label>
    )
}