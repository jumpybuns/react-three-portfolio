import styled from 'styled-components';
import img from '../assets/2.png';

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
  background-color: pink;
  z-index: 1;
  overflow: hidden;
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

    &:active {
      color: ${(props) => props.theme.text};
      transform: scale(0.9);
    }
    &:visited {
      color: ${(props) => props.theme.text};
    }
    &:hover {
      color: ${(props) => props.theme.text};
      scale: 1.1;
    }
  }

  h3 {
    padding-left: 3%;
  }

  img {
    position: absolute;
    z-index: -1;
  }

  .triangle-img2 {
    transform: rotate(90deg);
    position: absolute;
    left: 0;
    top: 0;
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
    &:active {
      color: ${(props) => props.theme.text};
      transform: scale(0.9);
    }
    &:visited {
      color: ${(props) => props.theme.text};
    }
    &:hover {
      color: ${(props) => props.theme.text};
      scale: 1.1;
    }
  }
`;

const Contact = () => {
  return (
    <>
      <Section id='contact'>
        <Title>Contact</Title>
        <Body>
          <h3>
            Drop me a line! <br />I love to chat about code, music, games, art,
            movies...everything!
          </h3>
          <img className='triangle-img1' src={img} alt='rainbow-triangle' />
          <ul>
            <Left>
              <h2>Socials</h2>

              <a
                href='https://www.linkedin.com/in/ethanpiercepresents/'
                target='_blank'
                rel='noreferrer'
              >
                <li>
                  <span>LinkedIn</span>
                </li>
              </a>

              <a
                href='https://www.instagram.com/eeebypristine/'
                target='_blank'
                rel='noreferrer'
              >
                <li>
                  <span>Instagram</span>
                </li>
              </a>

              <a
                href='https://github.com/jumpybuns'
                target='_blank'
                rel='noreferrer'
              >
                <li>
                  <span>GitHub</span>
                </li>
              </a>
            </Left>

            <Right>
              <h2>Contacts</h2>
              <a
                href='mailto:ethanpiercepresents@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                <li>
                  <span>Email</span>
                </li>
              </a>
              <a
                href='https://api.whatsapp.com/send/?phone=%2B15419999714&text=Hi%21&app_absent=0'
                target='_blank'
                rel='noreferrer'
              >
                <li>
                  <span>WhatsApp</span>
                </li>
              </a>
              <a
                href='https://globfone.com/call-phone/'
                target='_blank'
                rel='noreferrer'
              >
                <li>541.999.9714</li>
              </a>
            </Right>
            <Resume>
              <a href='/resume.pdf' download='Ethan Pierce'>
                Resume
              </a>
            </Resume>
          </ul>
          <img className='triangle-img2' src={img} alt='rainbow-triangle' />
        </Body>
      </Section>
    </>
  );
};

export default Contact;
