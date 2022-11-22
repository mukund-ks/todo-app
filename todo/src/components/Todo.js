import styles from '../style.module.css';

const Todo = (props) => {
    const todoDelete = () => {
        props.setTodoList(props.todoList.filter((item) => item.id !== props.todoItem.id));
    };

    return (
        <div>
            <div className={styles.todoItem}>
                <h3 className={styles.todoName}>{props.todoItem.name}</h3>
                <button onClick={todoDelete} className={styles.todoDone}>Done</button>
            </div>
        </div>
    );
};

export default Todo;