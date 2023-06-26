import { useState } from 'react';
import TaskInput from './Components/TaskInput/TaskInput';
import TaskList from './Components/TaskList/TaskList';
import Modal from './Components/Modal/Modal';

function App() {
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState(false);

  const addTodoHandler = (obj) => {
    const newTodos = [...todos];
    newTodos.push(obj);
    setTodos(newTodos);
    console.log(newTodos);
  };

  const deleteTodoHandler = (taskId) => {
    const newTodos = todos.filter((task) => task.id !== taskId);
    setTodos(newTodos);
  };


  return (
    <div className="container">
      <TaskInput addTodoHandler={addTodoHandler} />

      <TaskList
        todos={todos}
        deleteTodoHandler={deleteTodoHandler}
      />
    </div>
  );
}

export default App;
