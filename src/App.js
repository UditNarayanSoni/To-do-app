import React, { useState,useEffect } from "react";
import './App.css';
import Form from './component/Form.js';
import TodoList from "./component/TodoList";

function App() {
  
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  // Run only when app start
  useEffect(()=>{
    getLocalTodos();
  },[]);

  // Use Effect
  useEffect (() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]); 

  // Functions
  const filterHandler = () => {
    switch(status){
      case 'complete':
        setFilteredTodos(todos.filter(todo => todo.complete === true));
        break;
      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.complete === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // Save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  };  

  return (
    <>
      <header>
        <h1>Udit's To-Do Website</h1>
      </header>
      <Form 
        setInputText={setInputText} 
        setStatus={setStatus}
        inputText={inputText} 
        setTodos={setTodos} 
        todos={todos}
      />
      <TodoList 
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos} 
      />
    </>
  );
}

export default App;
