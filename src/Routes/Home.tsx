import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 100px;
  text-align: center;
`;

function Home() {
  return (
    <Container>
      <div>
        card : resume
      </div>     
      <div>
        card 
      </div>
    </Container>
  )
}
export default Home;