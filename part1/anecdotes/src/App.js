import { useState } from 'react';

const DisplayAnecdoteAndVote = ({anecdote, vote}) => {
  return (
    <>
      {anecdote} <br />
      has {vote} votes <br />
    </>
  );
}

const MostVotedAnecdote = ({anecdotes, votes}) => {
  // get ind with most votes
  let maxInd = 0;
  let max = 0;
  votes.forEach((curr, ind) => {
    if (curr > max) {
      maxInd = ind; // reassg index
      max = curr; // reassg max
    }
  });
  return DisplayAnecdoteAndVote({
    anecdote: anecdotes[maxInd],
    vote: votes[maxInd],
  });
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const randomizeSelected = () => 
    setSelected(Math.floor(Math.random() * anecdotes.length));
  const increaseVote = () => {
    let newVotes = [...votes];
    newVotes[selected] = newVotes[selected] + 1;
    setVotes(newVotes); // non-mutating
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <DisplayAnecdoteAndVote 
        anecdote={anecdotes[selected]} 
        vote={votes[selected]} />
      <button onClick={increaseVote}>vote</button>
      <button onClick={randomizeSelected}>randomize!</button>
      <h1>Anecdote with the most votes</h1>
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes}/>
    </div>
  );
}

export default App;
