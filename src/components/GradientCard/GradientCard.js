import React, { useState } from "react";
import styled from "styled-components";
// import { InnerLayout } from "../../Layouts";
import time from "../../img/time.svg";
import heart from "../../img/heart.svg";
// import CtaButton from "../ctaButton/CtaButton";
// import {AiOutlineHeart} from 'react-icons/AiOutlineHeart' ;
import { FaHeart, FaRegHeart } from "react-icons/fa";

const GradientCard = ({ title, image, name, price, avatar, ctaButton }) => {
  const [smach, SetSmach] = useState(false);

  const smachgreen = () => {
    return SetSmach(!smach);
  };
  return (
    <GradientCardStyled>
      <div className="g-card">
        <div className="inner-content">
          <div className="image">
            <img src={image} alt={image} />
            <div className="name">
              <img src={avatar} alt={avatar} />
              <p>{name}</p>
            </div>
          </div>
          <div className="card-content">
            <h6 className="card-title">{title}</h6>
            <p>
              Price <span className="price">{price}</span> &nbsp; &nbsp;
              <span className="1-text">1 of 15</span>
            </p>
            <p>
              Highest Bid : &nbsp; <span className="price">{price}</span>
            </p>
            <div className="duration">
              <p>
                <img src={time} alt={time} />7 Hours Ago
              </p>
              <p>
                {/* <img
                  src={heart}
                  alt={heart}
                  className={smach ? "putColor" : "anycolor"}
                  onClick={() => {
                    smachgreen();
                    console.log("object");
                  }}
                  className="putColor"
                /> */}
                {smach ? (
                  <FaRegHeart
                    style={{ color: "#679755", cursor: "pointer" }}
                    onClick={() => {
                      smachgreen();
                      console.log("object");
                    }}
                  />
                ) : (
                  <FaHeart
                    style={{ color: "#679755", cursor: "pointer" }}
                    onClick={() => {
                      smachgreen();
                      console.log("object");
                    }}
                  />
                )}
                &nbsp; 150 Likes
              </p>
            </div>
            <div className="ctn-btn">{ctaButton}</div>
          </div>
        </div>
      </div>
    </GradientCardStyled>
  );
};

const GradientCardStyled = styled.div`
  border-radius: 20px;
  font-size: 1rem;
  transition: all 0.4s ease-in-out;
  padding: 0.05px 0.05px 0.05px;
  background: linear-gradient(90deg, #7f41db 0%, #022894 100%);
  animation: colors 3s infinite ease-in-out;
  @keyframes colors {
    0% {
      background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
    }
    50% {
      background: linear-gradient(90deg, #7f41db 0%, #022894 100%);
    }
    70% {
      background: linear-gradient(130deg, #022894 0%, #7f41db 100%);
    }
    100% {
      background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
    }
  }
  .g-card {
    margin: 0.2rem;
    .inner-content {
      background-color: #091026;
      padding: 2rem;
      border-radius: 20px;
      /* margin: 0.2 0rem; */

      .image {
        width: 100%;
        position: relative;

        img:first-child {
          width: 100%;
          object-fit: cover;
          height: 300px;
          border-radius: 10px;
        }
        .putColor {
          background-color: green;
        }
        .name {
          position: absolute;
          left: 50%;
          bottom: -26px;
          display: flex;
          align-items: center;
          border-radius: 50px;
          width: 75%;
          transform: translateX(-50%) !important;
          padding: 0.5rem 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background-color: #03091f;
          img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 2rem;
          }
        }
      }
    }
    .card-content {
      padding-top: 3rem;
      .card-title {
        font-size: 1.3rem;
        font-weight: 500;
        padding-bottom: 0.6rem;
      }
      .price {
        color: #6bbe92;
      }
      .1-text {
        opacity: 0.5;
      }
      .duration {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px dashed rgba(255, 255, 255, 0.2);
        display: flex;
        justify-content: space-between;
        p {
          display: flex;
          align-items: center;
          img {
            object-fit: cover;
            width: 18px;
            margin-right: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        p:last-child {
          img {
            cursor: pointer;
          }
        }
      }
      .ctn-btn {
        width: 100%;
        a {
          margin: 0.6rem 0;
          display: inline-block;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;

export default GradientCard;
