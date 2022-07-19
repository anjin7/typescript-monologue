
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../store";
import ToDos from "../Components/ToDos";
import styled from 'styled-components';


const Container = styled.div`
  padding: 100px;
  height: 1800px;
  background:linear-gradient(135deg,#fcfaf2, #ffbfc5);
`;

function Todo() {
  const [text, setText] = useState("");
  const toDo = useSelector((state) => state);
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    dispatch(actionCreators.addToDo(text));
    setText("");
  }
  return (
    <Container>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDo.map(toDo => (
          <ToDos {...toDo} key={toDo.id} />
        ))}
      </ul>
    </Container>
  );
}

export default Todo;