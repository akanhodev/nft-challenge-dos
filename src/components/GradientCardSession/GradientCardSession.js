import React from "react";
import styled from "styled-components";
import { SectionStyled } from "../../Layouts";
import GradientCard from "../GradientCard/GradientCard";
import MainTitle from "../MainTitle/MainTitle";
import data1 from "../../data1";
// import bitcoin2 from "../../img/bitcoin2.jpg";
import CtaButton from "../ctaButton/CtaButton";

const GradientCardSession = () => {
  return (
    <GradientCardSessionStyled>
      <SectionStyled>
        <div className="title-con">
          <MainTitle
            title={"New Upcoming Items"}
            subtitle={"Discover Upcoming Items"}
            para={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
            }
          />
        </div>
        <div className="gradients-card-con">
          {data1 &&
            data1.map((data) => {
              return (
                <span>
                  <GradientCard
                    className="style-card"
                    image={data.image}
                    avatar={data.avatar}
                    name={data.name}
                    price={data.price}
                    title={data.title}
                  />
                </span>
              );
            })}
        </div>
        <div className="cta-btn">
          <CtaButton name={"View More"} />
        </div>
      </SectionStyled>
    </GradientCardSessionStyled>
  );
};

const GradientCardSessionStyled = styled.div`
  .gradients-card-con {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
  .cta-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export default GradientCardSession;
