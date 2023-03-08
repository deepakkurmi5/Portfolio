import "./header.css";
import React from "react";
import { Link } from "react-router-dom";
import { navbarRegistry } from "registry";

export default function Header() {
  return (
    <header>
      <img src="/images/logo.png" alt="logo" loading="lazy" className="logo" />
      <nav className="navbar">
        <ul className="navbar-lists">
          {navbarRegistry.map((router) => {
            return (
              <li key={router.id}>
                <Link to={router.path} className="navbar-link">
                  {router.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
