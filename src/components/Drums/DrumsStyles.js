import styled from 'styled-components';

export const Drum = styled.iframe`
  margin-top : 3rem;
  width : 100%;
  height : 740px;

  @media ${(props) => props.theme.breakpoints.sm} {
    height : 900px;
    margin-bottom :  2em;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height : 800px;
    margin-bottom :  2em;
  }
`;
