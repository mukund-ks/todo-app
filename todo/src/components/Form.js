import styles from '../style.module.css';
import { nanoid } from 'nanoid';

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
    const todoHandler = (event) => {
        setTodo(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (todo) { // 'if block' is executed if 'todo' holds some value.
            setTodoList([...todoList, { name: todo, id: nanoid() }]);
        }
        setTodo('');
        // console.log(todoList);
    }
    return (
        <span>
            <form onSubmit={submitHandler}>
                <div className={styles.todoForm}>
                    <input value={todo} onChange={todoHandler} className={styles.todoInput} placeholder='Task'></input>
                    <button type='submit' className={styles.todoButton}>Add</button>
                </div>
            </form>
        </span>
    );
};

export default Form;