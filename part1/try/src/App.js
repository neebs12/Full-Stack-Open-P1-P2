import { useState } from 'react'

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        <p>Activate me by pressing buttons!!</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>{allClicks.join(' ')}</p>
      </div>
    );
  } 
}

const Button = ({onClick, text}) =>
  <button onClick={onClick}>{text}</button>;

const App = () => {
  const [leftClick, setLeftClick] = useState(0);
  const [rightClick, setRightClick] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const handleLeftClick = () => {
    setLeftClick(leftClick + 1);
    setAllClicks(allClicks.concat('L'));
  }

  const handleRightClick = () => {
    setRightClick(rightClick + 1);
    setAllClicks(allClicks.concat('R'));
  }

  return (
    <div>
      {leftClick}
      <Button onClick={handleLeftClick} text={"left"}/>
      <Button onClick={handleRightClick} text={"right"}/>
      {rightClick}
      <br />
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App;
