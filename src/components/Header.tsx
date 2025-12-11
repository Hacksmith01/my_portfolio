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

  return (
    <header className={`header ${headerScrolled ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Ishan
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className={navLinkClass('home')}>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className={navLinkClass('about')}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className={navLinkClass('skills')}>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className={navLinkClass('qualification')}>
                Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#experience" className={navLinkClass('experience')}>
                Experience
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className={navLinkClass('portfolio')}>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className={navLinkClass('contact')}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__btns">
          {/* Dark theme icon */}
          <i
            className={`fas ${themeIconClass} change-theme`}
            id="theme-button"
            onClick={toggleTheme}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
