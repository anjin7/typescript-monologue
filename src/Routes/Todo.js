import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDos from "../Components/ToDos";
import styled from 'styled-components';

const Container = styled.div`
  padding: 100px 60px;
  height: 100vh;
  background:linear-gradient(135deg,#fcfaf2, #ffbfc5);
`;
const TodoTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #ffbfc5;
`;
const TodoInput = styled.input`
  border: 1px solid #ffbfc5;
  margin: 8px 12px 8px 0;
`;
const TodoBtn = styled.button`
  background-color: #ffbfc5;
  border: 1px solid #fff;
`;

function Todo({ toDo, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <Container>
      <TodoTitle>To Do</TodoTitle>
      <form onSubmit={onSubmit}>
        <TodoInput type="text" value={text} onChange={onChange} />
        <TodoBtn>Add</TodoBtn>
      </form>
      <ul>
        {toDo.map(toDo => (
          <ToDos {...toDo} key={toDo.id} />
        ))}
      </ul>
    </Container>
  );
}
function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(add(text))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Todo);