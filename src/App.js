/* eslint-disable */
import React, {Component, useState, useContext} from 'react'; 
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './TodolistTemplate.js';
import TodoHead from './TodoHead.js';
import TodoList from './TodoList.js';
import TodoCreate from './TodoCreate.js';
import Data from './data.js';

const GlobalStyle = createGlobalStyle` // 전역에 styled component 사용
  body {
    background: #e9ecef;
  }
`;

export let 할일context = React.createContext(); // 범위 생성 

function App() {


let [할일, 할일변경] = useState(Data);




  return (
    <>
    <할일context.Provider value={할일}>
      <GlobalStyle />
        <TodoTemplate>

          <TodoHead />

        
                <TodoList/>
          
          
          <TodoCreate />

        </TodoTemplate>
    </할일context.Provider>
    </>
  );
}

export default App;
