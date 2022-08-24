import { useState, useRef } from 'react';
import './AccordionItem.scss'
const AccordionItem = ({ faq }) => {

  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const { question, answer } = faq;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion__item ${clicked ? 'active' : ''}`}>
      <button className='accordion__button' onClick={handleToggle}>
        {question}
        <span className='accordion__control'>{clicked ? '—' : '+'} </span>
      </button>

      <div ref={contentEl} className='accordion__wrapper' style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className='accordion__answer'>{answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;