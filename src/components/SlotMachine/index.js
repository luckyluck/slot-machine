import React from "react";

import './index.css';
import Slot from "../Slot";

const SlotMachine = ({ start, value, init = false }) => {
  let i = 10;
  const alphabet = [...new Array(26)].reduce(result => {
    result.push(i.toString(36));
    i++;
    return result;
  }, []);
  const list = [...alphabet, ...alphabet, ...alphabet];
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
