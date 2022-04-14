import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { gsap } from 'gsap';

const NavContainer = styled.div`
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

const MenuItems = styled.ul`
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

const MenuItem = styled.li`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  a {
    &:hover {
      color: orange;
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  let navRef = useRef(null);
  let box = useRef(null);

  useEffect(() => {
    navRef.current = gsap
      .timeline()
      .to(box.current, { y: '80px', ease: 'power4.in' });

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
      <MenuItems ref={box}>
        <MenuBtn>Menu</MenuBtn>
        <MenuItem>
          <a href='/resume.pdf' download='Ethan Pierce'>
            Resume
          </a>
        </MenuItem>
        <MenuItem>
          <a href='#about'>About</a>
        </MenuItem>
        <MenuItem>
          <a href='#work'>work</a>
        </MenuItem>
        <MenuItem>
          <a href='#contact'>contact</a>
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
