import * as React from 'react';
import ToDoApp from './ToDoApp';
import './style.scss';

export default function App() {
  return (
    <div>
      <h1>
        To-do list. 📋
        <br />
        Built with React. ⚛️
      </h1>
      <p>
        Probably the prettiest to-do app
        <br />
        you'll see whole day! 🌈
      </p>
      <ToDoApp />
    </div>
  );
}
