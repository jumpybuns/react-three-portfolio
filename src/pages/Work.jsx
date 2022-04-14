import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import img2 from '../assets/2.png';

import {
  YogaSeva,
  Colorful,
  ParkingChecker,
  AuroraSynth,
} from '../components/Projects';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  height: auto;
  display: flex;
  margin: 0 auto;
  color: ${(props) => props.theme.body};
  justify-content: flex-start;
  background-color: ${(props) => props.theme.black};
  align-items: flex-start;
`;

const Title = styled.h1`
  position: absolute;
  top: 1rem;
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Open Sans';
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  z-index: 5;
`;

const Left = styled.div`
  width: 25%;
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  li {
    padding: 1rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    list-style: none;
    font-size: ${(props) => props.theme.fontlg};
    &:hover {
      color: orange;
    }
    &:active {
      transform: scale(0.9);
    }

    p {
      font-size: ${(props) => props.theme.fontlg};
      font-weight: 300;
      width: 80%;
      margin: 0 auto;
    }
  }
`;

const Right = styled.div`
  background-color: #c6c6c6;
  border-radius: 5px;
  width: 65%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
    z-index: 5;
  }

  .triangle {
    position: absolute;
    left: 0;
    transform: rotate(270deg);
    z-index: -1;
  }
`;

const Shop = () => {
  gsap.registerEffect(ScrollTrigger);

  const [selected, setSelected] = useState(YogaSeva);
  let rightRef = useRef(null);
  let leftRef = useRef(null);

  const t4 = gsap.timeline();
  useEffect(() => {
    t4.from(
      rightRef,
      {
        scrollTrigger: {
          trigger: rightRef,
          start: 'top bottom-=200',
          end: 'top bottom-=200',
          scrub: 1,
          // markers: true,
        },

        x: 1000,
        scaleX: 0,
        opacity: 0,
      },
      { x: 0, duration: 1.4, ease: 'back.out(1.3)', scaleX: 1, opacity: 1 }
    );
    ScrollTrigger.refresh();
  }, [t4]);

  useEffect(() => {
    t4.from(
      leftRef,
      {
        scrollTrigger: {
          trigger: '.title',
          start: 'top bottom-=200',
          end: 'bottom bottom-=200',
          scrub: 1,
          // markers: true,
        },

        x: -500,
        scaleX: 0,
        opacity: 0,
      },
      { x: 0, duration: 2, ease: 'back.out(1.1)', scaleX: 1, opacity: 1 }
    );
    ScrollTrigger.refresh();
  }, [t4]);

  return (
    <>
      <Section id='work' className='work-container'>
        <Left ref={(el) => (leftRef = el)}>
          <Title className='title'>Work</Title>
          <ul>
            <li onClick={() => setSelected(YogaSeva)}>Yoga Seva</li>
            <li className='project' onClick={() => setSelected(Colorful)}>
              Colorful
            </li>
            <li className='project' onClick={() => setSelected(ParkingChecker)}>
              Parking Checker
            </li>
            <li className='project' onClick={() => setSelected(AuroraSynth)}>
              Aurora Synth
            </li>
          </ul>
        </Left>
        <Right ref={(el) => (rightRef = el)}>
          {selected}
          <img className='triangle' src={img2} alt='triangle' />
        </Right>
      </Section>
    </>
  );
};

export default Shop;
