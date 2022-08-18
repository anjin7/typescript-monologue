import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 25px;
  text-align: center;
  padding: 160px 0;
`;
const InnerBox = styled.div`
  margin: 0 auto;
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputBox = styled.input`
  margin: 10px 0;
  height: 32px;
  width: 100%;
`;

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event: { target: { name: any; value: any; }; }) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };
  return (
    <Container>
      <InnerBox>
        <form onSubmit={onSubmit}>
          <InputBox
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
          />
          <InputBox
            name="password"
            type="password"
            placeholder="PassWord"
            required
            value={password}
            onChange={onChange}
          />
          <InputBox type="submit" value="Log In" />
        </form>
      </InnerBox>
    </Container>
  )
}
export default LogIn;