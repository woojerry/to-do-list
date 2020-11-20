import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem.js';
import {할일context} from './App.js'

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {

  let 할일 = useContext(할일context); 

   // let 받아온값 = props.
  // const 할일들 = props.할일.map((id, text, done) => (
  //  <TodoItem text={props.할일.text} done={props.할일.done} />
  // )) 

    return (
        <TodoListBlock>
            
          {할일.map(({id, text, done}) =>(
            <TodoItem key={id} text={text} done={done}/>
          ))}
         
          <TodoItem text="ww" done={할일.done} />
        
          
          
      
        </TodoListBlock>
      )
}

export default TodoList;