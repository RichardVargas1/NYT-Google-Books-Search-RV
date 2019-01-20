import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <li className="nav-item">
                <a className="nav-link" href="/">Search for Articles</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/saved">Saved Articles</a>
            </li>
    </nav>
  );
}

export default Nav;
