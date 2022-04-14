import styled from 'styled-components';
import { gsap } from 'gsap';
import img from '../assets/2.png';
import { useRef, useEffect } from 'react';

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-right: 10%;
  overflow: hidden;
  color: ${(props) => props.theme.body};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: 'Open Sans';
  font-weight: 300;
  position: relative;
  z-index: 5;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    padding: 2rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
  }

  li {
    padding-top: 0.75rem;
    list-style: none;
    width: 10%;

    &:hover {
      color: orange;
    }
  }

  h3 {
    padding-left: 3%;
  }

  img {
    position: absolute;
    z-index: -1;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Resume = styled.div`
  position: relative;
  font-size: ${(props) => props.theme.fontxl};

  a {
    &:hover {
      color: orange;
      scale: 1.1;
    }
    &:visited {
      color: orange;
    }
    &:active {
      color: orange;
      transform: scale(0.9);
    }
  }
`;

const Contact = () => {
  let imageRef6 = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline({ repeat: -1 });

    t1.to(imageRef6, {
      scale: 5,
      duration: 15,
      rotate: 540,
    });
  }, []);

  return (
    <>
      <Section id='contact'>
        <Title>Contact</Title>
        <Body>
          <h3>
            Drop me a line! <br />I love to chat about code, music, games, art,
            movies...everything!
          </h3>
          <img
            ref={(el) => (imageRef6 = el)}
            src={img}
            alt='rainbow-triangle'
          />
          <ul>
            <Left>
              <h2>Socials</h2>

              <li>
                <a
                  href='https://www.linkedin.com/in/ethanpiercepresents/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>LinkedIn</span>
                </a>
              </li>

              <li>
                <a
                  href='https://www.instagram.com/eeebypristine/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>Instagram</span>
                </a>
              </li>

              <li>
                <a
                  href='https://github.com/jumpybuns'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>GitHub</span>
                </a>
              </li>
            </Left>

            <Right>
              <h2>Contacts</h2>
              <li>
                <a
                  href='mailto:ethanpiercepresents@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href='https://api.whatsapp.com/send/?phone=%2B15419999714&text=Hi%21&app_absent=0'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>541.999.9714</li>
            </Right>
            <Resume>
              <a href='/resume.pdf' download='Ethan Pierce'>
                Resume
              </a>
            </Resume>
          </ul>
        </Body>
      </Section>
    </>
  );
};

export default Contact;
