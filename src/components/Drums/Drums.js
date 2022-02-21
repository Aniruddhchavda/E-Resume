import React from 'react';
import { Section, SectionText, SectionTitle , SectionDivider} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Drum } from './DrumsStyles';
import Link from 'next/link';
import {AiFillSmile } from 'react-icons/ai';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons , Span} from '../Header/HeaderStyles';


const Drums = (props) => (
  <Section nopadding id="drums">
    <SectionText main>Have a look at the first web-app I created 
    back in High-School. &nbsp;
    <AiFillSmile size="4rem" color="Yellow"></AiFillSmile></SectionText>
<Drum src="https://aniruddhchavda.github.io/Aniruddh.DrumProject.io/">
</Drum>
  </Section>
);

export default Drums;
