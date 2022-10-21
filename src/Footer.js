import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="link-container">
          <ul>
            <li>Home</li>
            <li>Terms & conditions</li>
            <li>Privacy Policy</li>
            <li>Collections statement</li>
            <li>Help</li>
            <li>Manage account</li>
          </ul>
          <h3>copyright @2016 Demo streaming. All right reserved</h3>
        </div>
        <div className="social-media-container">
          <div className="left">
            <img
              src={"assets/social/facebook-white.svg"}
              alt="fbimage"
              height={"30px"}
              width="30px"
            />
            <img
              src={"assets/social/twitter-white.svg"}
              alt="twtimage"
              height={"30px"}
              width="30px"
            />
            <img
              src={"assets/social/instagram-white.svg"}
              alt="instimage"
              height={"30px"}
              width="30px"
            />
          </div>
          <div className="mid"></div>
          <div className="right">
            <img
              src={"assets/store/app-store.svg"}
              alt="fbimage"
              height={"70px"}
              width="140px"
            />
            <img
              src={"assets/store/play-store.svg"}
              alt="twtimage"
              height={"70px"}
              width="140px"
            />
            <img
              src={"assets/store/windows-store.svg"}
              alt="instimage"
              height={"70px"}
              width="110px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
