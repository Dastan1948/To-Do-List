import styles from './Modal.module.css';

const Modal = (props) => {
  const closeHandler = () => {
    props.setModal(false);
  };

  return (
    <div 
      className={styles.overflow} 
      onClick={closeHandler}
    >
      <div 
        className={styles.modal} 
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Неккоректный ввод</h2>
        <p>Заполните поля ввода</p>
        <button 
          onClick={closeHandler}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;
