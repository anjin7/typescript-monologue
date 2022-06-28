import styled from 'styled-components';
import Clock from '../Components/Clock';

const Container = styled.div`
  height: 1000px;
`;

function Home() {
  return (
    <Container>
      <div></div>
      <Clock />
    </Container>
  )
}
export default Home;