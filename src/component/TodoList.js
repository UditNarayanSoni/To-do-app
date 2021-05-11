import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

  return (
      <div className="todo-container">
        <ul className="todo-list">
        {props.filteredTodos.map(todo=>(
          <Todo 
          key={todo.id} 
          text={todo.text} 
          todo={todo}
          setTodos={props.setTodos} 
          todos={props.todos}/>
        ))}
        </ul>
      </div>
    );
};
export default TodoList;