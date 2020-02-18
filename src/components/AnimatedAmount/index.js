import React, { useCallback, useEffect, useState } from 'react';
import { animated, Spring } from 'react-spring/renderprops';

import './index.css';

const getFriction = number => {
  switch (+number) {
    case 8:
    case 7:
      return 13;
    case 6:
    case 5:
      return 14;
    case 4:
    case 3:
      return 15;
    case 2:
    case 1:
      return 16;
    default:
      return 12;
  }
};

const AnimatedAmount = ({ number, start }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Breaking the whole number to animate each peace separately
    setList(number.toString().split(''));
  }, [number]);

  const getPosition = useCallback(number => {
    if (!start) return 0;
    if (+number > 0) return -50 * number;

    return -500;
  }, [start]);

  return (
    <div className={'Counter'}>
      {list.map((n, index) => {
        if (Number.isInteger(parseInt(n, 10))) {
          return (
            <div className={'ListContainer'} key={index}>
              <Spring
                from={{ top: 0 }}
                to={{ top: getPosition(n) }}
                config={{ tension: 30, clamp: true, friction: getFriction(n) }}
              >
                {styles => (
                  <animated.ul className={'List'} style={styles}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, index) => (
                      <li key={index}>{number}</li>
                    ))}
                  </animated.ul>
                )}
              </Spring>
            </div>
          );
        }

        return <span className={'StaticElement'} key={index}>{n}</span>
      })}
    </div>
  );
};

export default AnimatedAmount;
