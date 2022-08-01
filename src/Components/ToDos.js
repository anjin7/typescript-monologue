import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
// import { Link } from "react-router-dom";

const Btn = styled.button`
  background-color: #ffbfc5;
  border: 1px solid #fff;
`;
const TodoList = styled.li`
  margin: 8px 4px;
`;

function ToDos({ text, onBtnClick, id }) {
  return (
    <TodoList>
      <>
        - {text} <Btn onClick={onBtnClick}>DEL</Btn>
      </>
    </TodoList>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(ToDos);