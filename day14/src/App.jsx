import React from 'react';

const App = () => {
  const [task, setTask] = React.useState('');
  const [todolist, setTodolist] = React.useState([]);
  const [editIndex, setEditIndex] = React.useState(null);

  const addHandler = () => {
    if (task.trim() === '') {
      alert('Please enter a task');
      return;
    } else {
      if (editIndex !== null) {
        // Update the existing task
        const updatedList = [...todolist];
        updatedList[editIndex] = task;
        setTodolist(updatedList);
        setEditIndex(null);
      } else {
        // Add a new task
        setTodolist([...todolist, task]);
      }

      setTask('');
    }
  };

  const deleteHandler = (index) => {
    const updatedList = todolist.filter((data, i) => i !== index);
    setTodolist(updatedList);
  };

  const editHandler = (index) => {
    setTask(todolist[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>ToDo List</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addHandler}>
        {editIndex !== null ? 'UPDATE' : 'ADD'}
      </button>

      <br />

      {todolist.map((data, index) => (
        <div key={index}>
          <span>{data}</span>
          <button onClick={() => editHandler(index)}>EDIT</button>
          <button onClick={() => deleteHandler(index)}>DELETE</button>
        </div>
      ))}
    </div>
  );
};

export default App;