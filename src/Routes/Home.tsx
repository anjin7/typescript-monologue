import styled from 'styled-components';
import LogIn from '../Components/LogIn';

const Container = styled.div`
  height: 100vh;
  padding-top: 100px;
  padding-left: 40px;
`;

function Home() {
  return (
    <Container>
      <LogIn />
    </Container>
  )
}
export default Home;