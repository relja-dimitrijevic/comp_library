import { useState } from "react";
import "./FAQ_2.css";

function FAQ_2() {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { question: "What services do you offer?", answer: "Lorem ipsum dolor sit amet..." },
    { question: "How can I contact support?", answer: "Lorem ipsum dolor sit amet..." },
    { question: "What are the payment options?", answer: "Lorem ipsum dolor sit amet..." }
  ];

  return (
    <div className="faq-container">
      <div className="variant-sidebar">
        <div className="faq-sidebar">
          {data.map((item, index) => (
            <button
              key={index}
              className={`faq-tab ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            >
              {item.question}
            </button>
          ))}
        </div>

        <div className={`faq-answer-panel ${activeIndex !== null ? "open" : ""}`}>
          {activeIndex !== null && (
            <p className="faq-answer-content">{data[activeIndex].answer}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQ_2;