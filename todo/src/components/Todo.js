import styles from '../style.module.css';

const Todo = (props) => {
    const todoDelete = () => {
        props.setTodoList(props.todoList.filter((item) => item.id !== props.todoItem.id));
    };

    return (
        <div className={styles.todoItem}>
            <div className={styles.todoName}>
                <h3>{props.todoItem.name}</h3>
            </div>
            <button onClick={todoDelete} className={styles.todoDone}>Done</button>
        </div>
    );
};

export default Todo;