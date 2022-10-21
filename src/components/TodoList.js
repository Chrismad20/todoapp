import React, { useState } from 'react'
import Todo from './Todo'
import styled from 'styled-components'


function TodoList( { todos, setTodos, setStatus, filteredTodos } ) {
 


  return (
    <Container className='container'>
      <ul className='todo-list'>
      {filteredTodos.map((todo) => {
        const {id, text} = todo
        return <Todo
        key={id}
        text={text}
        setTodos={setTodos}
        todos={todos}
        todo={todo} 
        setStatus={setStatus} />
        
      })}
      </ul>
      
    </Container>
  )
}

export default TodoList

const Container = styled.div`
  height: 100%;
  width: 33rem;
  background: hsl(0, 0%, 98%);
  border-radius: 5px;
  margin-top: 100px;
  
  
  .todo-list {
    list-style: none;
    
  }

`