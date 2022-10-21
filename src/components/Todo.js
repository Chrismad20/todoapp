import React from 'react'
import styled from 'styled-components'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsCheck } from 'react-icons/bs'

function Todo( {text, todo, todos, setTodos, setStatus}) {

    const del = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const complete = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }));
    }

    const sort = () => {

    }
  return (
    <ContainerTodo>
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
        <button className='complete-btn' onClick={complete}>
            <BsCheck size={30}></BsCheck>
        </button>
        <button className='trash-btn' onClick={(del)}>
            <AiOutlineDelete size={25}></AiOutlineDelete>
        </button>
    </ContainerTodo>
  )
}

export default Todo



const ContainerTodo = styled.div`

    padding: 10px 0;
    padding-left: 10px;

    display: flex;
    border-bottom: 1px solid hsl(233, 11%, 84%);
    justify-content: space-between;
    align-items: center;
    
    .todo-item{
        color: hsl(236, 9%, 50%);
        font-size: 1.1rem;
        font-weight: 500;
        flex: 1;
    }

    .completed {
        text-decoration: line-through;
    }

    .complete-btn, .trash-btn {
        color: hsl(233, 11%, 75%);
        border: none;
        background: none;
        cursor: pointer;
        transition: 0.2s ease-in ;
    }

    .complete-btn:hover {
        color: green;
    }
    
    .trash-btn:hover {
        color: red;
    }


`