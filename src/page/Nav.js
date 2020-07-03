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
            iconSize="7"
            roundness="7%"
            url="https://some-website.com/my-social-media-url"
            size="30"
          />
          <FaSearch />
          <input type="text" placeholder="Search" />
        </form>
        <nav>
          <ul>
            <li className="center">
              <a href="#">
                <li>
                  <span className="block">
                    <FaHome size="25" color="dimgrey" />
                  </span>
                  <span> Home</span>
                </li>
              </a>
            </li>

            <li className="center">
              <a href="#">
                <span className="block">
                  <FaUsers
                    size="25"
                    color="dimgrey"
                    hover={{ color: "white" }}
                  />
                </span>
                <span> My Network</span>
              </a>
            </li>

            <li className="center">
              <a href="#">
                <li>
                  <span className="block">
                    <FaBriefcase size="25" color="white" />
                  </span>
                  <span>Jobs</span>
                </li>
              </a>
            </li>

            <li className="center">
              <a href="#">
                <li className=" hover">
                  <span className="block">
                    <FaFacebookMessenger size="25" color="white" />
                  </span>
                  <span>Messaging</span>
                </li>
              </a>
            </li>

            <li className="center">
              <a href="#">
                <span className="block">
                  <li>
                    <FaUser size="25" color="dimgrey" />
                  </li>
                </span>
                <span> Me</span>
              </a>
            </li>

            <li>
              <FiGrid size="25" color="dimgrey" />
            </li>
            <p> Try Premium Free for 1 Month</p>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
