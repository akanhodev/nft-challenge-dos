import React from "react";
import styled from "styled-components";
import { SectionStyled } from "../../Layouts";
import MainTitle from "../MainTitle/MainTitle";
import Fade from "react-reveal/Fade";
import blogs from "../../blog";

const BlogSection = () => {
  return (
    <BlogSectionStyled>
      <SectionStyled>
        <div className="title-con">
          <Fade bottom>
            <MainTitle
              title={"Popular Blogs"}
              subtitle={"Our Top Blogs"}
              para={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
              }
            />
          </Fade>
          <div className="blogs">
            {blogs &&
              blogs.map((blog) => {
                return (
                  <div className="blog" key={blog.id}>
                    <div className="image">
                      <img src={blog.image} alt="" />
                    </div>
                    <h6>{blog.title}</h6>
                    <div className="blogDetails">
                      <p>Creator : </p>
                      <p>{blog.name}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </SectionStyled>
    </BlogSectionStyled>
  );
};
const BlogSectionStyled = styled.div`
  .blogs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    padding-top: 2rem;
    .blog {
      background-color: rgba(255, 255, 255, 0.03);
      boder-radius: 20px;
      width: 250px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

      .image {
        height: 300px;
        width: 100%;
        overflow: hidden;
        /* border-top-left-radius: 20px;
        border-top-right-radius: 20px; */
        transition: all 0.4s ease-in-out;
        img {
          height: 90%;
          width: 100%;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          object-fit: cover;
          filter: grayscale(50%);
          &:hover {
            transition: all 0.8s ease-in-out;
            transform: scale(1.2) rotate(15deg);
          }
        }
      }
      h6 {
        margin-top: -20px;
        margin-left: 10px;
        width: 100%;
        flex: 1;
        display: flex;
        font-weight: 500;
        font-size: 1.3rem;
        padding: 1 1 1 0rem;
      }
      .blogDetails {
        /* margin-top: -20px; */
        padding-top: 0.2rem;
        padding-bottom: 1.5rem;
        padding-right: 1rem;
        padding-left: 1rem;
        width: 100%;
        p:first-child {
          padding-right: 20px;
          opacity: 0.5;
          margin-left: -07px;
        }
        flex: 1;
        display: flex;
        /* flex-direction: column; */
        align-items: center;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .blogs {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 750px) {
    .blogs {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default BlogSection;
