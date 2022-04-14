import yoga from '../assets/yoga small.mp4';
import drawing from '../assets/drawing.jpg';
import aurora from '../assets/auroraWide.jpg';
import parking from '../assets/parking-checker.jpg';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Container = styled.div`
  background: transparent;
  z-index: 1;
`;

const VideoContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 3rem;
  overflow: hidden;

  div:after {
    position: relative;
    padding-bottom: 10%;
    content: '';
    display: block;
    overflow: hidden;
  }
  video {
    width: 60%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
  }
  img {
    width: 60%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  text-align: right;
  padding: 3rem;
  position: absolute;
  bottom: 3rem;

  .title {
    position: relative;
    font-family: 'Open Sans';
    font-size: ${(props) => props.theme.fontlg};
  }

  p {
    width: 50%;
  }

  .link {
    &:hover {
      color: orange;
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

export const YogaSeva = () => {
  let containerRef = useRef(null);

  const tl = gsap.timeline();
  useEffect(() => {
    tl.fromTo(
      containerRef,
      { opacity: 0, y: 1000 },
      { opacity: 1, y: 0, ease: 'power1.out', duration: 2 },
      '-=1'
    );
  }, [tl]);

  return (
    <Container className='project-container'>
      <VideoContainer>
        <video
          ref={(el) => (containerRef = el)}
          src={yoga}
          type='video/mp4'
          autoPlay
          loop
          muted
        />
      </VideoContainer>

      <Bottom>
        <a
          className='link'
          href='https://www.yogaseva.com/'
          target='_blank'
          rel='noreferrer'
        >
          <MdWeb size={100} />
        </a>
        <a
          className='link'
          href='https://github.com/jumpybuns/yoga-seva'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub size={100} />
        </a>

        <p>
          Yoga studio marketing site, with hidden admin page for the owner to
          edit and customize a banner to inform students of changes to the
          schedule. Using NextJS, Chakra-UI, Zustand for state managment and
          Google Maps API for location services.
        </p>
      </Bottom>
    </Container>
  );
};
export const Colorful = () => {
  let containerRef = useRef(null);

  const tl = gsap.timeline();
  useEffect(() => {
    tl.fromTo(
      containerRef,
      { opacity: 0, y: -1000 },
      { opacity: 1, y: 0, ease: 'power1.out', duration: 2 },
      '-=1'
    );
  }, [tl]);

  return (
    <Container className='project-container'>
      <VideoContainer>
        <img
          ref={(el) => (containerRef = el)}
          src={drawing}
          alt='screenshot of drawing app'
          height='270px'
          width='480px'
        />
      </VideoContainer>
      <Bottom>
        <a
          className='link'
          href='https://colorfull.vercel.app/'
          target='_blank'
          rel='noreferrer'
        >
          <MdWeb size={100} />
        </a>
        <a
          className='link'
          href='https://github.com/5-dollar-sweaters/mintbean-drawing-program'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub size={100} />
        </a>
        <p>
          Digital artwork app created mobile first. Save, Load, and Delete your
          drawings with secure Log In to bring your ideas to life anywhere you
          have access to a browser.
        </p>
      </Bottom>
    </Container>
  );
};
export const ParkingChecker = () => {
  let containerRef = useRef(null);

  const tl = gsap.timeline();
  useEffect(() => {
    tl.fromTo(
      containerRef,
      { opacity: 0, y: 1000 },
      { opacity: 1, y: 0, ease: 'power1.out', duration: 2 },
      '-=1'
    );
  }, [tl]);

  return (
    <Container className='project-container'>
      <VideoContainer>
        <img
          ref={(el) => (containerRef = el)}
          src={parking}
          alt='screenshot of drawing app'
          height='270px'
          width='480px'
        />
      </VideoContainer>
      <Bottom>
        <a
          className='link'
          href='https://park-checker.vercel.app/'
          target='_blank'
          rel='noreferrer'
        >
          <MdWeb size={100} />
        </a>
        <a
          className='link'
          href='https://github.com/jumpybuns/park-checker'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub size={100} />
        </a>
        <p>
          User subscribes to our service and selects the dates of their trip to
          DisneyLand Theme Parks. They receive a SMS text when there are parking
          spots become available. Powered by NextJS, Express, and utilizing the
          Twilio API for text service, this app is hosted on an AWS EC2 server.
        </p>
      </Bottom>
    </Container>
  );
};
export const AuroraSynth = () => {
  let containerRef = useRef(null);

  const tl = gsap.timeline();
  useEffect(() => {
    tl.fromTo(
      containerRef,
      { opacity: 0, y: -1000 },
      { opacity: 1, y: 0, ease: 'power1.out', duration: 2 },
      '-=1'
    );
  }, [tl]);

  return (
    <Container className='project-container'>
      <VideoContainer>
        <img
          ref={(el) => (containerRef = el)}
          src={aurora}
          alt='screenshot of drawing app'
          height='270px'
          width='480px'
        />
      </VideoContainer>
      <Bottom>
        <a
          className='link'
          href='https://aurora-synth.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          <MdWeb size={100} />
        </a>
        <a
          className='link'
          href='https://github.com/jumpybuns/aurora'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub size={100} />
        </a>
        <p>
          Elegant interactive web browser synth built with vanilla JavaScript
          and Web Audio API. Implimented using a series of audio nodes and built
          around different wave shapes and filters. Check your most used notes
          on a dynamically rendered graph made with ChartJS.
        </p>
      </Bottom>
    </Container>
  );
};
