import React, {useCallback} from "react";
import { useSpring, animated } from "react-spring";

import './index.css';

const Slot = ({ start, delay, list, item, init, width, height }) => {
  const getPosition = useCallback(letter => {
    if (!start) return init ? -height * list.indexOf(letter.toLowerCase()) : 0;
    const index = list.lastIndexOf(letter.toLowerCase());
    return -height * (index > -1 ? index : list.length);
  }, [start, init, list]);

  const props = useSpring({
    from: { top: 0 },
    to: { top: getPosition(item) },
    config: { duration: 1500 + Math.floor(Math.random() * 1500) + 100 },
    delay
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
