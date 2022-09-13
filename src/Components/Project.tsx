import styled from 'styled-components';

const Card = styled.div`
  text-align: center;
  line-height: 1.6;
`;

function Project() {
  return (
    <Card>
      <h2>project1</h2>
      <div>설명</div>
      <div>img</div>
    </Card>
  )
}
export default Project;