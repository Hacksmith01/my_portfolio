import React from 'react';

interface HeaderProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  activeSection: string;
  headerScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({
  isDarkTheme,
  toggleTheme,
  activeSection,
  headerScrolled,
}) => {
  const themeIconClass = isDarkTheme ? 'fa-sun' : 'fa-moon';

  const navLinkClass = (id: string) =>
    `nav__link ${activeSection === id ? 'active-link' : ''}`;

  const [Toggle, showMenu] = React.useState(false);

  return (
    <header className={`header ${headerScrolled ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Ishan
        </a>

        {/* Overlay to close menu when clicking outside */}
        <div
          className={Toggle ? "nav__overlay show-overlay" : "nav__overlay"}
          onClick={() => showMenu(false)}
        ></div>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" onClick={() => showMenu(false)} className={navLinkClass('home')}>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" onClick={() => showMenu(false)} className={navLinkClass('about')}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" onClick={() => showMenu(false)} className={navLinkClass('skills')}>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" onClick={() => showMenu(false)} className={navLinkClass('qualification')}>
                Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#experience" onClick={() => showMenu(false)} className={navLinkClass('experience')}>
                Experience
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" onClick={() => showMenu(false)} className={navLinkClass('portfolio')}>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" onClick={() => showMenu(false)} className={navLinkClass('contact')}>
                Contact
              </a>
            </li>
          </ul>
          <i className="fas fa-times nav__close" onClick={() => showMenu(false)}></i>
        </div>

        <div className="nav__btns">
          {/* Dark theme icon */}
          <i
            className={`fas ${themeIconClass} change-theme`}
            id="theme-button"
            onClick={toggleTheme}
          ></i>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
