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
      <SlotMachine start={start} value={'Slot Machine'} list={list} />
      <SlotMachine start={start} value={'Slot Machine'} list={list} init={true} />
      <SlotMachine start={start} value={'Jackpot'} list={list} init={true} />
      <SlotMachine start={start} value={'0123456789'} list={numbers} />
      <SlotMachine start={start} value={'0123456789'} list={[...numbers, ...numbers, ...numbers]} />
      <div className={'Controls'}>
        <button onClick={() => toggle(false)}>Reset</button>
        <button onClick={() => toggle(true)}>Start</button>
      </div>
    </>
  );
}

export default App;
