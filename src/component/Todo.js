import React from 'react';
 
const Todo = (props) => {
  // Events
  const deleteHandler = () => {
    props.setTodos(props.todos.filter((el)=> el.id !== props.todo.id));
    // console.log(props.todo);
  };
  const completeHandler = () => {
    props.setTodos(
      props.todos.map((item) => {
        if(item.id === props.todo.id){
          return{
            ...item, complete: !item.complete
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.complete ? 'complete' : ''}`}>{props.text}</li>
      <button className="complete-btn" onClick={completeHandler}><i className="fas fa-check"></i></button>
      <button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
    </div>
  );
};
export default Todo;