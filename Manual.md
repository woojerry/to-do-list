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

## C-1. TodoTemplate 만들기 
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

## C-2. TodoHead 만들기
```jsx
1. TodoHead.js 파일 생성
2. CSS로 스타일링 및 TodoHead Component생성
  - 날짜 및 요일
3. App.js에서 import TodoHead from './TodoHead.js'; 해와 사용   
```

## C-3. TodoList 만들기
```jsx
1. TodoList.js 파일 생성
2. CSS로 스타일링 및 TodoList Component생성
3. App.js에서 import TodoHead from './TodoList.js'; 해와 사용
  - <TodoHead>와 같이 <TodoTemplate>안에 배치
```

## C-4.TodoItem 만들기
```jsx
1.TodoItem.js 파일 생성
2. Styled Component로 CSS꾸며 사용
3. 구성요소 <CheckCircle>, <Text>, <Remove>, 
4. <MdDone>,<MdDelete> 아이콘 import
5. TodoList에서 import해 사용. props문법 적용
```
```jsx
function TodoList() {
    return (
        <TodoListBlock>
          <TodoItem text="프로젝트 생성하기" done={true} />
          <TodoItem text="컴포넌트 스타일링 하기" done={true} />
          <TodoItem text="Context 만들기" done={false} />
          <TodoItem text="기능 구현하기" done={false} />
        </TodoListBlock>
      );
}
```
```jsx
function TodoItem(props) { // props 대신 { id, done, text } 가능
  return (                 // 그럴 경우에는 props.done 이 아닌 done으로 사용
      
    <TodoItemBlock>
      <CheckCircle done={props.done}>{props.done && <MdDone />}</CheckCircle> // done이 true면 MdDone유무 및 색 바꿔줌
      <Text done={props.done}>{props.text}</Text>  // done의 값에 따라 text색 바꿔줌
      <Remove>                              // TodoItemBlock 위에 커서가 있을 때 보여주는 Remove Component
        <MdDelete />
      </Remove>
    </TodoItemBlock>
    
  );
}
```

## C-5. TodoCreate 만들기
> 새로운 항목을 등록할 수 있는 컴포넌트로 useState를 이용해 open값을 관리하고 아이콘 및 버튼색상 변화
```jsx
여기서는 새로운 값을 등록하려고 버튼을 눌렀을 때 input태그를 보여주는 형식이다.
MdAdd아이콘 import
```
```jsx
function TodoCreate() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open); // open값 바꿔주기
  // onClick ={()=> setOpen(!open)}
  return (
    <>
      {open && ( // open=true일 때 컴포넌트 보여줌.
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>  // 버튼을 눌렀을 때, open값 변경
        <MdAdd />
      </CircleButton>
    </>
  );
}
```
<hr>

## Context API를 활용해 값 보여주기
> 각 컴포넌트들의 구조가 App > TodoList > TodoItem 일 때, props문법 대신 Context API를 활용해 원래 할일들에 대한 정보를 보여주기
```jsx
구조는 APP -> TodoList -> TodoItem 으로 할일의 데이터 바인딩을 하려고 한다.
1. useContext를 import해온 뒤, 범위를 생성하고 App.js에서 TodoList.js로 보내야 하므로 export도 해준다.
2. TodoList.js에서 useContext로 공유된 값 가져와 map으로 반복해주기
```
```jsx
// App.js에서 1번
import React, {Component, useState, useContext} from 'react'; 

export let 할일context = React.createContext(); // 범위 생성 및 export

return (
    <>
    <할일context.Provider value={할일}> // 범위로 감싸기 
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
```
```jsx
// TodoList.js에서 2번 

import {할일context} from './App.js' // 공유된 값 가져오기 

function TodoList() {

  let 할일 = useContext(할일context); // 공유된 값 가져오기
    
  return (
        <TodoListBlock>
          {할일.map(({id, text, done}) =>(
            <TodoItem key={id} text={text} done={done}/>
          ))}
        </TodoListBlock>
      )
}
```



## 해야할 것 
> 기본적인 틀 및 CSS에 대한 이해를 거쳐 이제 내 스스로 짜보려하나 쉽지않았다.
```
기본 값 데이터 바인딩 (기본 값 받아와 State로 저장해 props로 데이터 바인딩 APP-TodoList-TodoItem)
-> map으로 돌려주기 ..
-> input데이터 받아서 추가 기능
-> 삭제 기능 
```




