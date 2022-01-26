import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Layouts";
import BlogSection from "../BlogSections/BlogSection";
import ContactSession from "../ContactSession/ContactSession";
import DemonstrationSection from "../demonstrationSection/DemonstrationSection";
import GradientCardSession from "../GradientCardSession/GradientCardSession";
import MainTitle from "../MainTitle/MainTitle";
import SellerCard from "../sellerCard/SellerCard";

const BodyContent = () => {
  return (
    <BodyContentStyled>
      <InnerLayout>
        <MainTitle
          title={"Top Sellers this Month"}
          subtitle={"All Entrepeneurs"}
        />
        <div className="sellerCards">
          <SellerCard />
          <SellerCard />
          <SellerCard />
        </div>
        <BlogSection />
        <GradientCardSession />
        <DemonstrationSection />
      </InnerLayout>
      <ContactSession />
      <footer>
        <p>Copyright ©YourName. All Rights Reserved</p>
      </footer>
    </BodyContentStyled>
  );
};

const BodyContentStyled = styled.main`
  .sellerCards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 2rem 0;
    @media only screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 750px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  footer {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 3rem 0;
    /* height: 80px; */
    background-color: #020a27;
    border-top: 1px dashed rgba(255, 255, 255, 0.08);
  }
`;

export default BodyContent;
