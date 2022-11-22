import Todo from "./Todo";

const TodoList = (props) => {
    return (
        <div>
            {props.todoList.map(todoItem => 
            <Todo key={todoItem.id} todoItem={todoItem} todoList={props.todoList} setTodoList={props.setTodoList}></Todo>)}
        </div>
    )
};

export default TodoList;