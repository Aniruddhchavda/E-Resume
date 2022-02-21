import styled from 'styled-components';

export const Drum = styled.iframe`
  margin-top : 3rem;
  width : 100%;
  height : 740px;
  overflow : hidden;
  @media ${(props) => props.theme.breakpoints.sm} {
    height : 850px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height : 850px;
  }
`;
