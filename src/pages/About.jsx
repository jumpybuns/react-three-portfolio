import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import img2 from '../assets/2.png';

const Section = styled.section`
  position: relative;
  height: 120vh;
  width: 100vw;
  display: flex;
  margin: 0 auto;
  padding: 0 10% 0 10%;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: 'Open Sans';
  font-weight: 300;
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 65px;
  left: 13%;
  z-index: 5;
`;

const Left = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  height: 80vh;
  width: 600px;
  top: -45px;
  left: 9%;
  padding: 2rem;
  text-align: left;
  z-index: 5;
  margin-top: 20%;
`;

const Right = styled.div`
  width: 100%;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 200px;
    position: absolute;
    right: -2%;
    bottom: 10%;
    transform: rotate(90deg);
    z-index: 0;
  }
  .small-img-2 {
    width: 400px;
    position: absolute;
    left: 8%;
    bottom: 30%;
    transform: rotate(45deg);
    z-index: 0;
  }
  .small-img-3 {
    width: 40%;
    position: absolute;
    right: 10%;
    bottom: 30%;
    z-index: 0;
  }
`;

const aboutTitle = [
  { name: 'A' },
  { name: 'b' },
  { name: 'o' },
  { name: 'u' },
  { name: 't' },
];
const renderBox = (e, i) => {
  return (
    <Title className='box' key={e.name} ref={(el) => (e.name = el)}>
      {e.name}
    </Title>
  );
};

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  let text = useRef(null);
  let imageRef = useRef(null);
  let imageRef2 = useRef(null);
  let imageRef3 = useRef(null);

  let tl = gsap.timeline();
  useEffect(() => {
    const handleTitle = () => {
      aboutTitle.forEach((e, i) => {
        tl.to([e.name], { x: (200 * i) / 2, duration: 0.8 }, 0.1 * i);
      });
    };
    ScrollTrigger.create({
      trigger: '.title-container',
      onEnter: handleTitle,

      start: 'top bottom',
    });
  }, [tl]);

  useEffect(() => {
    const t1 = gsap.timeline();

    t1.to(imageRef, {
      scrollTrigger: {
        trigger: imageRef,
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
        // markers: true,
      },
      y: '-150px',
      scale: 15,
      duration: 15,
    });

    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    const t1 = gsap.timeline();

    t1.from(text, {
      scrollTrigger: {
        trigger: '.title-container',
        start: 'top bottom-=50',
        end: 'top bottom-=50',
        scrub: 1,
      },
      y: 200,
      ease: 'expo.in',
      duration: 15,
    });
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    const t2 = gsap.timeline();

    t2.to(imageRef2, {
      scrollTrigger: {
        trigger: imageRef,
        start: 'top top+=200',
        end: 'top top+=200',
        scrub: 1,
      },
      scale: 9.5,
      duration: 500,
    });
    ScrollTrigger.refresh();
  }, []);
  useEffect(() => {
    const t3 = gsap.timeline();

    t3.to(imageRef3, {
      scrollTrigger: {
        trigger: imageRef,
        start: 'top bottom-=300',
        end: 'bottom bottom-=300',
        scrub: 1,
      },
      scale: 10,
      duration: 10,
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <Section id='about' className='container'>
      <div className='title-container'>{aboutTitle.map(renderBox)}</div>
      <Left ref={(el) => (text = el)}>
        As a software developer, I strive to build on your vision to create
        intuitive, smooth, and unique web experiences. Using the latest front
        end technologies, I want to create projects bursting with life!
        <br />
        <br />
        Creative problem solver interested in developing human-centered
        solutions with a passion for front-end development. Efficient, fun, and
        patient engineer with excellent communication skills, an eye for detail,
        and a love for new technologies.
        <br />
        <br />
      </Left>
      <Right>
        <img
          ref={(el) => (imageRef2 = el)}
          className='small-img-1'
          src={img2}
          alt='About Us'
        />
        <img
          ref={(el) => (imageRef = el)}
          src={img2}
          alt='About Us'
          className='small-img-2'
        />
        <img
          ref={(el) => (imageRef3 = el)}
          src={img2}
          alt='About Us'
          className='small-img-3'
        />
      </Right>
    </Section>
  );
};

export default About;
