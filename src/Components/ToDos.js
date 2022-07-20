import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import styled from 'styled-components';
// import { Link } from "react-router-dom";

const Btn = styled.button`
  background-color: #ffbfc5;
  border: 1px solid #fff;
`;

function ToDos({ text, onBtnClick, id }) {
  return (
    <li>
      <>
        - {text} <Btn onClick={onBtnClick}>DEL</Btn>
      </>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  };
}

export default connect(null, mapDispatchToProps)(ToDos);