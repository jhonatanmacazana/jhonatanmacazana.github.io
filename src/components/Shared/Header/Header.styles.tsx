import styled from "styled-components";

export const Logo = styled.img`
  width: 8rem;
  padding-top: 1rem;

  @media screen and (max-width: 600px) {
    width: 100px;
  }
`;

export const HeaderWrapper = styled.header`
  @media screen and (min-width: 1300px) {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  @media screen and (max-width: 600px) {
    padding: 0px 16px;
    height: 50px;
  }
`;

export const HeaderInner = styled.div`
  width: 1300px;
  max-width: 100%;
  margin: auto;
  height: 100px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;

  @media screen and (min-width: 1300px) {
    width: 100%;
    margin: auto;
    height: 110px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 30px;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const Field = styled.a`
  text-decoration: none;
  color: rgba(55, 56, 60, 0.73);
  opacity: 0.9;
  transition: opacity ease-in 0.2s;
  font-size: 16px;

  &:hover {
    color: #282c35;
  }

  & + & {
    margin-left: 15px;
  }
`;

export const ContactLinkField = styled(Field)`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  margin-left: auto;
  margin-right: 20px;
`;

// @media screen and (max-width: 600px) {
//   .intro {
//     padding: 0 20px;
//   }
// }

// .active {
//   font-weight: 500;
// }
