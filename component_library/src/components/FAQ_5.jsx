import { useState } from "react";
import "./FAQ_5.css";

function FAQ_5() {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { question: "Question 1", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { question: "Question 2", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { question: "Question 3", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { question: "Question 4", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
  ];

  return (
    <div className="faq-container-v5">
      <div className="faq-wrapper-v5">
        <header className="faq-header-v5">FAQ</header>
        
        <div className="faq-grid-v5">
          {data.map((item, index) => (
            <div
              key={index}
              className={`faq-card-v5 ${activeIndex === index ? "open" : ""}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="faq-question-v5">
                <span>{item.question}</span>
                <span className="faq-icon-v5">{activeIndex === index ? "−" : "+"}</span>
              </div>
              <div className="faq-answer-wrapper-v5">
                <p className="faq-answer-v5">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ_5;

