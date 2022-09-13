import styled from 'styled-components';
import Project from '../Components/Project';

const Container = styled.div`
  padding-top: 80px;
  height: 1600px;
`;

function Projects() {
  return (
    <Container>
      Project slide
      <Project />
    </Container>
  )
};
export default Projects;