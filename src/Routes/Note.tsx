import styled from 'styled-components';

const Container = styled.div`
  padding: 80px 100px;
  height: 100vh;
`;
const NoteList = styled.ul`
  margin: 20px;
`


function Note() {
  return (
    <Container>
      <NoteList>
        <input></input>
      </NoteList>
      <NoteList>
        <input></input>
      </NoteList>
    </Container>
  )
};
export default Note;