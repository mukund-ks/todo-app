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
        <div className={styles.todoForm}>
            <form onSubmit={submitHandler}>
                <input value={todo} onChange={todoHandler} className={styles.todoInput} placeholder='Add Item'></input>
                <button type='submit' className={styles.todoButton}>Add</button>
            </form>
        </div>
    );
};

export default Form;