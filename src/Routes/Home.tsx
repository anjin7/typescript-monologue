import styled from 'styled-components';
import Board from '../Components/Board';


const Container = styled.div`
  height: 100vh;
  padding-top: 100px;
  padding-left: 40px;
`;

function Home() {
  return (
    <Container>
      <Board />
    </Container>
  )
}
export default Home;