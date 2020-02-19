import React from "react";

import './index.css';
import Slot from "../Slot";
import { isNumberOrLetter } from '../../utils/helpers';

const SlotMachine = ({ start, value, list, init = false }) => {
  let delay = -50;

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

        return <span className={'StaticElement'} key={index}>{n}</span>
      })}
    </div>
  );
};

export default SlotMachine;
