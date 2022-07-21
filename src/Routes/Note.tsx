import styled from 'styled-components';

const Container = styled.div`
  padding-top: 80px;
  height: 1600px;
`;
const NoteCard = styled.div`
  margin: 20px;
  width: 400px;
  height: 200px;
  border: 1px solid #87ceeb;
  background-color: rgba(255,255,255,0.3);
  margin: 0 auto;
`;
const NoteInput = styled.input`
  width: 380px;
  margin: 4px 10px;
`;
const NoteBtn = styled.button`
  background-color: #87ceeb;
  border: 1px solid gray;
  width: 380px;
  margin: 4px 10px;
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