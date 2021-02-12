import styled from "styled-components";

export const IntroWrapper = styled.div`
  margin: 125px auto 94px;
  display: flex;
  box-sizing: border-box;
  width: 880px;
  max-width: 100%;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 850px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
    margin-top: 40px;
    margin-bottom: 50px;
  }
`;

export const LineBreak = styled.div`
  border-bottom: 1px solid rgba(62, 62, 225, 0.12);
`;

export const ShortOne = styled.div`
  width: 40%;
  max-width: 100%;

  @media screen and (max-width: 880px) {
    margin: 40px auto;
    width: 100%;
  }
`;

export const LongOne = styled.div`
  width: 470px;
  font-size: calc(var(--smallBodySize) * 1.05);
  line-height: 1.6em;
  margin-left: auto;
  color: #3f4146;
  margin-top: 10px;

  a {
    color: var(--linkColor);
    text-decoration: none;
  }

  @media screen and (max-width: 880px) {
    margin: 20px auto;
    width: 100%;
  }

  strong {
    color: #46474a;
    font-weight: 600;
  }

  p {
    margin-top: 0;
  }

  p + p {
    margin-top: 10px;
  }
`;

export const HelloButton = styled.button`
  color: var(--linkColor);
  font-size: 24px;
  background: none;
  border: 2px solid var(--linkColor);
  padding: 0 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  height: 52px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.15s ease-in, color 0.15s ease-in;

  @media screen and (max-width: 700px) {
    height: 42px;
    font-size: 18px;
  }

  &:hover {
    background: var(--linkColor);
    color: white;
  }
`;

export const Greeting = styled.p`
  font-size: calc(var(--h1Size) * 1.2);
  font-weight: 700;
  letter-spacing: -0.04em;
  margin-bottom: 0;
  margin-top: 0;
  color: var(--black);
`;

export const MyTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: calc(var(--bigBodySize) * 1.1);
  line-height: 108.7%;
  margin-top: 5px;
  color: #6d7777;
  line-height: 1.3em;

  @media screen and (max-width: 880px) {
    br {
      display: none;
    }
  }
`;
