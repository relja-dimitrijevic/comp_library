import { useState } from 'react';
import './Accordion.css';

function Accordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        { title: 'Section One', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi magni qui quae.' },
        { title: 'Section Two', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi magni qui quae.' },
        { title: 'Section Three', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi magni qui quae.' }
    ];

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='accordion-container'>
            <h2 className='accordion-title'>Accordion</h2>
            <div className='accordion-list'>
                {items.map((item, index) => (
                    <div key={index} className={`accordion-item ${openIndex === index ? 'open' : ''}`}>
                        <button className='accordion-header' onClick={() => toggleItem(index)}>
                            <span className='accordion-title-text'>{item.title}</span>
                            <span className='accordion-icon'>{openIndex === index ? '−' : '+'}</span>
                        </button>
                        <div className='accordion-content'>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accordion;

