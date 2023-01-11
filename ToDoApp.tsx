import React from 'react';

function ToDoApp() {
  const [toDos, setToDos] = React.useState([
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
  const [input, setInput] = React.useState('');

  function addToDo() {
    let toDosHelper = toDos;
    toDosHelper.push({
      text: input,
      gradientDegStart: Math.floor(Math.random() * 360),
      gradientDegEnd: Math.floor(Math.random() * 360),
    });
    setToDos(toDosHelper);
    setInput('');
  }

  function removeToDo(removeToDo) {
    let updatedToDos = toDos.filter((toDo) => toDo !== removeToDo);
    setToDos(updatedToDos);
  }

  const toDoList = toDos.map((todo) => {
    return (
      <li
        style={{
          background:
            'linear-gradient(30deg, hsl(' +
            todo.gradientDegStart +
            'deg 100% 80%), hsl(' +
            todo.gradientDegEnd +
            'deg 100% 80%))',
        }}
      >
        {todo.text} <button onClick={(e) => removeToDo(todo)}>&times;</button>
      </li>
    );
  });

  return (
    <div>
      <ul className="todo">{toDoList}</ul>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Write task here..."
        />
        <input
          type="submit"
          value="Add to-do"
          onClick={() => {
            addToDo();
          }}
          disabled={!input}
        ></input>
      </form>
    </div>
  );
}

export default ToDoApp;
