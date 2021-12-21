import React from "react";
import styled from "styled-components";
import data from "../../data";

const SellerCard = () => {
  return (
    <SellerCardStyled>
      {data &&
        data.map((item) => {
          return (
            <div className="SellerCard" key={item.id}>
              <div className="number">
                <p> 0 {item.id}</p>
              </div>
              <div className="profile">
                <img src={item.image} alt="" />
                <div className="text">
                  <h4>{item.name}</h4>
                  <p>{item.currency}</p>
                </div>
              </div>
            </div>
          );
        })}
    </SellerCardStyled>
  );
};

const SellerCardStyled = styled.div`
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.03);
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 2px 2px 2px #8651D5;
  }
  .SellerCard {
    display: flex;
    align-items: center;
    padding: 1.5rem 1rem;

    .number {
      padding-right: 1rem;
      font-size: 1.6rem;
      opacity: 0.5;
      p {
        font-weight: 700;
      }
    }
    .profile {
      display: flex;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-right: 1rem;
        object-fit: cover;
        border: 1px solid #395ff6;
      }
    }
  }
`;

export default SellerCard;
