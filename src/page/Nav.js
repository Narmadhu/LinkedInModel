import React from "react";
import {
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
            roundness="8%"
            url="https://some-website.com/my-social-media-url"
            size="35"
          />

          <input type="text" placeholder="Search" className="search" />
        </form>
        <nav>
          <ul>
            <li>
              <button>
                <span className="block">
                  <FaHome size="30" color="white" />
                </span>
                <span> Home</span>
              </button>
            </li>

            <li>
              <button>
                <span className="block">
                  <FaUsers size="30" color="white" />
                </span>
                <span> My Network</span>
              </button>
            </li>

            <li>
              <button>
                <span className="block">
                  <FaBriefcase size="30" color="white" />
                </span>
                <span>Jobs</span>
              </button>
            </li>

            <li>
              <button>
                <span className="block message">
                  <FaFacebookMessenger size="30" color="white" />
                </span>
                <span>Messaging</span>
              </button>
            </li>
            <li>
              <button>
                <span className="block">
                  <FaBell size="30" color="white" />
                </span>
                <span>Notification</span>
              </button>
            </li>

            <li>
              <button>
                <span className="block">
                  <FaUser size="30" color="white" />
                </span>
                <span> Me</span>
              </button>
            </li>

            <li>
              <button>
                <span className="block">
                  <FiGrid size="30" color="white" />
                </span>
                <span>Work</span>
              </button>
            </li>
            <p style={{ color: "wheat", fontWeight: "light" }}>
              Try Premium Free for 1 Month
            </p>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
