import styled from 'styled-components';
import ToDoList from '../Components/ToDoList';

const Container = styled.div`
  padding: 100px 60px;
  height: 100vh;
  background:linear-gradient(135deg,#fcfaf2, #ffbfc5);
`;

function Todo() {

  return (
    <Container>
      <ToDoList />
    </Container>
  );
}

export default Todo;