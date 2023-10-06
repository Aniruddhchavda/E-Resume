import Link from 'next/link';
import React from 'react';
import Button from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiRedhat,DiStackoverflow } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons , Span , Hamburg , Div4 , LI , CV} from './HeaderStyles';



export default class Header extends React.Component
{
  state = { isActive : false };

  toggle = () => this.setState({ isActive: !this.state.isActive});

  render()
  {
    return(

  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" , marginBottom:'10px'}}>
          <DiRedhat size="4rem" /> <Span>Ani's Portfolio</Span>
        </a>
      </Link>
    </Div1>

    
    <Hamburg onClick={this.toggle}>
    <DiStackoverflow size="4rem"/>
    </Hamburg>
    

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Experience</NavLink>
        </Link>
      </li>    
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Aniruddhchavda">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ani-chavda/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/Aniruddhchavda/CV/blob/f2149c29e0d59a198eea19df5aa9f3f4b1970b24/ani_cv.pdf">
          <CV>CV</CV>
        </SocialIcons>
      </Div3>

        <Div4 isActive={this.state.isActive}>
        <LI>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
         </Link>
       </LI>
        <LI>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </LI>        
        <LI>
          <Link href="#about">
            <NavLink>Experience</NavLink>
          </Link>
        </LI>  
        <LI>
          <SocialIcons href="https://github.com/Aniruddhchavda">
            <AiFillGithub size="3rem" />
          </SocialIcons>
        </LI>
        <LI>
        <SocialIcons href="https://www.linkedin.com/in/ani-chavda/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        </LI>
        <LI>
        <SocialIcons href="https://github.com/Aniruddhchavda/CV/blob/f2149c29e0d59a198eea19df5aa9f3f4b1970b24/ani_cv.pdf">
          <CV>CV</CV>
        </SocialIcons>
        </LI>
        </Div4>
    </Container>
    );
  }
};

