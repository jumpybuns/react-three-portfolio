import React from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Section = styled.h3`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  overflow: hidden;
  font-size: ${(props) => props.theme.fontxs};
  letter-spacing: 1px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  margin: 0 auto;
`;

const IconList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  li {
    padding: 0.75rem;
    list-style: none;
    width: 10%;
    cursor: pointer;

    &:active {
      color: orange;
      transform: scale(0.9);
    }
    &:visited {
      color: orange;
    }
    &:hover {
      color: orange;
      scale: 1.1;
    }
  }
`;

const Footer = () => {
  return (
    <Section id='footer' className='footer-container'>
      <Container className='background'>
        <h3>Created by Ethan Pierce</h3>
        <IconList className='icon-links'>
          <a
            href='https://www.linkedin.com/in/ethanpiercepresents/'
            target='_blank'
            rel='noreferrer'
          >
            <li>
              <FaLinkedin size={25} />
            </li>
          </a>
          <a
            href='https://github.com/jumpybuns'
            target='_blank'
            rel='noreferrer'
          >
            <li>
              <FaGithub size={25} />
            </li>
          </a>
          <a
            href='mailto:ethanpiercepresents@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <li>
              <MdOutlineEmail size={25} />
            </li>
          </a>
        </IconList>
      </Container>
    </Section>
  );
};

export default Footer;
