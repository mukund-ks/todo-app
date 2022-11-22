import Form from './components/Form';
import Header from './components/Header';
import { useState } from 'react';
import TodoList from './components/TodoList';
import styles from './style.module.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Header />
      <div className={styles.main}>
        <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}

export default App;
