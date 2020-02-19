import React from "react";

import './index.css';
import Slot from "../Slot";

const SlotMachine = ({ start, value, list, init = false }) => {
  let delay = -50;

  return (
    <div className={'Counter'}>
      {value.split('').map((n, index) => {
        delay += 50;
        return (
          <div className={'ListContainer'} key={index}>
            <Slot delay={delay} item={n} list={list} start={start} init={init} />
          </div>
        );
      })}
    </div>
  );
};

export default SlotMachine;
