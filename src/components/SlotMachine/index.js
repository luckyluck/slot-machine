import React, {useEffect, useState} from "react";

import './index.css';
import Slot from "../Slot";
import { isNumberOrLetter } from '../../utils/helpers';

const SlotMachine = ({ onStart, value, list, init = false, auto = false, infinite = false }) => {
  const [start, setStart] = useState(auto);
  let delay = -50;

  const iterate = () => {
    if (infinite) {
      // Something between 1s and 30s
      const delay = Math.floor(Math.random() * 30000) + 1000;
      setTimeout(() => {
        setStart(value => !value);
        iterate();
      }, delay);
    }
  };

  useEffect(() => {
    if (onStart !== null && onStart !== undefined && !infinite) {
      setStart(onStart);
    }
  }, [onStart, infinite]);

  useEffect(iterate, [infinite]);

  return (
    <div className={'Counter'}>
      {value.split('').map((n, index) => {
        if (isNumberOrLetter(n)) {
          delay += 50;
          return (
            <div className={'ListContainer'} key={index}>
              <Slot delay={delay} item={n} list={list} start={start} init={init}/>
            </div>
          );
        }

        return <span className={'StaticElement'} style={{ width: n === ' ' ? '50px' : 'auto' }} key={index}>{n}</span>
      })}
    </div>
  );
};

export default SlotMachine;
