import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Part 1a & 1c
// const Hello = ({name, age}) => {
//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old.</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     // Avoid empty div tags by using fragments, i.e. by wrapping the elements to be
//     // returned by the component with an empty element.
//     <>
//       <h1>Greetings</h1>
//       {/* Use props to pass data to components. */}
//       <Hello name="Maya" age={ 26 + 10 } />
//       <Hello name={ name } age={ age } />
//       <Footer />
//     </>
//   )
// }

// const Footer = () => {
//   return (
//     <div>
//       Greeting App created by
//       <a href="https://github.com/matt-harris">Matt</a>
//     </div>
//   )
// }




// Part 1c Counter

// // Display component.
// const Display = ({counter}) => <div>{counter}</div>;

// // Button component.
// const Button = ({onClick, text}) => (
//   <button onClick={onClick}>{text}</button>
// );

// const App = (props) => {
//   const [counter, setCounter] = useState(0);
//   // Event handler function.
//   // Double arrow functions can be thought of as functions that have to be called twice in order
//   // to get the final result. The first function call is used to "configure" the second function,
//   // by defining some of its parameters. By calling setToValue(5) we assign the value 5 to
//   // value and we're left with the following function: () => setCounter(5)
//   const setToValue = (value) => () => setCounter(value);

//   return (
//     <>
//       <Display counter={counter} />
//       <Button onClick={setToValue(counter + 1)} text="Plus" />
//       <Button onClick={setToValue(counter - 1)} text="Minus" />
//       <Button onClick={setToValue(0)} text="Reset" />
//     </>
//   );
// };


// Part 1d Complex state

// If you split state up, not always best as more complex and not needed.
// const App = (props) => {
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0,
//   });

//   const handleLeftClick = () => setClicks({
//     ...clicks,
//     left: clicks.left + 1,
//   });

//   const handleRightClick = () => setClicks({
//     ...clicks,
//     right: clicks.right + 1,
//   });

//   return(
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>Left</button>
//       <button onClick={handleRightClick}>Right</button>
//       {clicks.right}
//     </div>
//   );
// };

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        The App is used by pressing the buttons.
      </div>
    );
  }

  return (

    <div>
      Button press history: {props.allClicks.join(' ')};
    </div>
  );
};

// Button component.
const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
);

const App = (props) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  };

  return(
    <div>
      {left}
      <Button onClick={handleLeftClick} text="Left" />
      <Button onClick={handleRightClick} text="Right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};

ReactDOM.render(<App />,
document.getElementById('root'));