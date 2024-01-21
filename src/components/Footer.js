import React from "react";
import { useState } from "react";
import Footerstyle from "./Footerstyle.css";
import Faqsection from "./Faqsection";
import { faqs } from "./Faq";

function Footer() {
  const [isOpen, setisOpen] = useState(false);
  const renderfaq = () => {
    return faqs.map((faq) => {
      return (
        <Faqsection key={faq.id} ques={faq.ques} ans={faq.ans} id={faq.id} />
      );
    });
  };
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <div>
      {" "}
      <div class="footer">
        <h1>
          {" "}
          Frequently Asked <span> Questions </span>{" "}
        </h1>{" "}
        <div class="footer1">
          <h1>
            Our <span> FAQ </span>page has answers to many common questions. If
            you are looking <h1>for more information, please check it out. </h1>{" "}
          </h1>{" "}
        </div>{" "}
        <section>
          <div onClick={toggle} class={`faq ${isOpen ? "active" : ""}`}>
            <div class="ques">
              <h2>
                What exectly is Dezign <span> Plex </span>?{" "}
              </h2>{" "}
              <img
                src={`  ${isOpen ? "Slider1.png" : "Slider.png"}`}
                alt=""
                srcset=""
              />
            </div>{" "}
            {isOpen && (
              <div class={`ans ${isOpen ? "activeans" : ""}`}>
                <p>
                  DesignHub is your all - in -one digital partner.They excel in
                  user - friendly web and app design, handle development, and
                  offer complete branding services.They make your digital
                  journey seamless and successful.{" "}
                </p>{" "}
              </div>
            )}
          </div>

          {renderfaq()}
        </section>{" "}
        <div class="logo">
          <img src="logo.png" alt="" srcset="" />
        </div>
        <div class="lesson">
          <h2>
            Give a Lesson a <span>Go</span>
          </h2>
        </div>
        <div className="para">
          <p>
            Give it a try, don't be afraid to learn something new. Embrace the
            opportunity to experience and grow through lessons.
          </p>
        </div>
        <div class="btn">
          <input type="text" placeholder="Your email address" />
          <button type="">Subscribe</button>
        </div>
      </div>{" "}
      <div class="icons">
        <img src="Telegram.png" alt="" srcset="" />
        <img src="Linkedin.png" alt="" srcset="" />
        <img src="Whatsapp.png" alt="" srcset="" />
        <img src="Dribble.png" alt="" srcset="" />
        <img src="colmen.png" alt="" srcset="" />
        <img src="Instagram.png" alt="" srcset="" />
        <img src="Behance.png" alt="" srcset="" />
        <img src="Facebook.png" alt="" srcset="" />
        <img src="Youtube.png" alt="" srcset="" />
      </div>
    </div>
  );
}

export default Footer;
