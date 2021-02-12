import styled from "styled-components";

export const LineWrapper = styled.div`
  border-left: 1px solid rgba(62, 62, 225, 0.12);
  width: 20px;
  flex: 1;
  position: relative;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const SVGCircle = styled.svg`
  display: flex;
  position: absolute;
  top: -1px;
  left: -6px;
  transform: scale(0.8);
`;

export const SVGArrow = styled.svg`
  position: absolute;
  bottom: -5px;
  left: -4px;
  transform: scale(1.2);
  transform-origin: center;
`;
