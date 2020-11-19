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

    return (
        <TodoListBlock>
            
          {할일.map((할일들) =>(
            <TodoItem key={할일.id} text={할일.text} done={할일.done}/>
          ))}
          
          
      
        </TodoListBlock>
      )
}

export default TodoList;