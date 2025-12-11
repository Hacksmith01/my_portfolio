import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Ishan</h1>
            <span className="footer__subtitle">
              CSE Under Graduate
            </span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#home" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://github.com/Hacksmith01"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/sunnz0_0/"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">&#169; Ishan. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
