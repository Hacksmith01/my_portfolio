import React, { useState, useEffect, useRef } from 'react';

type SkillCategory = 'web' | 'cs' | 'backend' | 'ml' | 'tools';

interface SkillBar {
  name: string;
  percentage: number;
}

interface SkillSection {
  id: SkillCategory;
  title: string;
  subtitle: string;
  icon: string;
  skills: SkillBar[];
  isTools?: boolean; // For Tools & Practices section (no bars)
}

const Skills: React.FC = () => {
  const [openSkill, setOpenSkill] = useState<SkillCategory | null>('web');
  const [animatedSections, setAnimatedSections] = useState<Set<SkillCategory>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimatedRef = useRef(false);
  const openSkillRef = useRef<SkillCategory | null>('web');

  const skillSections: SkillSection[] = [
    {
      id: 'web',
      title: 'Web Development',
      subtitle: 'HTML, CSS, JavaScript, React',
      icon: 'fas fa-code',
      skills: [
        { name: 'HTML', percentage: 85 },
        { name: 'CSS', percentage: 75 },
        { name: 'JavaScript (ES6+)', percentage: 65 },
        { name: 'React (JSX)', percentage: 75 },
      ],
    },
    {
      id: 'cs',
      title: 'Programming & CS',
      subtitle: 'Core languages & problem-solving',
      icon: 'fas fa-brain',
      skills: [
        { name: 'C', percentage: 80 },
        { name: 'Java', percentage: 75 },
        { name: 'Python', percentage: 70 },
      ],
    },
    {
      id: 'backend',
      title: 'Backend & Databases',
      subtitle: 'Node.js, SQL, NoSQL',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', percentage: 65 },
        { name: 'MySQL', percentage: 75 },
        { name: 'MongoDB', percentage: 80 },
        { name: 'Linux / Kali', percentage: 65 },
      ],
    },
    {
      id: 'ml',
      title: 'Machine Learning & Image Processing',
      subtitle: 'Image preprocessing, ML models, evaluation',
      icon: 'fas fa-microscope',
      skills: [
        { name: 'Image Processing (OpenCV)', percentage: 70 },
        { name: 'Applied Machine Learning', percentage: 65 },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Practices',
      subtitle: 'Ecosystem & workflow',
      icon: 'fas fa-tools',
      skills: [],
      isTools: true,
    },
  ];

  const toolsList = [
    'Git & GitHub',
    'REST APIs',
    'Jira / Agile basics',
    'VS Code',
    'Linux terminal',
  ];

  const handleSkillToggle = (category: SkillCategory) => {
    const wasOpen = openSkill === category;
    const newOpenSkill = wasOpen ? null : category;
    setOpenSkill(newOpenSkill);
    openSkillRef.current = newOpenSkill;
    
    // Trigger animation when accordion opens for the first time
    if (!wasOpen && !animatedSections.has(category) && category !== 'tools') {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        setAnimatedSections((prev) => new Set(prev).add(category));
      }, 100);
    }
  };

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            // Animate the first open section if it hasn't been animated yet
            const currentOpenSkill = openSkillRef.current;
            if (currentOpenSkill && currentOpenSkill !== 'tools') {
              setTimeout(() => {
                setAnimatedSections((prev) => {
                  if (!prev.has(currentOpenSkill)) {
                    return new Set(prev).add(currentOpenSkill);
                  }
                  return prev;
                });
              }, 200);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getPercentageClass = (percentage: number): string => {
    // Map percentage to existing CSS classes or create dynamic style
    if (percentage >= 80) return 'skills__html';
    if (percentage >= 75) return 'skills__react';
    if (percentage >= 70) return 'skills__css';
    return 'skills__js';
  };

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          {skillSections.map((section) => (
            <div
              key={section.id}
              className={`skills__content ${
                openSkill === section.id ? 'skills__open' : 'skills__close'
              }`}
            >
              <div
                className="skills__header"
                onClick={() => handleSkillToggle(section.id)}
              >
                <i className={`${section.icon} skills__icon`}></i>

                <div>
                  <h1 className="skills__title">{section.title}</h1>
                  <span className="skills__subtitle">{section.subtitle}</span>
                </div>

                <i className="fas fa-angle-down skills__arrow"></i>
              </div>

              {section.isTools ? (
                <div className="skills__tools-list">
                  {toolsList.map((tool, index) => (
                    <span key={index} className="skills__tool-badge">
                      {tool}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="skills__list grid">
                  {section.skills.map((skill, index) => {
                    const hasAnimated = animatedSections.has(section.id);
                    return (
                      <div key={index} className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">{skill.name}</h3>
                          <span className="skills__number">{skill.percentage}%</span>
                        </div>
                        <div className="skills__bar">
                          <span
                            className={`skills__percentage ${getPercentageClass(skill.percentage)}`}
                            style={{
                              width: hasAnimated ? `${skill.percentage}%` : '0%',
                              opacity: hasAnimated ? 1 : 0,
                              transition: hasAnimated
                                ? `width 0.7s ease-out ${index * 0.1}s, opacity 0.7s ease-out ${index * 0.1}s`
                                : 'none',
                            }}
                          ></span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
