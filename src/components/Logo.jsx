import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 2rem;

  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;

  a {
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      polygon {
        stroke: ${(props) => props.theme.text};
      }
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
`;

const textVariants = {
  hidden: {
    opacity: 0,
    x: -150,
  },
  visible: {
    opacity: 1,
    x: 70,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to='/'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          enableBackground='new 0 0 24 24'
          height='48px'
          viewBox='0 0 24 24'
          width='48px'
          fill='none'
        >
          <g>
            <motion.polygon
              variants={pathVariants}
              initial='hidden'
              animate='visible'
              points='20,6 10,40 40,40'
              className='triangle'
            />
            <motion.polygon
              style={{ transform: 'rotate(45deg)' }}
              variants={pathVariants}
              initial='hidden'
              animate='visible'
              points='40,-40 20,0 60,40'
              className='triangle'
            />
          </g>
        </svg>
        <Text variants={textVariants} initial='hidden' animate='visible'>
          Ethan Pierce Presents...
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
