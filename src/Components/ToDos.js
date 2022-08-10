import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import { remove } from "../store";
// import { Link } from "react-router-dom";

const Btn = styled.button`
  background-color: #ffbfc5;
  border: 1px solid #fff;
`;
const TodoList = styled.div`
  margin: 8px 4px;
`;

function ToDos({ text, onBtnClick, id }) {
  return (
    <li>
      <TodoList>
        - {text} <Btn onClick={onBtnClick}>DEL</Btn>
      </TodoList>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id))
  };
}

export default connect(null, mapDispatchToProps)(ToDos);