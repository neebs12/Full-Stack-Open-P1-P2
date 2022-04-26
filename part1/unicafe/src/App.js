import { useState } from 'react';

const Button = ({text, onClickhandler}) => {
  return (
    <button onClick={onClickhandler}>{text}</button>
  );
}

const StatisticsLine = ({ text, value }) => 
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

const Statistics = ({ nums }) => {
  let [goodNum, neutralNum, badNum] = nums;
  let total = nums.reduce((acm, sum) => acm + sum, 0);
  let avg = total ? (goodNum * 1 + badNum * -1) / total : 0;
  let posPct = `${total ? (goodNum / total) * 100 : 0} %`;

  if (!total) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  } else {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text={"good"} value={goodNum} />
            <StatisticsLine text={"neutral"} value={neutralNum} />
            <StatisticsLine text={"bad"} value={badNum} />
            <StatisticsLine text={"total"} value={total} />
            <StatisticsLine text={"average"} value={avg} />
            <StatisticsLine text={"positive"} value={posPct} />
          </tbody>
        </table>
      </>
    );
  }
}

const App = () => {
  const [goodNum, setgoodNum] = useState(0);
  const [neutralNum, setNeutralNum] = useState(0);
  const [badNum, setBadNum] = useState(0);

  // use PFA
  const increment = (num, modif) => 
    () => modif(num + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} 
        onClickhandler={increment(goodNum, setgoodNum)}/>
      <Button text={"neutral"} 
        onClickhandler={increment(neutralNum, setNeutralNum)}/>
      <Button text={"bad"} 
        onClickhandler={increment(badNum, setBadNum)}/>
      <Statistics nums={[goodNum, neutralNum, badNum]}/>
    </div>
  );
}

export default App;
