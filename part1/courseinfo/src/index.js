import React from 'react';
import ReactDOM from 'react-dom';

// Header component.
const Header = (props) => (<h1>{props.course}</h1>);

// Content component.
const Content = (props) => (
  <>
    <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
    <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
    <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
  </>
);

// Part component.
const Part = (props) => (
  <p>{props.part} {props.exercises}</p>
);

// Total component.
const Total = (props) => (<p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>);

// App (root) component.
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts:  [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
