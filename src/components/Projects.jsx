import drawing from '../assets/drawing.jpg';
import aurora from '../assets/auroraWide.jpg';
import styled from 'styled-components';

const Container = styled.div`
  background: transparent;
  z-index: 1;
`;

const Image = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem;
  img {
    border-radius: 5px;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  /* padding: 3rem; */

  .title {
    position: relative;
    font-family: 'Open Sans';
    font-size: ${(props) => props.theme.fontlg};
  }
`;

export const YogaSeva = () => {
  return (
    <Container className='project-container'>
      <Image>
        <img
          src={drawing}
          alt='screenshot of drawing app'
          height='270px'
          width='480px'
        />
      </Image>
      <Bottom>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis iste,
          provident qui facere expedita veritatis animi odit doloribus
          distinctio quas asperiores aperiam iusto sunt nobis ab sequi. Quidem,
          perferendis dolor!
        </p>
        <h1 className='title'>Yoga Seva</h1>
      </Bottom>
    </Container>
  );
};
export const Colorful = () => {
  return (
    <Container className='project-container'>
      <Image>
        <img
          src={drawing}
          alt='screenshot of drawing app'
          height='270px'
          width='480px'
        />
      </Image>
      <Bottom>
        <h1 className='title'>Colorful</h1>
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
  return (
    <Container className='project-container'>
      <Image>
        <img
          src={drawing}
          alt='screenshot of drawing app'
          height='270px'
          width='480px'
        />
      </Image>
      <Bottom>
        <h1 className='title'>Parking Checker</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis iste,
          provident qui facere expedita veritatis animi odit doloribus
          distinctio quas asperiores aperiam iusto sunt nobis ab sequi. Quidem,
          perferendis dolor!
        </p>
      </Bottom>
    </Container>
  );
};
export const AuroraSynth = () => {
  return (
    <Container className='project-container'>
      <Image>
        <img
          src={aurora}
          alt='screenshot of drawing app'
          height='270px'
          width='480px'
        />
      </Image>
      <Bottom>
        <h1 className='title'>Aurora Synth</h1>
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
