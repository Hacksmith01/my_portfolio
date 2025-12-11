import React from 'react';

interface ScrollUpProps {
  show: boolean;
}

const ScrollUp: React.FC<ScrollUpProps> = ({ show }) => {
  return (
    <a
      href="#home"
      className={`scroll-arrow ${show ? 'scroll-arrow--show' : ''}`}
      aria-label="Scroll to top"
    >
      <svg
        className="scroll-arrow__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {/* vertical line */}
        <path d="M12 3 L12 21" />
        {/* arrow head */}
        <path d="M5 10 L12 3 L19 10" />
      </svg>
    </a>
  );
};

export default ScrollUp;
