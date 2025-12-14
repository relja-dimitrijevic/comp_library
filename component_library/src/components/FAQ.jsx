import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const data = [
    { question: "Question 1", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { question: "Question 2", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { question: "Question 3", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
  ];

  return (
    <div className="faq-container">
      <div className="faq-wrapper">
        <header>Frequently Asked Questions</header>

        {data.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="accordion" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className={activeIndex === index ? "arrow open" : "arrow"}>▼</span>
            </div>

            <div className={activeIndex === index ? "answer answer-open" : "answer"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;