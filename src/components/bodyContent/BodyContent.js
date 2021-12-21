import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Layouts";
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
      </InnerLayout>
    </BodyContentStyled>
  );
};

const BodyContentStyled = styled.main`
  .sellerCards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 2rem 0;
  }
`;

export default BodyContent;
