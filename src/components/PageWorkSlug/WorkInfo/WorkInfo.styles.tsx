import styled from "styled-components";

export const WorkWrapper = styled.div`
  h2 {
    font-size: var(--bigBodySize);
    font-weight: 500;
    line-height: 149.7%;
    color: #282c35;
    margin: 0;
    margin-top: -6px;
    margin-bottom: 47px;
  }
`;

export const WorkInfoWrapper = styled.div`
  @keyframes workInfoAnim {
    0% {
      opacity: 0.1;
      transform: translateY(80px);
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  padding-top: 25px;
  opacity: 0;

  .withAnim & {
    animation: workInfoAnim 0.35s cubic-bezier(0.37, 1.05, 1, 1);
    animation-fill-mode: forwards;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  margin-left: -60px;
  width: 1290px;
  max-width: 100%;
  margin: auto;

  @media screen and (max-width: 1100px) {
    padding: 0 90px 0 40px;
    box-sizing: border-box;
  }

  @media screen and (max-width: 600px) {
    padding: 0 22px 0 22px;
    box-sizing: border-box;
  }
`;

export const TopInfo = styled.div`
  width: 100%;
  margin: auto;
  margin-left: 100px;
  margin-right: 100px;

  @media screen and (max-width: 1100px) {
    margin-right: 0;
    margin-left: 40px;
  }

  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;

export const WorkTitle = styled.h1`
  font-size: calc(var(--h1Size) * 1.3);
  line-height: 1.05em;
  color: #282c35;
  letter-spacing: -0.01em;
  margin-bottom: 0;
  margin-top: -12px;
  font-weight: 600;
`;

export const WebsiteLink = styled.a`
  color: #0079ff;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  background: url("/link-arrow.svg") right 12px center no-repeat;
  padding-right: 38px;
  transition: background-position cubic-bezier(0.39, 0.58, 0.57, 1) 0.07s;
  margin-top: 47px;

  &:hover {
    background-position: right 8px center;
  }
`;

export const Inner = styled.div`
  margin-top: 21px;
  box-sizing: border-box;
  padding-bottom: 80px;
  max-width: 740px;

  @media screen and (max-width: 1100px) {
    padding-left: 0;
    margin-left: 0;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    line-height: 1.5em;
    font-size: calc(var(--smallBodySize) * 1.15);
    color: #3b4c56;
    margin-bottom: 40px;
    margin-top: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 100%;
  padding-top: 20px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;
