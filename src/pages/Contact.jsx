import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
  color: ${(props) => props.theme.body};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: 'Open Sans';
  font-weight: 300;
  position: relative;

  display: flex;
  justify-content: flex-end;
  z-index: 5;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  ul {
    padding: 2rem;
    display: flex;
    flex-direction: row;
  }
  li {
    padding-top: 0.75rem;
    list-style: none;
    width: 10%;

    &:hover {
      color: orange;
      transform: scale(1.1);
      transition: 0.5s ease-in-out cubic-bezier(0.075, 0.82, 0.165, 1);
    }
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
  a {
    &:hover {
      color: orange;
      scale: 1.1;
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Contact = () => {
  return (
    <>
      {/* CONTACT */}
      <Section id='contact'>
        <Title>Contact</Title>
        <Body>
          <h3>
            Drop me a line! <br />I love to chat about projects, philosphy,
            games, music, art, movies...everything!
          </h3>

          {/* SOCIALS */}
          <ul>
            <Left>
              <h2>Socials</h2>

              <li>
                <Link
                  to={'https://www.linkedin/in/ethanpiercepresents'}
                  target='_blank'
                >
                  <span>LinkedIn</span>
                </Link>
              </li>

              <li>
                <Link
                  to={'https://www.instagram.com/eeebypristine/'}
                  target='_blank'
                >
                  <span>Instagram</span>
                </Link>
              </li>

              <li>
                <Link to={'https://github.com/jumpybuns'} target='_blank'>
                  <span>GitHub</span>
                </Link>
              </li>
            </Left>
            {/* CONTACTS*/}
            <Right>
              <h2>Contacts</h2>
              <li>
                <Link
                  to={'mailto:ethanpiercepresents@gmail.com'}
                  target='_blank'
                >
                  <span>Email</span>
                </Link>
              </li>
              <li>
                <Link
                  to={
                    'https://api.whatsapp.com/send/?phone=%2B15419999714&text=Hi%21&app_absent=0'
                  }
                  target='_blank'
                >
                  <span>WhatsApp</span>
                </Link>
              </li>
              <li>541.999.9714</li>
            </Right>
          </ul>
          <Resume>
            {/* RESUME */}
            <a href='../assets/resume.pdf' download='Ethan Pierce'>
              Resume
            </a>
          </Resume>
        </Body>
      </Section>
    </>
  );
};

export default Contact;
