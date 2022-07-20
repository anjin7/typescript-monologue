function Board() {
  return (
    <>
      <table>
        <colgroup>
          <col width="40px" />
          <col width="400px" />
          <col width="100px" />
          <col width="40px" />                    
        </colgroup>
        <thead>
          <tr>
            <td>#</td>
            <td></td>
            <td>Date</td>
            <td>delete</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>abcdefg</td>
            <td>2022-07-19</td>
            <td>x</td>
          </tr>
          <tr>
            <td>2</td>
            <td>abcd</td>
            <td>2022-07-19</td>
            <td>x</td>
          </tr> 
        </tbody>                
      </table>
    </>
  )
}

export default Board