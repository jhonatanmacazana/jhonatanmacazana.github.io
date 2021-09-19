import styled from "styled-components";

export const WorkContainer = styled.div`
  margin-bottom: 100px;

  @media screen and (max-width: 880px) {
    padding: 0 1.875rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0 1.25rem;
  }
`;

export const WorkTitle = styled.h2`
  margin-bottom: 30px;
  margin-top: 0;
  color: var(--black);
`;
