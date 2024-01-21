import React from "react";
import Bottomstyle from "./Bottomstyle.css";

function Bottom() {
  return (
    <>
      <div class="bottom">
        <div className="left">
          <img src="logo.png" alt="" srcset="" />
          <p>
            Dezign Plex, your all-in-one digital partner, excels in
            user-friendly web and app design, development, and comprehensive
            branding services for success.
          </p>
          <div className="contact">
            <div>
              <p>9310038567</p>
            </div>
            <span> or </span>
            <div>
              <p> Proxy@gmail.com</p>
            </div>
          </div>
          <div className="col">
            <div className="leftmost">
              <h3>Helps</h3>
              <p>Contacts</p>
              <p>Faqs</p>
              <p>Terms & Condition</p>
              <p>Privacy Policy</p>
            </div>
            <div className="mid">
              <h3>Design hub</h3>
              <p>Get Started</p>
              <p>Our Work</p>
              <p>Services</p>
              <p>Our Portfolio</p>
            </div>
            <div className="rightmost">
              <h3>Categories</h3>
              <p>Web Design</p>
              <p>App Design</p>
              <p>Branding</p>
              <p>App Development</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="up">
            {" "}
            Think Smart, Solve <span> Faster</span>
          </div>
          <div class="rightmid">
            <p>Enhance Your Thinking for Quicker, More Effective Solutions.</p>
          </div>
          <div className="rightmid1">
            <p>Ready to build?</p>
          </div>
          <div className="bot">
            <div className="left1">
              <button>Send a Message</button>
              <button>Order Now!</button>
            </div>
            <div className="right1">
              <button>Book a meeting</button>
              <button>Free Material</button>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="last">Dezign Plex © 2023. All Rights Reserved</div>
    </>
  );
}

export default Bottom;
