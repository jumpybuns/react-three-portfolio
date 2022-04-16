import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import img2 from '../assets/2.png';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  -webkit-text-stroke: 1px black;
  background: ${(props) => props.theme.text};
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  z-index: 1;
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px ${(props) => props.theme.body};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    display: flex;
    flex-direction: row;
    font-family: 'Open Sans';
    font-size: ${(props) => props.theme.fontxxxl};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    letter-spacing: 20px;
  }
  h2 {
    font-family: 'Roboto Slab';
    font-size: ${(props) => props.theme.fontxl};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
  }
  h3 {
    font-family: 'Roboto Slab';
    font-size: ${(props) => props.theme.fontxxl};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
  }
`;

const CoverVideo = () => {
  gsap.registerPlugin(ScrollTrigger);
  let imageRef = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline();

    t1.to(imageRef, {
      y: '-150px',
      scale: 4,
      duration: 15,
      rotate: 245,
    });

    ScrollTrigger.refresh();
  }, []);

  let tl = gsap.timeline({ duration: 0.5 });
  useEffect(() => {
    tl.fromTo(
      '.hello',
      { opacity: 0 },
      {
        scale: 1.5,
        opacity: 1,
        ease: 'power1.inOut',
        stagger: {
          from: 'left',
          amount: 0.25,
        },
      }
    )
      .to('.hello', { opacity: 0, delay: 2 })
      .fromTo(
        '.myname',
        { opacity: 0 },
        {
          duration: 1,
          opacity: 1,
          ease: 'power1.inOut',
          stagger: {
            from: 'left',
            amount: 0.5,
          },
        },
        '-=3'
      )
      .fromTo('.first-name', { opacity: 0 }, { opacity: 1 }, '-=2')
      .fromTo('.last-name', { opacity: 0 }, { opacity: 1 }, '-=2')
      .to('.myname', { opacity: 0 })
      .fromTo('.first-name', { scale: 1, x: 0 }, { scale: 1.2, x: -145 })
      .fromTo(
        '.last-name',
        { scale: 1, x: 0 },
        { scale: 1.2, x: -125 },
        '-=0.35'
      )
      .fromTo('.Iam', { opacity: 0 }, { opacity: 1, delay: 1 })
      .fromTo('.a', { opacity: 0 }, { opacity: 1 }, '-=0.5')
      .fromTo('.dev', { x: 0, opacity: 0 }, { x: 10, opacity: 1 })
      .to('.a', { opacity: 0 })
      .fromTo('.Iam', { y: 0, x: 0 }, { y: -100, x: 15 }, '-=0.5')
      .to('.Iam', { y: -100, x: 15 })
      .to('.Iam', { opacity: 0 })
      .fromTo('.dev', { y: 0 }, { y: -40 });
  }, [tl]);
  return (
    <VideoContainer>
      <img
        ref={(el) => (imageRef = el)}
        className='small-img-1'
        src={img2}
        alt='About Us'
      />
      <Title>
        <div>
          <h1 className='hello'>H</h1>
          <h1 className='hello'>E</h1>
          <h1 className='hello'>L</h1>
          <h1 className='hello'>L</h1>
          <h1 className='hello'>O</h1>
        </div>
        <div>
          <h3 className='myname'>My&nbsp;</h3>
          <h3 className='myname'>name&nbsp;</h3>
          <h3 className='myname'>is&nbsp;</h3>
          <h3 className='first-name'>Ethan&nbsp;</h3>
          <h3 className='last-name'>Pierce</h3>
        </div>
        <div>
          <h2 className='Iam'>I am &nbsp;</h2>
          <h2 className='a'>a</h2>
        </div>
        <h2 className='dev'>Software Developer.</h2>
      </Title>
    </VideoContainer>
  );
};

export default CoverVideo;
