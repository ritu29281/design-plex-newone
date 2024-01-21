import React from "react";
import { useState } from "react";
import Faqsectionstyle from "./Faqsectionstyle.css";
function Faqsection({ id, ques, ans }) {
  const [isOpen1, setisOpen1] = useState(false);

  const toggle1 = () => {
    setisOpen1(!isOpen1);
  };
  return (
    <section>
      <div onClick={toggle1} class={`faq1 ${isOpen1 ? "active" : ""}`}>
        <div class="ques">
          <h2> {ques}</h2>{" "}
          <img
            src={`  ${isOpen1 ? "Slider1.png" : "Slider.png"}`}
            alt=""
            srcset=""
          />
        </div>{" "}
        {isOpen1 && (
          <div class={`ans ${isOpen1 ? "activeans" : ""}`}>
            <p>{ans}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Faqsection;
