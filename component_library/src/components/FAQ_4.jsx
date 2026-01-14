import { useState } from "react";
import "./FAQ_4.css";

function FAQ_4() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { question: "Question 1", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { question: "Question 2", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { question: "Question 3", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { question: "Question 4", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
  ];

  return (
    <div className="faq-container-v4">
      <div className="faq-wrapper-v4">
        <header className="faq-header-v4">Frequently Asked Questions</header>
        
        <div className="faq-tabs-v4">
          {data.map((item, index) => (
            <button
              key={index}
              className={`faq-tab-v4 ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {item.question}
            </button>
          ))}
        </div>

        <div className="faq-content-v4">
          <div className="faq-answer-v4" key={activeIndex}>
            {data[activeIndex].answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ_4;

