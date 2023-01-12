import * as React from 'react';

function ToDoApp() {
  interface ToDo {
    text: string;
    gradientDegStart: number;
    gradientDegEnd: number;
  }

  const [toDoArray, setToDoArray] = React.useState([
    {
      text: 'Learn React.',
      gradientDegStart: 0,
      gradientDegEnd: 50,
    },
    {
      text: 'Build a To-do app.',
      gradientDegStart: 100,
      gradientDegEnd: 210,
    },
    {
      text: 'Add a bunch of items to the list.',
      gradientDegStart: 60,
      gradientDegEnd: 300,
    },
    {
      text: 'Share project on GitHub.',
      gradientDegStart: 190,
      gradientDegEnd: 270,
    },
  ]);
  const [textInput, setTextInput] = React.useState('');

  function addToDo() {
    let newToDo: ToDo = {
      text: textInput,
      gradientDegStart: Math.floor(Math.random() * 360),
      gradientDegEnd: Math.floor(Math.random() * 360),
    };

    setToDoArray([...toDoArray, newToDo]);
    setTextInput('');
  }

  function removeToDo(event: any, removeToDo: ToDo) {
    event.currentTarget.blur();
    setToDoArray(toDoArray.filter((item: ToDo) => item !== removeToDo));
  }

  const toDoList = toDoArray.map((toDo: ToDo, index: number) => {
    return (
      <li
        key={index}
        style={{
          background:
            'linear-gradient(30deg, hsl(' +
            toDo.gradientDegStart +
            'deg 100% 80%), hsl(' +
            toDo.gradientDegEnd +
            'deg 100% 80%))',
        }}
      >
        {toDo.text}{' '}
        <button onClick={(e) => removeToDo(e, toDo)}>&times;</button>
      </li>
    );
  });

  return (
    <div>
      <ul>{toDoList}</ul>
      <form>
        <input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          type="text"
          placeholder="Write task here..."
        />
        <input
          type="submit"
          value="Add to-do"
          onClick={() => {
            addToDo();
          }}
          disabled={!textInput}
        ></input>
      </form>
    </div>
  );
}

export default ToDoApp;
