import React from "react";
import styled from "styled-components";
import { SectionStyled } from "../../Layouts";
import MainTitle from "../MainTitle/MainTitle";
import data2 from "../../data2";
import GradientCard from "../GradientCard/GradientCard";
import CtaButton from "../ctaButton/CtaButton";

const DemonstrationSection = () => {
  const ctaButton = <CtaButton name={"Place Bid"} />;
  return (
    <DemonstrationStyled>
      <SectionStyled>
        <div className="title-con">
          <MainTitle
            title={"Live Demonstration"}
            subtitle={"Live Demonstration"}
            para={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
            }
          />
        </div>

        <div className="gradient-cards-on">
          {data2 &&
            data2.map((data) => {
              return (
                <span>
                  <GradientCard
                    className="style-card"
                    image={data.image}
                    avatar={data.avatar}
                    name={data.name}
                    price={data.price}
                    title={data.title}
                    ctaButton={ctaButton}
                  />
                </span>
              );
            })}
        </div>
      </SectionStyled>
    </DemonstrationStyled>
  );
};

const DemonstrationStyled = styled.div`
  .gradient-cards-on {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
`;

export default DemonstrationSection;
