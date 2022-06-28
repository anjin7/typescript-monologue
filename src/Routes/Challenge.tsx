import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
`;
const ChallengeList = styled.ul`
  padding: 80px 100px;
`


function Challenge() {
  return (
    <Container>
      <ChallengeList>
        <li>
          challenge 1
        </li>
        <li>
          challenge 2
        </li>
        <li>
          challenge 3
        </li>
      </ChallengeList>
    </Container>
  )
};
export default Challenge;