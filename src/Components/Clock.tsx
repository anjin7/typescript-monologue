import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  position: fixed;
  right: 24px;
  /* border-bottom: 2px solid skyblue;  */
  background-color: rgba(255, 251, 237, 0.4);
  border-radius: 8px;
`;
const ClockList = styled.div`

  margin: 0 auto;
  text-align: center;
  padding: 8px 16px;
  font-weight: 900;
  font-size: 16px;
  color: rgb(100, 100, 100);
`;

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(id))
  }, []);
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  // const seconds = String(time.getSeconds()).padStart(2, "0");
  const year = time.getFullYear();
  const month = String(time.getMonth()+1).padStart(2, "0");
  const todate = String(time.getDate()).padStart(2, "0");
  const day = week[time.getDay()];

  return (
    <Container>
      <ClockList>{year}. {month}. {todate}. {day} {hours}:{minutes}</ClockList>
    </Container>
  )
}
export default Clock;