/* eslint-disable */
import React, { Component, useState, useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './TodolistTemplate.js';
import TodoHead from './TodoHead.js';
import TodoList from './TodoList.js';
import TodoCreate from './TodoCreate.js';
import { TodoProvider } from './TodoContext.js';
// import Data from './data.js';

const GlobalStyle = createGlobalStyle` // 전역에 styled component 사용
  body {
    background: #e9ecef;
  }
`;

//export let 할일context = React.createContext(); // 범위 생성
//export let 할일변경context = React.createContext();
// let [할일, 할일변경] = useState(Data);
//console.log(할일);
function App() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </>
  );
}

export default App;
