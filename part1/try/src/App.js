import { useState } from 'react'

const Display = ({ counter }) => {
  return (
    <p>The counter is: {counter}</p>
  );
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
}

const AnotherButton = ({text}) => {
  const initialState = 100;
  const [sideCounter, setSideCounter] = useState(initialState)
  console.log('AnotherButton re-rendered with state:' + sideCounter);

  const addSideCounter = () => 
    setSideCounter(sideCounter + initialState);

  return (
    <div>
      <button onClick={addSideCounter}>{text}</button>
      <p>{sideCounter}</p>
    </div>
  );
}

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log('App re-rendered with state:', counter);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByTwo = () => setCounter(counter - 2);
  const setToZero = () => setCounter(0);
  const noStateChange = () => setCounter(counter);

  // try and make a button that displays an counter 
  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text="Plus 1"/>
      {/* <Button onClick={decreaseByTwo} text="Minus 2"/>
      <Button onClick={setToZero} text="reset to 0" />
      <Button onClick={noStateChange} text="no change!" /> */}
      <AnotherButton text="Independent"/>
    </div>
  );
};

export default App;
