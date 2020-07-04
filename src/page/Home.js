import React from "react";
import "./Home.css";
import { SocialMediaIconsReact } from "social-media-icons-react";
import {
  FiThumbsUp,
  FiHeart,
  FiMessageSquare,
  FiShare,
  FiSend,
} from "react-icons/fi";

function Home() {
  return (
    <div className=" grid-3">
      <div className="grid1 box">
        <h3>Welcome !</h3>
        <p>Connections</p>
        <p>Grow your network</p>
      </div>

      <div className="grid2 ">
        <div className="box post">
          <div className="post-header flex">
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
              size="50"
            />
            <ul className="promo ">
              <li>LinkedIn</li>
              <li>1,233,344 followers</li>
              <li>Promoted</li>
            </ul>
            <li>
              <a
                href="#"
                style={{ color: "deepskyblue", fontWeight: "bolder" }}
              >
                + Follow
              </a>
            </li>
          </div>
          <div className="post-body">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              accusantium quaerat libero exercitationem modi, corrupti impedit
              esse, beatae provident harum quo ratione tempore, praesentium
              nesciunt fuga deleniti? Et, ipsam sed.
            </p>
            <img src="/img/people.jpg" alt="" />

            <FiThumbsUp />
            <FiHeart />

            <div className="post-footer">
              <ul>
                <li>
                  <span>
                    <li>
                      <FiThumbsUp />
                    </li>
                    <span>Like</span>
                  </span>
                </li>
                <li>
                  <span>
                    <li>
                      <FiMessageSquare />
                    </li>
                    <span>Comment</span>
                  </span>
                </li>
                <li>
                  <span>
                    <li>
                      <FiShare />
                    </li>
                    <span>Share</span>
                  </span>
                </li>
                <li>
                  <span>
                    <li>
                      <FiSend />
                    </li>
                    <span>Send</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box post">
          <div className="post-header flex">
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
              size="50"
            />
            <ul className="promo ">
              <li>LinkedIn</li>
              <li>1,233,344 followers</li>
              <li>Promoted</li>
            </ul>
            <li>
              <a
                href="#"
                style={{ color: "deepskyblue", fontWeight: "bolder" }}
              >
                + Follow
              </a>
            </li>
          </div>
          <div className="post-body">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              accusantium quaerat libero exercitationem modi, corrupti impedit
              esse, beatae provident harum quo ratione tempore, praesentium
              nesciunt fuga deleniti? Et, ipsam sed.
            </p>
            <img src="/img/man.jpg" alt="" />

            <FiThumbsUp />
            <FiHeart />

            <div className="post-footer">
              <ul>
                <li>
                  <span>
                    <li>
                      <FiThumbsUp />
                    </li>
                    <span>Like</span>
                  </span>
                </li>
                <li>
                  <span>
                    <li>
                      <FiMessageSquare />
                    </li>
                    <span>Comment</span>
                  </span>
                </li>
                <li>
                  <span>
                    <li>
                      <FiShare />
                    </li>
                    <span>Share</span>
                  </span>
                </li>
                <li>
                  <span>
                    <li>
                      <FiSend />
                    </li>
                    <span>Send</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box post">
          <div className="post-header flex">
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
              size="50"
              className="post-icon"
            />
            <ul className="promo ">
              <li>LinkedIn</li>
              <li>1,233,344 followers</li>
              <li>Promoted</li>
            </ul>
            <li>
              <a
                href="#"
                style={{ color: "deepskyblue", fontWeight: "bolder" }}
              >
                + Follow
              </a>
            </li>
          </div>
          <div className="post-body">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              accusantium quaerat libero exercitationem modi, corrupti impedit
              esse, beatae provident harum quo ratione tempore, praesentium
              nesciunt fuga deleniti? Et, ipsam sed.
            </p>
            <img src="/img/work.jpg" alt="" />

            <FiThumbsUp />
            <FiHeart />

            <div className="post-footer">
              <ul>
                <li>
                  <span>
                    <li>
                      <FiThumbsUp />
                    </li>
                    <span>Like</span>
                  </span>
                </li>
                <li>
                  <span>
                    <li>
                      <FiMessageSquare />
                    </li>
                    <span>Comment</span>
                  </span>
                </li>
                <li>
                  <span>
                    <li>
                      <FiShare />
                    </li>
                    <span>Share</span>
                  </span>
                </li>
                <li>
                  <span>
                    <li>
                      <FiSend />
                    </li>
                    <span>Send</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid3 box">
        <h4>Today's News and Views</h4>
      </div>
    </div>
  );
}

export default Home;
