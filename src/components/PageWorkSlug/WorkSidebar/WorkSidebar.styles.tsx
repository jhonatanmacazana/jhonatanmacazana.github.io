import styled from "styled-components";

export const ClientItem = styled.p`
  color: rgba(55, 56, 60, 0.88);
  font-size: var(--sidebarSize);
  list-style: none;
  padding-left: 0;
  margin: 0;
  margin-bottom: 4px;
  white-space: nowrap;
`;

export const ServiceItem = styled.li`
  color: rgba(55, 56, 60, 0.88);
  font-size: var(--sidebarSize);
  list-style: none;
  padding-left: 0;
  margin: 0;
  margin-bottom: 4px;
  white-space: nowrap;

  & a {
    color: #0079ff;
    font-weight: 500;
    text-decoration: none;
    background: url("/link-arrow.svg") right 12px center no-repeat;
    padding-right: 38px;
    transition: background-position cubic-bezier(0.39, 0.58, 0.57, 1) 0.07s;
  }

  & a:hover {
    background-position: right 8px center;
  }
`;

export const SidebarWrapper = styled.div`
  min-width: 220px;
  margin-left: auto;
  margin-top: 38px;

  p {
    margin-top: 0;
  }

  ul {
    padding-left: 0;
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 0;
  }

  @media screen and (max-width: 1100px) {
    margin-left: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 0;
  }
`;

export const SectionWrapper = styled.div`
  min-width: 100px;

  & + & {
    margin-top: 46px;
  }

  @media screen and (max-width: 1100px) {
    & + & {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 600px) {
    & + & {
      margin-top: 30px;
    }
  }
`;

export const TechSectionWrapper = styled(SectionWrapper)`
  img:first-of-type {
    margin-left: -4px;
  }

  img {
    margin-right: 0.7rem;
  }
`;

export const Title = styled.p`
  color: #9699a3;
  /* font-size: var(--sidebarSize); */
  font-size: 15px;
  margin-bottom: 5px;
  opacity: 0.9;

  @media screen and (max-width: 1100px) {
    font-size: 15px;
  }

  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;
