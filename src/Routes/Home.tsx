import { useEffect, useState } from 'react';
import styled from 'styled-components';
import App from '../App';
import LogIn from '../Components/LogIn';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 100px;
`;

function Home() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <Container>
      {init ? <App isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <LogIn />
    </Container>
  )
}
export default Home;