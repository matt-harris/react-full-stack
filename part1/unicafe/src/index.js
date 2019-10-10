import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Statistics component.
const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <p>No feedback given.</p>
    );
  };

  return (
    <table>
      <tbody>
        <Statistic text="Good" value={props.good} />
        <Statistic text="Neutral" value={props.neutral} />
        <Statistic text="Bad" value={props.bad} />
        <Statistic text="All" value={props.total} />
        <Statistic text="Average" value={((props.good * 1) + (props.bad * -1)) / props.total} />
        <Statistic text="Positive" value={((props.good / props.total) * 100) + '%'} />
      </tbody>
    </table>
  );
};

// Statistic component.
const Statistic = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
);

// Button component.
const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
);

const App = () => {
  // Save clicks of each button to it's own state.
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const goodFeedback = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const neutralFeedback = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const badFeedback = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button onClick={goodFeedback} text="Good" />
      <Button onClick={neutralFeedback} text="Neutral" />
      <Button onClick={badFeedback} text="Bad" />

      <h2>Statistics</h2>

      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
