import { useState } from "react";
import "./FAQ_3.css";

function FAQ_3() {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { question: "How does it work?", answer: "Lorem ipsum dolor sit amet..." },
    { question: "Is it mobile friendly?", answer: "Lorem ipsum dolor sit amet..." },
    { question: "Can I get a demo?", answer: "Lorem ipsum dolor sit amet..." }
  ];

  return (
    <div className="faq-container variant-morph">
      <div className="faq-wrapper">
        <header>Got Questions?</header>

        {data.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "open" : ""}`}>
            <div className="accordion" onClick={() => setActiveIndex(index === activeIndex ? null : index)}>
              <span>{item.question}</span>
              <div className="circle">
                <span className="circle_icon">{activeIndex === index ? "-" : "+"}</span>
              </div>
            </div>

            <div className="answer-block">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ_3;
