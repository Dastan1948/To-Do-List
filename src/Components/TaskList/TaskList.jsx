import Task from '../Task/Task';
import styles from './TaskList.module.css';

const TaskList = (props) => {

  return (
    <div className={styles.content}>
      <ul>
        {props.todos.map((todo) => (
          <Task 
            key={todo.id} 
            id={todo.id}
            deleteTodoHandler={props.deleteTodoHandler}>
            {todo.userText}
          </Task>
        ))}
      </ul>
      
    </div>
  );
};

export default TaskList;
