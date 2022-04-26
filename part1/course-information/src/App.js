const Header = props => {
  return (
    <h1>{props.course}</h1>
  );
};

const Content = props => {
  const Part = (partProp) => {
    // -1 for corrected zero index
    let obj = props.parts[partProp.num - 1]
    return (
      <p>
        {obj.name} {obj.exercises}
      </p>
    );
  };

  return (
    <div>
      <Part num={1}/>
      <Part num={2}/>
      <Part num={3}/>
    </div>
  );
};

const Total = props => {
  let totalVal = 0;
  for (let kvp of props.parts) {
    totalVal += kvp.exercises;
  }
  return (
    <p>Number of exercises {totalVal}</p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
