import React, {useEffect, useState} from "react";

import './index.css';
import Slot from '../Slot';
import {getAdjustedAlphabet, isNumberOrLetter} from '../../utils/helpers';

const SlotMachine = ({value, list, slotWidth = 50, slotHeight = 60, timeout = 3000}) => {
  const [timeStamp, setTimeStamp] = useState(Date.now());
  let delay = -50;

  const update = () => {
    setTimeStamp(Date.now());

    setTimeout(() => {
      update();
    }, timeout);
  };

  useEffect(update, []);

  return (
    <div className={'Counter'}>
      {value.split('').map((n, index) => {
        if (isNumberOrLetter(n)) {
          delay += 50;
          return (
            <div className={'ListContainer'} key={index + timeStamp} style={{width: `${slotWidth}px`, height: `${slotHeight}px`}}>
              <Slot item={n} list={getAdjustedAlphabet(list, n)} width={slotWidth} height={slotHeight} delay={delay}/>
            </div>
          );
        }

        return <span className={'StaticElement'}
                     style={{width: n === ' ' ? `${slotWidth}px` : 'auto', height: `${slotHeight}px`}}
                     key={index}>{n}</span>
      })}
    </div>
  );
};

export default SlotMachine;
