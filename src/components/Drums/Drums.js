import React from 'react';
import { Section, SectionText, SectionTitle , SectionDivider} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Drum } from './DrumsStyles';
import Link from 'next/link';
import {AiFillSmile } from 'react-icons/ai';
import { Ho } from '../Projects/ProjectsStyles';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons , Span} from '../Header/HeaderStyles';


const Drums = (props) => (
  <Section nopadding id="drums">
  <Ho>MY FIRST PROJECT</Ho>
  <SectionText main>Now onto the fun stuff !! Have a look at the first web-app I created back in High-School.(Make sure to turn the volume on ) &nbsp;
    <AiFillSmile size="4rem" color="Yellow"></AiFillSmile></SectionText>
<Drum 
src='https://aniruddhchavda.github.io/Aniruddh.DrumProject.io/'
scroll="no"
scrolling="no"
>
</Drum>
</Section>
);

export default Drums;
