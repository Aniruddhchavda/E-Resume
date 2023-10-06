import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, Ho } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">

      <LinkList>


        <LinkColumn>
          <LinkTitle></LinkTitle>
          <LinkItem href="https://github.com/Aniruddhchavda">
            GitHub <AiFillGithub size="1.7rem" />
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle></LinkTitle>
          <LinkItem href="https://www.linkedin.com/in/ani-chavda/">
            LinkedIn <AiFillLinkedin size="1.7rem" />
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle></LinkTitle>
          <LinkItem href="mailto:anichavda98@gmail.com">
            anichavda98@gmail.com
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
        <LinkTitle></LinkTitle>
          <LinkItem>
          &copy; Copyright 2023
          </LinkItem>
        </LinkColumn>

      </LinkList>

    </FooterWrapper>
  );
};

export default Footer;
