import styled from 'styled-components';

export const Drum = styled.iframe`
  margin-top : 4rem;
  width : 400px;
  height : 600px;
  overflow : hidden;
  zoom : 1;
  margin-left : 16em;
  margin-bottom : 3em;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top : 3em;
    zoom : 1;
    height : 750px;
    width : 100%;
    margin-left : unset;
  }
`;
