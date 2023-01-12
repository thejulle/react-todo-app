import * as React from 'react';
import ToDoApp from './ToDoApp';
import './style.scss';

export default function App() {
  return (
    <div>
      <header>
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
      </header>
      <ToDoApp />
      <footer>
        <a href="https://github.com/thejulle/react-todo-app">
          <img
            src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
            width="32"
            height="32"
            alt="Project repo on GitHub"
          />
        </a>
      </footer>
    </div>
  );
}
