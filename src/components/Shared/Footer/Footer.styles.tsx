import styled from "styled-components";

export const Nav = styled.nav`
  margin-left: auto;
  margin-top: 6px;

  li {
    list-style: none;
  }

  li a + a {
    margin-left: 14px;
  }

  li a {
    margin-left: 14px;
  }

  li a img {
    opacity: 0.4;
    transition: opacity ease-in 0.2s;
  }

  li a:hover img,
  li a:active img {
    opacity: 0.8;
  }
`;

interface ContainerProps {
  noBorder?: boolean;
}

export const Container = styled.div<ContainerProps>`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  box-sizing: border-box;
  width: 1200px;
  max-width: 100%;
  padding: 0 20px;
  margin-top: 80px;
  margin: auto;
  border-top: ${props =>
    props.noBorder ? 0 : "1px solid rgba(62, 62, 225, 0.12)"};
`;

// .logoLink img {
//   width: 60px;
// }
