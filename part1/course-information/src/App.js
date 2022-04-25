const Header = props => {
  return (
    <h1>{props.course}</h1>
  );
};

const Content = props => {
  const Part = (partProp) => {
    let num = partProp.partNum;
    return (
      <p>
        {props[`part${num}`]} {props[`exercises${num}`]}
      </p>
    );
  };

  return (
    <div>
      <Part partNum={1}/>
      <Part partNum={2}/>
      <Part partNum={3}/>
    </div>
  );
};

const Total = props => {
  let totalExercises = +props.exercises1 + +props.exercises2 + +props.exercises3;
  return (
    <p>Number of exercises {totalExercises}</p>
  );
};

const App = () => {
  const course = "Half stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  );
}


export default App;
