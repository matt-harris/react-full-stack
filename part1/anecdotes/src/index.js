import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Button component.
const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
);

// Most votes component.
const MostVotes = ({anecdotes, votes}) => {
  const mostVotes = Math.max(...votes);
  const mostVotesIndex = votes.indexOf(mostVotes);

  if (mostVotes === 0) {
    return (
      <>
        <h2>Anecdote with most votes</h2>
        <p>No votes :(</p>
      </>
    );
  }

  return (
    <>
      <h2>Anecdote with most votes</h2>
      <h3>{anecdotes[mostVotesIndex]}</h3>
      <p>Has {mostVotes} votes.</p>
    </>
  );

};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const updateVotes = (selected) => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;

    setVotes(copyVotes);
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <h3>{props.anecdotes[selected]}</h3>
      <p>{votes[selected]} votes.</p>

      <Button onClick={() => updateVotes(selected)} text="Vote" />
      <Button onClick={nextAnecdote} text="Next anecdote" />

      <MostVotes anecdotes={anecdotes} votes={votes} />
    </>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
