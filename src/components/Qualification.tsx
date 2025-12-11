import React from 'react';

type EducationItem = {
  title: string;
  subtitle: string;
  details: string[];
  icon: string;
};

const education: EducationItem[] = [
  {
    title: 'KLE Institute of Technology, Hubli',
    subtitle: 'Bachelor of Computer Science & Engineering (Pursuing)',
    details: [
      'Strong foundation in computer science fundamentals',
      'Focus on software engineering, data structures, and applied technologies',
      'GPA: 8.5',
    ],
    icon: 'fas fa-university',
  },
  {
    title: 'Delhi Public School, India',
    subtitle: 'Higher Secondary (12th) & Secondary (10th)',
    details: ['Academic foundation in mathematics, science, and computer studies'],
    icon: 'fas fa-school',
  },
];

const Qualification: React.FC = () => {
  const getSide = (index: number) => (index % 2 === 0 ? 'left' : 'right');

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__sections">
          {/* Education */}
          <div className="qualification__content qualification__active" data-content id="education">
            <div className="qualification__timeline">
              <div className="qualification__line" aria-hidden="true" />
              {education.map((item, idx) => {
                const side = getSide(idx);
                return (
                  <div key={item.title} className={`qualification__item qualification__item--${side}`}>
                    <span className="qualification__rounder" aria-hidden="true"></span>
                    {idx < education.length - 1 && (
                      <span className="qualification__line-segment" aria-hidden="true"></span>
                    )}
                    <div className="qualification__card qualification__card--timeline">
                      <div className="qualification__card-header">
                        <i className={`${item.icon} qualification__card-icon`} aria-hidden="true"></i>
                        <div>
                          <h3 className="qualification__card-title">{item.title}</h3>
                          <p className="qualification__card-subtitle">{item.subtitle}</p>
                        </div>
                      </div>
                      <ul className="qualification__card-list">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

