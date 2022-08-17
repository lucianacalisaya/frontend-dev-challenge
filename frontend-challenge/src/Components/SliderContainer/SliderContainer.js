import React, { useEffect, useState } from 'react';
import './SliderContainer.scss';
import Slider from '../Slider/Slider'
// import {useSwipeable} from 'react-swipeable'

const SliderContainer = ({ items, children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
/*
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.count(children) - 1;
    } else if (newIndex >= items.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
*/
  // const handlers = useSwipeable({
    // onSwipedLeft: () => updateIndex(activeIndex + 1),
    // onSwipedRight: () => updateIndex(activeIndex - 1)
  // });

  return (
    <div
      // {...handlers}
      className='slider'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className='inner'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        <Slider items={items} {...items} />
      </div>
      <div className='indicators'>
        <button
          // onClick={() => {
          //   updateIndex(activeIndex - 1);
          // }}
        >
          Prev
        </button>
        <button
          // onClick={() => {
          //   updateIndex(activeIndex + 1);
          // }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SliderContainer;
