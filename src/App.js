import React, { useState } from 'react';

import './App.css';
import SlotMachine from "./components/SlotMachine";

function App() {
  const [start, toggle] = useState(false);

  return (
    <>
      <SlotMachine start={start} value={'Slot Machine'} />
      <SlotMachine start={start} value={'Slot Machine'} init={true} />
      <SlotMachine start={start} value={'Jackpot'} init={true} />
      <div className={'Controls'}>
        <button onClick={() => toggle(false)}>Reset</button>
        <button onClick={() => toggle(true)}>Start</button>
      </div>
    </>
  );
}

export default App;
