import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { gsap } from 'gsap';

const NavContainer = styled(motion.div)`
  position: absolute;
  top: ${(props) => (props.click ? '0' : `-${props.theme.navHeight}`)};
  width: 100vw;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease-in-out;
`;

const MenuBtn = styled.li`
  background-color: ${(props) => props.theme.body};
  list-style: none;
  color: ${(props) => props.theme.text};
  width: 15rem;
  height: 2.5rem;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  border: 2px white solid;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  let navRef = useRef(null);
  let box = useRef(null);

  useEffect(() => {
    navRef.current = gsap
      .timeline()
      .to(box.current, { y: '80px', ease: 'power4.out' });

    return () => {
      navRef.current.kill();
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      navRef.current.reverse();
    } else {
      navRef.current.play();
    }
  }, [menuOpen]);

  return (
    <NavContainer
      initial={{ y: '-100px' }}
      animate={{ y: '0' }}
      transition={{ duration: 2, delay: 2 }}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <MenuItems
        drag='y'
        dragConstraints={{ top: 0, bottom: 60 }}
        dragSnapToOrigin
        dragElastic={0.05}
        ref={box}
      >
        <MenuBtn>Menu</MenuBtn>
        <MenuItem
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.09, y: 0 }}
        >
          <a href='#home'>Home</a>
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.09, y: 0 }}
        >
          <a href='#about'>About</a>
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.09, y: 0 }}
        >
          <a href='#work'>work</a>
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.09, y: 0 }}
        >
          <a href='#contact'>contact</a>
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
