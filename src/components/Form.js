import React, { useEffect } from 'react'
import styled  from 'styled-components'
import { RiAddBoxFill } from 'react-icons/ri'


function TodoForm( { setInputText, setTodos, todos, inputText, filteredTodos,  setStatus } ) {


  const inputVal = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }

  const handleClick = (e) => {
    if (inputText === '') return
    setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}, ])
    setInputText('')
  }

  const statusHandler = (e) => {
    if (e.target.value === 'completed') {
      setStatus('completed')
    } else if (e.target.value === 'uncompleted') {
      setStatus('uncompleted')
    } else {
      setStatus('all')
    }
    return
  }

  const keyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }


  return (
    <div>
        <Container>
            <input value={inputText} type='text' className='myInput' placeholder='Add todo' onChange={inputVal} onKeyDown={keyDown} />
            
            <div className='select'>
              <select onChange={statusHandler}>
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='uncompleted'>Uncompleted</option>
              </select>
            </div>
        </Container>
    </div>
  )
}

export default TodoForm

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  .myInput {
    height:  50px;
    width: 30rem;
    border-radius: 3px;
    border: none;
    background: hsl(0, 0%, 98%);
    color: hsl(236, 9%, 50%);
    padding-right: 20px;
    padding-left: 20px;
    font-size: 20px;
  }

  .addBtn {
    background-color: hsl(0, 0%, 98%);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .icon {
    font-size: 45px;
    color: orange;
  }

`
