import { useState } from 'react';
import './Accordion_5.css';

function Accordion_5() {
    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        { title: 'Item One', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { title: 'Item Two', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { title: 'Item Three', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
    ];

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='accordion-container-v5'>
            <h2 className='accordion-title-v5'>Simple Accordion</h2>
            <div className='accordion-list-v5'>
                {items.map((item, index) => (
                    <div key={index} className={`accordion-item-v5 ${openIndex === index ? 'open' : ''}`}>
                        <button className='accordion-header-v5' onClick={() => toggleItem(index)}>
                            <span className='accordion-title-text-v5'>{item.title}</span>
                            <span className='accordion-toggle-v5'>{openIndex === index ? '−' : '+'}</span>
                        </button>
                        <div className='accordion-content-v5'>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accordion_5;

