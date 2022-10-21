import React, { useState, useEffect } from 'react'
import './App.css';
import styled from 'styled-components'

import TodoForm from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  //RUN ONCE
  // useEffect(() => {
  //   getLocalTodos();
  // }, [])

  // USE EFFECT
  useEffect(() => {
    filterHandler();
    // saveLocalTodos();
  }, [todos, status]);

  // FUNCTIONS
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // const saveLocalTodos = () => {
  //     localStorage.setItem('todos', JSON.stringify(todos))
  // };

  // const getLocalTodos = () => {
  //   if (localStorage.getItem('todos') === null) {
  //     localStorage.setItem('todos', JSON.stringify([]))
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem('todos'));
  //     setTodos(todoLocal)
  //   }
  // }
  

  return (
    <Container>
      <div className='app-container'>
        <header>
          <h1>Todo list</h1>
        </header>
        <TodoForm
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus} />

        <TodoList setStatus={setStatus} setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  padding: 100px 0;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(118,255,154,1) 0%, rgba(78,195,243,1) 3%, rgba(255,222,73,1) 100%);

  header{
    margin-bottom: 70px;
    font-size: 25px;
    color: white;
  }

  .app-container {  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

`