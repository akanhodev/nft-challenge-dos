import React from "react";
import styled from "styled-components";
import SmallHeading from "../smallHeading/SmallHeading";
import Fade from "react-reveal/Fade";

const MainTitle = ({ title, subtitle, para }) => {
  return (
    <MainTitleStyled>
      <Fade bottom>
        <SmallHeading title={subtitle} />
        <h2>{title}</h2>
        <p>{para}</p>
      </Fade>
    </MainTitleStyled>
  );
};

const MainTitleStyled = styled.div`
  h2 {
    padding-top: 1rem;
    font-weight: 500;
  }
  p {
    padding: 1.3rem 0;
    opacity: 0.6;
  }
`;
export default MainTitle;
