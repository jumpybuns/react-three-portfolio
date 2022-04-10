import React, { useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  height: auto;
  width: 100vw;
  display: flex;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  color: ${(props) => props.theme.text};
  justify-content: flex-start;
  background-color: ${(props) => props.theme.black};
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Open Sans';
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 35%;

  min-height: 100vh;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  min-height: 100vh;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  display: flex;
  width: 20rem;
  margin-right: 6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
`;

// const Product = ({ img, title }) => {
//   return (
//     <Item
//       initial={{ filter: 'grayscale(100%)' }}
//       whileInView={{ filter: 'grayscale(0%)' }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: false, amount: 'all' }}
//     >
//       <img src={img} alt={title} />
//       <h1>{title}</h1>
//     </Item>
//   );
// };

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  return (
    <>
      <Section ref={ref}>
        <Title>Work</Title>
        <Left>
          <h2>TECH STACK</h2>
          <p>
            Languages HTML CSS Typescript <br />
            Front End React NextJS Tailwind THREE.JS <br /> Back End Node
            GraphQL postgreSQL Express Dev Tools Netlify Vercel Heroku Postman
            PGAdmin.
            <br /> <br />
          </p>
        </Left>
        <Right ref={horizontalRef}>
          <h1>WORK</h1>
        </Right>
      </Section>
    </>
  );
};

export default Shop;
