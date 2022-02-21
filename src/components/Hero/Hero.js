import React from 'react';
import { Section } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { SectionText , LeftSection , SectionTitle } from './HeroStyles';
import Link from 'next/link';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons , Span} from '../Header/HeaderStyles';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main >
          Welcome To 
          My Portfolio Website
        </SectionTitle>
        
        <SectionText>
        The purpose of this website is to provide a better view of my résumé. This will help me depict my skills , projects and interests clearly.
        </SectionText>
        <Button>
        <Link href="https://www.linkedin.com/in/ani-chavda/">
        Contact Me
        </Link>
        </Button>
      </LeftSection>
     
    </Section>
  </>
);

export default Hero;
