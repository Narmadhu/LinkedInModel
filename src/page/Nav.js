import React from "react";
import {
  FaSearch,
  FaHome,
  FaUsers,
  FaBriefcase,
  FaFacebookMessenger,
  FaBell,
  FaUser,
  //   FaAlignJustify,
} from "react-icons/fa";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { FiGrid } from "react-icons/fi";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <header className="nav-bar">
        <form>
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="0"
            borderStyle="solid"
            icon="linkedin"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(4,95,154,1)"
            iconSize="8"
            roundness="8%"
            url="https://some-website.com/my-social-media-url"
            size="35"
          />

          <input type="text" placeholder="Search" className="search" />
        </form>
        <nav>
          <ul>
            <li>
              <a href="#">
                <span className="block">
                  <FaHome size="30" color="white" />
                </span>
                <span> Home</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="block">
                  <FaUsers size="30" color="white" />
                </span>
                <span> My Network</span>
              </a>
            </li>

            <li>
              <a href="#">
                <li>
                  <span className="block">
                    <FaBriefcase size="30" color="white" />
                  </span>
                  <span>Jobs</span>
                </li>
              </a>
            </li>

            <li>
              <a href="#">
                <li className=" hover">
                  <span className="block message">
                    <FaFacebookMessenger size="30" color="white" />
                  </span>
                  <span>Messaging</span>
                </li>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="block user">
                  <li>
                    <FaUser size="30" color="white" />
                  </li>
                </span>
                <span> Me</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="block">
                  <li>
                    <FiGrid size="30" color="white" />
                  </li>
                </span>
                <span>Work</span>
              </a>
            </li>
            <p style={{ color: "wheat", fontWeight: "light" }}>
              Try Premium Free for 1 Month
            </p>
          </ul>
          <div className="burger">
            <div className="line1"></div>
            <div className="line1"></div>
            <div className="line1"></div>
            <div className="line1"></div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
