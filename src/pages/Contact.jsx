import { NavLink as Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      {/* CONTACT */}
      <div id='contact'>
        <div>
          <h1>Contact</h1>
        </div>
        <div>
          <h3>
            Drop me a line. I would love to chat about projects, philosphy,
            games, music, art, movies...everything!{' '}
          </h3>
        </div>
        {/* SOCIALS */}
        <ul>
          <h2>Socials</h2>

          <li>
            <Link
              href={'https://www.linkedin.com/in/ethanpiercepresents/'}
              target='_blank'
            >
              <span>LinkedIn</span>
            </Link>
          </li>

          <li>
            <Link
              href={'https://www.instagram.com/eeebypristine/'}
              target='_blank'
            >
              <span>Instagram</span>
            </Link>
          </li>

          <li>
            <Link href={'https://github.com/jumpybuns'} target='_blank'>
              <span>GitHub</span>
            </Link>
          </li>
        </ul>
        <ul>
          {/* CONTACTS*/}
          <h2>Contacts</h2>
          <li>
            <Link href={'mailto:ethanpiercepresents@gmail.com'} target='_blank'>
              <span>Email</span>
            </Link>
          </li>
          <li>
            <Link
              href={
                'https://api.whatsapp.com/send/?phone=%2B15419999714&text=Hi%21&app_absent=0'
              }
              target='_blank'
            >
              <span>WhatsApp</span>
            </Link>
          </li>
          <li>541.999.9714</li>
        </ul>
        <div>
          {/* RESUME */}
          <a href='/resume.pdf' download='Ethan Pierce'>
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
