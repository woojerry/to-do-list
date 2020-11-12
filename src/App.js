/* eslint-disable */
import React, {Component} from 'react'; 
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './TodolistTemplate.js';
import TodoHead from './TodoHead.js';
import TodoList from './TodoList.js';

const GlobalStyle = createGlobalStyle` // 전역에 styled component 사용
  body {
    background: #e9ecef;
  }
`;



function App() {
  return (
    <>
    <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
