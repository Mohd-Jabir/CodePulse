import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Visualizers Section */}
        <div className="footer-column">
          <h4 className="footer-heading">Visualizers</h4>
          <ul className="footer-list">
            <li>
              <Link to="/Visualizer/sorting">Sorting Visualizer</Link>
            </li>
            <li>
              <Link to="/Visualizer/scheduling">CPU Scheduling Visualizer</Link>
            </li>
            <li>
              <Link to="/Visualizer/ds">DS Visualizer</Link>
            </li>
          </ul>
        </div>

        {/* Data Structure Visualizers Section */}
        <div className="footer-column">
          <h4 className="footer-heading">Data Structure Visualizers</h4>
          <ul className="footer-list">
            <li>
              <Link to="/Visualizer/ds/Array">Array</Link>
            </li>
            <li>
              <Link to="/Visualizer/ds/LinkedList">Linked List</Link>
            </li>
            <li>
              <Link to="/Visualizer/ds/Stack">Stack</Link>
            </li>
            <li>
              <Link to="/Visualizer/ds/Queue">Queue</Link>
            </li>
            <li>
              <Link to="/Visualizer/ds/Tree">Tree</Link>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="footer-column">
          <h4 className="footer-heading">Connect</h4>
          <ul className="footer-list">
            <li>
              <a
                href="https://github.com/Mohd-Jabir"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohd-jabir-515ba7263"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/_mohd_jabir__/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:ma7157229@gmail.com">Email</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Tagline */}
      <div className="footer-tagline">
        <p>Empowering learners to see algorithms in action</p>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © 2025 <strong>CodePulse</strong> — Designed & Developed by{" "}
          <strong>Mohd Jabir</strong>
        </p>
        <p className="footer-meta">Built with React, GSAP</p>
      </div>
    </footer>
  );
};

export default Footer;
