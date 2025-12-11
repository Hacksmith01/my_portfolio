import React, { useEffect, useRef, useState } from 'react';

type InfoCard = {
  title: string;
  icon: string;
  lines: string[];
};

type Stat = {
  label: string;
  value: string;
};

const infoCards: InfoCard[] = [
  {
    title: 'Focus Areas',
    icon: 'fas fa-bullseye',
    lines: [
      'Full-Stack Web Development',
      'Applied Machine Learning & OCR',
      'Backend Systems & Databases',
      'Linux & Security Fundamentals',
    ],
  },
  {
    title: 'Current Goal',
    icon: 'fas fa-rocket',
    lines: ['Building real-world projects that combine', 'software engineering with applied AI.'],
  },
  {
    title: 'Personal Traits',
    icon: 'fas fa-user-check',
    lines: ['Problem-solver', 'Systems-oriented', 'Detail-focused', 'Project-driven learner'],
  },
];

const stats: Stat[] = [
  { label: 'Years programming', value: '2+' },
  { label: 'End-to-end projects', value: '6+' },
  { label: 'Hackathon experiences', value: '3+' },
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`about section ${isVisible ? 'about--visible' : ''}`}
      id="about"
      ref={sectionRef}
    >
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <div className="about__left">
          <div className="about__cards">
            {infoCards.map((card, idx) => (
              <div
                key={card.title}
                className="about__card about__anim-card"
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="about__card-header">
                  <i className={`${card.icon} about__card-icon`} aria-hidden="true"></i>
                  <h3 className="about__card-title">{card.title}</h3>
                </div>
                <ul className="about__card-list">
                  {card.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="about__right">
          <div className="about__text about__anim-text">
            <p>
              I’m Ishan, an undergraduate developer from India focused on building practical,
              end-to-end software systems.
            </p>
            <p>
              I work across web development, backend engineering, and applied machine learning, with
              hands-on experience in projects such as disaster alert platforms, OCR-based text
              analyzers, and medical image processing tools.
            </p>
            <p>
              I enjoy solving real problems through clean system design, thoughtful implementation,
              and continuous learning.
            </p>
          </div>

          <div className="about__stats about__anim-stats">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="about__stat"
                style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
              >
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="about__buttons about__anim-buttons">
            <a
              download
              href="https://drive.google.com/uc?export=download&id=1ejDE08puZ6qc-ekDuNnmfzwmzTPY9Fdx"
              className="button button--flex"
            >
              <i className="fas fa-file-download button__icon"></i>
               Download CV
            </a>
            <a href="#portfolio" className="button button--flex button--ghost">
              View Projects <i className="fas fa-arrow-right button__icon"></i> 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
