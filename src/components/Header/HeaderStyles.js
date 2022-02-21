import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  background-image: linear-gradient(to right, hsl(232.7,27.3%,23.7%) , hsl(205.1,100%,36.1%));
  @media ${(props) => props.theme.breakpoints.md} {
    display : flex;
  }
`;

export const Span = styled.span`
margin-left : 0.5em;
font-size: 2rem;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Hamburg = styled.div`

  display : none;

  @media ${(props) => props.theme.breakpoints.md}{
    display : flex;
    position : fixed;
    right : 1em;
    margin : 0;
    padding : 5px;
    cursor : pointer;
    background: rgba(0,0,0,0.3);
    backdrop-filter: saturate(180%) blur(10px);
    z-index : 998;
  }
`;


export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.md} {
    display : none;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    display : none;
  }
`;

export const Div4 = styled.div`
  display : none;

  @media ${(props) => props.theme.breakpoints.md} {

    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    margin : 0;
    padding : 0;
    margin-left : 8em;
    text-align : left;
    background-color: rgba(0, 0, 0, .7);  
    backdrop-filter: blur(5px);
    border-radius : .9em;
    position:fixed;
    z-index : 999;
    `
    export const LI = styled.li`
    padding : 1em;
    color : black;
    `;
    `
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: white;
  transition: 0.4s ease;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: orange;
    transform: scale(1.2);
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: orange;
    transform: scale(1.2);
    cursor: pointer;
  }
`

//Cv
export const CV = styled.p`
margin : 0;
font-weight : Bold;
font-size : 1.5em;
color : orange;

&:hover{
  color : white;
}

@media ${(props) => props.theme.breakpoints.sm} {
  background : blue;
  color : white;
  text-align : center;
  &:hover {
    background-color: blue;
  }
}
`;