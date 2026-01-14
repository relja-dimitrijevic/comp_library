import { useState } from 'react';
import './Accordion_3.css';

function Accordion_3() {
    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        { title: 'First Item', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { title: 'Second Item', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { title: 'Third Item', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
    ];

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='accordion-container-v3'>
            <h2 className='accordion-title-v3'>Minimal Accordion</h2>
            <div className='accordion-list-v3'>
                {items.map((item, index) => (
                    <div key={index} className={`accordion-item-v3 ${openIndex === index ? 'open' : ''}`}>
                        <button className='accordion-header-v3' onClick={() => toggleItem(index)}>
                            <span className='accordion-title-text-v3'>{item.title}</span>
                            <span className='accordion-line-v3'></span>
                            <span className='accordion-icon-v3'>{openIndex === index ? '−' : '+'}</span>
                        </button>
                        <div className='accordion-content-v3'>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accordion_3;

