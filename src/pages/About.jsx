import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: 'Open Sans';
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }
`;

const About = () => {
  return (
    <Section>
      <Title
        data-scroll
        data-scroll-speed='-2'
        data-scroll-direction='horizontal'
      >
        About Me
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target='#fixed-target'>
        Creative problem solver, communicative collaborator with a passion for
        front-end development. Consultative manager with experience in
        high-pressure situations.
        <br />
        <br />
        Able to work independently and think critically to develop
        human-centered solutions. I am an efficient, fun, and patient engineer
        with excellent communication skills that is able to teach and explain
        complex concepts in a way that relates to and reinforces confidence in
        the individual.
        <br />
        <br />
        We strive to build on our vision. As a software developer, I do my best
        to create amazing experiences for all people. I are always looking to
        make something that is easy for everyone.
      </Left>
      <Right>
        <img src={img1} alt='About Us' />
        <img
          data-scroll
          data-scroll-speed='5'
          src={img2}
          alt='About Us'
          className='small-img-1'
        />
        <img
          data-scroll
          data-scroll-speed='-2'
          src={img3}
          alt='About Us'
          className='small-img-2'
        />
      </Right>
    </Section>
  );
};

export default About;
