import styled from 'styled-components';


const Container = styled.div`
  height: 1800px;
  padding-top: 100px;
  padding-left: 40px;
`;

function Home() {
  return (
    <Container>
      <div>
        <table>
          <colgroup>
            <col width="40px" />
            <col width="400px" />
            <col width="100px" />
            <col width="40px" />                    
          </colgroup>
          <thead>
            <td>#</td>
            <td></td>
            <td>Date</td>
            <td>delete</td>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>abcdefg</td>
              <td>2022-07-19</td>
              <td>a</td>
            </tr>
            <tr>
              <td>2</td>
              <td>abcd</td>
              <td>2022-07-19</td>
              <td>a</td>
            </tr> 
          </tbody>                
        </table>
      </div>
    </Container>
  )
}
export default Home;