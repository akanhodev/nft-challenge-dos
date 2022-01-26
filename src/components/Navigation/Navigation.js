import React from "react";
import styled from "styled-components";
import Logo from "../../img/logo2.png";

const Navigation = () => {
  return (
    <NavigationStyled>
      <div className="logo">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <ul className="nav-items">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#activity">Activity</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <div className="btn-primary">GET CONNECTED</div>
      </ul>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.div`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-items {
    display: flex;
    align-items: center;
    li {
      margin: 0 1rem;
    }
    .btn-primary {
      margin-left: 3rem;
      background-color: rgba(57, 95, 246, 0.6);
      padding: 1rem 1rem;
      border-radius: 70px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      &:hover {
        background-color: rgba(57, 95, 246, 1);
      }
    }
  }
  .logo {
    img {
      width: 60px;
    }
  }
`;

export default Navigation;
