import styled from "styled-components";

export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1090px;
  max-width: 100%;
  margin: auto;
  margin-top: 0px;
  position: relative;
  top: -80px;

  @media screen and (max-width: 1100px) {
    justify-content: center;
    top: -24px;
  }
`;

export const WorkImagesWrapper = styled.div`
  @keyframes workImagesAnim {
    0% {
      opacity: 0;
      transform: translateY(200px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  background: rgba(148, 151, 158, 0.1);
  margin-top: 80px;
  opacity: 0;
  min-height: 600px;

  .withAnim & {
    animation: workImagesAnim 0.38s cubic-bezier(0.37, 1.05, 1, 1) 0.55s;
    animation-fill-mode: forwards;
  }

  @media screen and (max-width: 600px) {
    background: none;
  }
`;
