import React from "react";
import { useSpring, animated } from "react-spring";

import './index.css';

const Slot = ({ list, width, height, delay }) => {
  const props = useSpring({
    from: { top: -height * (list.length - 1) },
    to: { top: 0 },
    config: { duration: 1000 + Math.floor(Math.random() * 1000) + 100 },
    delay,
  });

  return (
    <animated.ul className={'List'} style={props}>
      {list.map((letter, index) => (
        <li style={{ width: `${width}px`, height: `${height}px` }} key={index}>{letter}</li>
      ))}
    </animated.ul>
  );
};

export default Slot;
