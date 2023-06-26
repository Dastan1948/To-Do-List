import { useState } from 'react';
import styles from './TaskInput.module.css';
import Modal from '../Modal/Modal';

const TaskInput = (props) => {
  const [text, setText] = useState('');
  const [modal, setModal] = useState(false);

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const submitHandler = () => {
    if (text === '') {
      setModal(true);
      return;
    }

    const info = {
      userText: text,
      id: Math.random().toString(),
    };

    props.addTodoHandler(info);
    setText('');
  };

  return (
    <div className={styles.content}>
      <h1>To-Do</h1>
      <div className={styles.box}>
        <p>Введите текст</p>
        <input type="text" onChange={textChangeHandler} value={text} />
        <button onClick={submitHandler}>Добавить</button>
      </div>
      {modal && <Modal setModal={setModal} />}
    </div>
  );
};

export default TaskInput;
