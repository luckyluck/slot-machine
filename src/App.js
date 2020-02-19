import React, { useState } from 'react';

import './App.css';
import SlotMachine from "./components/SlotMachine";
import { getAlphabet } from "./utils/helpers";

function App() {
  const [start, toggle] = useState(false);
  const alphabet = getAlphabet();
  const list = [...alphabet, ...alphabet, ...alphabet];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => n.toString());

  return (
    <>
      <SlotMachine onStart={start} value={'Slot Machine'} list={list} />
      <SlotMachine onStart={start} value={'Slot Machine'} list={list} init={true} />
      <SlotMachine value={'Jackpot'} list={list} infinite={true} init={true} />
      <SlotMachine value={'0123456789'} list={numbers} auto={true} />
      <SlotMachine onStart={start} value={'0123456789'} list={[...numbers, ...numbers, ...numbers]} />
      <SlotMachine onStart={start} value={'$1.234,34'} list={numbers} />
      <div className={'Controls'}>
        <button onClick={() => toggle(false)}>Reset</button>
        <button onClick={() => toggle(true)}>Start</button>
      </div>
    </>
  );
}

export default App;
