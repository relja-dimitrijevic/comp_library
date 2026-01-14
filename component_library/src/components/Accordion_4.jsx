import { useState } from 'react';
import './Accordion_4.css';

function Accordion_4() {
    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        { title: 'Section 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { title: 'Section 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { title: 'Section 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
    ];

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='accordion-container-v4'>
            <h2 className='accordion-title-v4'>Bordered Accordion</h2>
            <div className='accordion-list-v4'>
                {items.map((item, index) => (
                    <div key={index} className={`accordion-item-v4 ${openIndex === index ? 'open' : ''}`}>
                        <button className='accordion-header-v4' onClick={() => toggleItem(index)}>
                            <span className='accordion-title-text-v4'>{item.title}</span>
                            <span className='accordion-icon-v4'>{openIndex === index ? '−' : '+'}</span>
                        </button>
                        <div className='accordion-content-v4'>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accordion_4;

