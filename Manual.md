# To-Do-Lists

## A. Setting 
```jsx
1. 작업 폴더의 terminal에서 npx create-react-app to-do-list 입력
2. 생성된 to-do-list 폴더 열기
3. App.js에서 App 컴포넌트에서 <div>만 남기고 지우고 import React, { Component } from 'react'; 하기 
4. App.css App.test.js, logo.svg 파일 제거
```
## B. Component 구상
```jsx
만들어야 할 Component 확인
  - Todo Template : To-do-list의 레이아웃
  - Todo Head : 오늘의 날짜 및 요일 보여주기
  - Todo List : 해야할 일에 대한 Todo Itemd을 렌더링
  - Todo Item : 각 할 일에 대한 정보 렌더링
  - Todo Create : 새로운 할 일을 등록해주는 Component
```
## 페이지에 배경 색상 적용
```jsx
그전에 페이지에 회색 배경색상 적용을 하기 위해 styled-component를 적용
yarn add styled-components를 해준 뒤
```
```jsx
import React from 'react';
import { createGlobalStyle } from 'styled-components'; // import 해오기

const GlobalStyle = createGlobalStyle` // 전역 스타일 적용 컴포넌트 생성
  body {
    background: #e9ecef; // 회색 배경색상 적용
  }
`;

function App() {  // 이 과정에서 Global Style Component로 감싸는 것이 아닌
  return (        // <>로 감싸는 이유는 jsx문법에서는 컴포넌트에 여러 요소가 있을 때,
    <>            // 반드시 부모 요소 하나로 감싸야하기 때문이다.
    <GlobalStyle/>
    <div className="App">
        App
    </div>
    </>
  );
}

export default App;
```

## C. TodoTemplate 만들기 
```jsx
1. TodoTemplate.js 파일 생성
2. CSS로 스타일링 및 TodoTemplate Component 생성
3. App.js에서 import TodoTemplate from './TodoTemplate.js'; 해와 사용
```
```jsx
function TodoTemplate({ children }) { // {children} 는 props??
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}
```

## D. TodoHead 만들기
```jsx
1. TodoHead.js 파일 생성
2. CSS로 스타일링 및 TodoHead Component생성
  - 날짜 및 요일
3. App.js에서 import TodoHead from './TodoHead.js'; 해와 사용   

## E. TodoList 만들기
```jsx
1. TodoList.js 파일 생성
2. CSS로 스타일링 및 TodoList Component생성
3. App.js에서 import TodoHead from './TodoList.js'; 해와 사용
  - <TodoHead>와 같이 <TodoTemplate>안에 배치

