import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerstate, setburgerstate] = useState(true);
  const cars = useSelector(selectCars);
  console.log(burgerstate);
  return (
    <div>
      <Container>
        <a>
          <img src="/images/logo.svg"></img>
        </a>
        <Menu>
          <a href="#">Model S</a>

          <a href="#">Model Y</a>

          <a href="#">Model 3</a>

          <a href="#">Model X</a>
        </Menu>
        <Rightmenu>
          <a href="#">SHOP</a>
          <a href="#">Tesla Account</a>
          <Custommenu onClick={() => setburgerstate(false)}></Custommenu>
        </Rightmenu>
        <Burgernav show={burgerstate}>
          <Closewrapper>
            <Customclose onClick={() => setburgerstate(true)} />
          </Closewrapper>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>{" "}
          <li>
            <a href="#">Trade - in</a>
          </li>{" "}
          <li>
            <a href="#">CyberTruck </a>
          </li>{" "}
          <li>
            <a href="#">Roadaster</a>
          </li>
        </Burgernav>
      </Container>
    </div>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Rightmenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;

    padding: 10px;
  }
`;

const Custommenu = styled(MenuIcon)`
  cursor: pointer;
`;

const Burgernav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(100%)" : "translateX(0)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;

const Customclose = styled(CloseIcon)`
  cursor: pointer;
`;

const Closewrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  // flex-direction: row-reverse;
  // align-items: right;
`;
