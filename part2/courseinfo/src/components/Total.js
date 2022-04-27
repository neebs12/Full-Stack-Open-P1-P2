const Total = ({ parts }) => {
  let sum = parts.reduce((acm, part) => 
    acm + part.exercises, 0);

  return <p><b>total of {sum} exercises</b></p>
}

export default Total