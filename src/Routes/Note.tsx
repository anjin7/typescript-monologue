import styled from 'styled-components';

const Container = styled.div`
  padding: 80px 100px;
  height: 100vh;
`;
const NoteCard = styled.div`
  margin: 20px;
  width: 200px;
  height: 300px;
  border: 1px solid #87ceeb;
  background-color: rgba(255,255,255,0.3);
`;
const NoteInput = styled.input`
  width: 180px;
  margin: 0 10px;
`;
const NoteBtn = styled.button`
  background-color: #87ceeb;
  color: gray;
  border: 1px solid gray;
  width: 180px;
  margin: 0 10px;
`;

function Note() {
  return (
    <Container>
      <NoteCard>
        <form>
          <NoteInput type="text"></NoteInput>
          <NoteInput type="text"></NoteInput>
          <br />
          <NoteBtn>Add</NoteBtn>
        </form>        
      </NoteCard>
    </Container>
  )
};
export default Note;