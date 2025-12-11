import React, { useEffect, useState } from 'react';

const TypingSubtitle: React.FC = () => {
  const words = [
    'Developer & ML / Cybersecurity Enthusiast',
    'Building clean & scalable software',
    'Working with AI/ML, OCR & automation',
  ];

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      // Faster when deleting
      setTypingSpeed(isDeleting ? 60 : 120);

      if (!isDeleting && text === fullText) {
        // Pause at full word before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        // Move to next word
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <span>
      {text}
      <span className="typing-cursor">|</span>
    </span>
  );
};

const Home: React.FC = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {/* Social logos with FontAwesome icons */}
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/Hacksmith01"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>

          {/* You can re-add your blob image here later as a separate component */}

          <div className="home__data">
            <h1 className="home__title">Hi, I&apos;m Ishan</h1>

            <h3 className="home__subtitle">
              <TypingSubtitle />
            </h3>

            <p className="home__description">
              I build practical projects in web development, AI/ML, medical imaging, OCR, and
              automation — from real-time disaster alert platforms to pneumonia detection systems
              and text analyzers.
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me <i className="fas fa-paper-plane button__icon"></i>
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="fas fa-mouse"></i>
            <span className="home__scroll-name"> Scroll down </span>
            <i className="fas fa-arrow-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
