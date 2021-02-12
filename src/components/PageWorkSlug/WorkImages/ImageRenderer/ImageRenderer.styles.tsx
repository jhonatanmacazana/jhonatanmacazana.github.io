import styled from "styled-components";

export const ImgContainer = styled.div`
  margin: 25px 0;
  max-width: 100%;
  box-sizing: border-box;
  transition: background-color 0.25s ease-in,
    transform 0.25s cubic-bezier(0.37, 1.05, 1, 1), box-shadow 0.1s ease;
  border-radius: 3px;
  transform: translateY(80px);

  @media screen and (max-width: 1100px) {
    margin: 0 0;
    padding: 10px 20px;
  }

  @media screen and (max-width: 600px) {
    margin: 0 0;
    padding: 4px 0px;
  }

  img,
  video {
    transition: background-color 0.3s ease-in,
      transform 0.4s cubic-bezier(0.37, 1.05, 1, 1), opacity 0.2s ease-in;
    opacity: 0.8;
    border-radius: 3px;
    max-width: 100%;
    box-shadow: 0px 1px 19px rgba(0, 0, 0, 0.05),
      0px 1px 9px rgba(0, 0, 0, 0.06);
  }

  @media screen and (max-width: 600px) {
    img,
    video {
      margin: 0 0;
      border-radius: 3px;
    }
  }
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 5px 14px 0 rgba(97, 88, 97, 0.05);
  }

  &:hover img {
    transform: scale(1.021);
  }

  .imgContainerAnim img {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  .imgContainerAnim {
    transform: translateY(0);
  }
`;
