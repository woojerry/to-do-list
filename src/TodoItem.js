import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { TodoDispatchContext } from './TodoContext.js';
//import {할일context} from './App.js'

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

//TodoItemBlock 위에 커서가 있을 때, Remove 컴포넌트를 보여주라는 의미
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

// function TodoItem({id, text, done}) {
// const onRemove = () => {}

// //   return (
// //     <TodoItemBlock id={id}>
// //       <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
// //       <Text done={done}>{text}</Text>
// //       <Remove onClick ={()=>{}}>
// //         <MdDelete />
// //       </Remove>
// //     </TodoItemBlock>
// //   );
// // }

function TodoItem({ id, done, text }) {
  const todoDispatch = useContext(TodoDispatchContext);
  const onToggle = () => todoDispatch({ type: 'TOGGLE', id }); // id payload?
  const onRemove = () => todoDispatch({ type: 'REMOVE', id });

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem); // 불필요한 리렌더링을 방지
