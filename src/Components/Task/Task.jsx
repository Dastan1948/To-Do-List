import { useState } from 'react';
import styles from './Task.module.css';

const Task = (props) => {
  const [done, setDone] = useState(false)

  const deleteHandler = () => {
    props.deleteTodoHandler(props.id);
  };

  const doneHandler = () => {
    setDone(true)
  }

  return (
    <div className={styles.content}>
      <li className={`${styles.list} ${done && styles.done}`} onClick={doneHandler}>
        {props.children}
      </li>
      <div className={styles.btn}>
        <button onClick={deleteHandler}>Удалить</button>
      </div>
    </div>
  );
};

export default Task;
