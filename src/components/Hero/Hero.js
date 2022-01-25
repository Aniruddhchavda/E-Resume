import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio Website
        </SectionTitle>
        <SectionText>
        The purpose of this website is to provide a better view of my résumé. This will help me depict my skills , projects and interests clearly.
        </SectionText>
        <Button onClick={props.handleClick}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;