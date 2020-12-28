/* eslint-disable */
import React, { useReducer, createContext, useContext, useRef } from 'react';
const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: true,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'Create':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      ); // id가 같으면  done의 상태 반대로 ..? 다르면 그냥 todo
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id); // 그 id만 제외시키기
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const TodoStateContext = React.createContext(); // 컴포넌트에서 useContext 바로 사용하도록.
export const TodoDispatchContext = React.createContext();
export const TodoNextIdContext = React.createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5); // nextId 값은 useRef로 관리
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
