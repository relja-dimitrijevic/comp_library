import { useState } from 'react';
import './Accordion_2.css';

function Accordion_2() {
    const [openIndices, setOpenIndices] = useState([]);

    const items = [
        { title: 'Section One', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { title: 'Section Two', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { title: 'Section Three', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
    ];

    const toggleItem = (index) => {
        setOpenIndices(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className='accordion-container-v2'>
            <h2 className='accordion-title-v2'>Multiple Open Accordion</h2>
            <div className='accordion-list-v2'>
                {items.map((item, index) => (
                    <div key={index} className={`accordion-item-v2 ${openIndices.includes(index) ? 'open' : ''}`}>
                        <button className='accordion-header-v2' onClick={() => toggleItem(index)}>
                            <span className='accordion-title-text-v2'>{item.title}</span>
                            <span className='accordion-icon-v2'>▼</span>
                        </button>
                        <div className='accordion-content-v2'>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accordion_2;

