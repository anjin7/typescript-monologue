function Board() {
  return (
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
  )
}

export default Board