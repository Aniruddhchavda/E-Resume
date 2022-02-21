import styled from 'styled-components';

export const Drum = styled.iframe`
  margin-top : 3rem;
  width : 100%;
  height : 800px;

  @media ${(props) => props.theme.breakpoints.sm} {
    height : 950px;
    margin-bottom :  2em;
  }

`;