import styled from 'styled-components';
import LogIn from '../Components/LogIn';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 100px;
`;

function Home() {
  return (
    <Container>
      <LogIn />
    </Container>
  )
}
export default Home;