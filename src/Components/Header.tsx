import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import Clock from './Clock';

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: black;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  font-weight: 700;
  font-size: 16px;
  color: rgb(128, 128, 128);
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: gray;
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 36px;
  height: 2px;
  border-radius: 5px;
  bottom: -8px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: skyblue;
`;


const navVariants = {
  top: {
    background: "linear-gradient(rgba(209, 209, 209, 0.35),rgba(255,255,255,0))",
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  scroll: {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
};


function Header() {

  const homeMatch = useRouteMatch("/");
  const todoMatch = useRouteMatch("/todo");
  const noteMatch = useRouteMatch("/note");

  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation]);

  return (
    <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
      <Col>
        <Items>
          <Item>
            <Link to="/">
              Monolog {homeMatch?.isExact && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/todo">
              TodoList {todoMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/note">
              Note {noteMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Clock />
      </Col>
    </Nav>
  );
}

export default Header;