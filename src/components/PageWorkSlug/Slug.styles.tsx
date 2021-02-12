import styled from "styled-components";

export const WorkArticle = styled.article`
  width: 100%;
  max-width: 100%;
  margin: 0;
  box-sizing: border-box;
  padding-top: 50px;

  @media screen and (min-width: 1300px) {
    padding: 100px 0 0;
  }

  hgroup {
    position: relative;
  }

  img {
    margin: 0;
    vertical-align: middle;
  }

  @media screen and (max-width: 1100px) {
    h1 {
      margin-left: 0;
      margin-top: -22px;
    }
  }

  @media screen and (max-width: 600px) {
    h2 {
      margin-bottom: 20px;
    }
  }
`;
