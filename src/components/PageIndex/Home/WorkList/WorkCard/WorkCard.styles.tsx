import styled from "styled-components";

export const Card = styled.a`
  border-radius: 3px;
  width: 880px;
  max-width: 100%;
  display: flex;
  height: 440px;
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  margin: auto;
  transition: transform 0.24s cubic-bezier(0.18, 0.89, 0.4, 1.03), box-shadow 0.2s ease-in;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    height: 540px;
  }

  @media screen and (max-width: 880px) {
    position: relative;
    overflow: hidden;
  }

  @media screen and (max-width: 800px) {
    height: 720px;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.28);
  }

  & + & {
    margin-top: 30px;
  }
`;

export const Info = styled.div`
  margin-left: auto;
  width: 400px;
  color: white;
  padding-top: 60px;
  padding-right: 0;
  padding-bottom: 60px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-left: 60px;

  @media screen and (max-width: 880px) {
    padding: 40px 0 40px 40px;
    width: 350px;
    max-width: 100%;
    margin-left: 0;
    height: 600px;
  }
`;

export const CardDate = styled.p`
  margin: 0;
  font-size: 16px;
  opacity: 0.8;
`;

export const CardTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: calc(var(--h1Size) * 0.9);
  line-height: 44px;
  margin: 0;
`;

export const CardServices = styled.div`
  list-style: none;
  margin-top: 40px;

  @media screen and (max-width: 600px) {
    margin-top: 15px;
  }

  li {
    opacity: 0.8;
  }

  li + li {
    margin-top: 5px;
  }
`;

export const CardTech = styled.div`
  margin-top: auto;
  display: flex;

  @media screen and (max-width: 800px) {
    margin-top: 20px;
    margin-left: -5px;
    transform: scale(0.8);
    transform-origin: left center;
  }

  img {
    height: 30px;
  }
`;

export const CardTechIcon = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImages = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0;
  overflow: hidden;
  position: relative;
  flex: 1;

  @media screen and (max-width: 800px) {
    position: absolute;
    height: 700px;
    top: 272px;
    width: 143%;
    left: -26px;
  }

  @media screen and (max-width: 500px) {
    position: absolute;
    height: 420px;
    top: 220px;
    width: 143%;
    left: 0;
  }

  & img {
    max-width: 100%;
    border-radius: 3px;
    box-shadow: 0px 3.32378px 20.6857px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 880px) {
    & img {
      max-width: none;
      height: 100%;
    }
  }
`;
