import React from 'react';
import styled from 'styled-components';

const Section = styled.h3`
  display: flex;
  justify-content: space-between;
  width: 80vw;
`;

const Footer = () => {
  return (
    <Section id='footer' className='footer-container'>
      <h3>Created by Ethan Pierce</h3>
      <h3>@2022</h3>
    </Section>
  );
};

export default Footer;
