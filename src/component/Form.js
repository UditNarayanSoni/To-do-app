import React from 'react';

const Form = (props) => {
  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    props.setTodos([...props.todos, {text: props.inputText, complete: false, id: Math.random()*1000}]);
    props.setInputText("");
  };
  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  }
  return(
    <form>
      <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fa fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todo" onChange={statusHandler} className="filter-todo">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
};
export default Form;