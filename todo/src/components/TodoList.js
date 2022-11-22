import Todo from "./Todo";

const TodoList = (props) => {
    return (
        <span>
            {props.todoList.map(todoItem => 
            <Todo key={todoItem.id} todoItem={todoItem} todoList={props.todoList} setTodoList={props.setTodoList}></Todo>)}
        </span>
    )
};

export default TodoList;