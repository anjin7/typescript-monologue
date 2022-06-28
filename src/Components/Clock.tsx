import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  background-color: white;
  margin-top: 60px;
  border-radius: 15px;
  box-sizing: border-box;
  border: 1px solid skyblue;
  margin: 60px auto;
  padding: 20px;
`;
const Clock = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  font-weight: 900;
  font-size: 40px;
  color: gray;
`;

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function getClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(id))
  }, []);
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const year = time.getFullYear();
  const month = String(time.getMonth()+1).padStart(2, "0");
  const todate = String(time.getDate()).padStart(2, "0");
  const day = week[time.getDay()];

  return (
    <Container>
      <div>{ time.toLocaleTimeString}</div>
      <Clock>{year}.{month}.{todate}.{day}</Clock>
      <Clock>{hours}:{minutes}:{seconds}</Clock>
    </Container>
  )
}
export default getClock;