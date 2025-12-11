import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">Certifications &amp; Participation</span>

      <div className="experience__container container">
        {/* Certifications Section */}
        <div className="experience__section">
          <h3 className="experience__section-title">
            <i className="fas fa-certificate experience__section-icon"></i>
            Certifications
          </h3>
          <div className="experience__cards grid">
            {/* Certification 1 */}
            <div className="experience__card">
              <div className="experience__card-header">
                <i className="fas fa-award experience__card-icon"></i>
                <h4 className="experience__card-title">Samsung Innovation Campus (SIC) Program</h4>
              </div>
              <div className="experience__card-body">
                <p className="experience__card-issuer">Samsung R&amp;D Institute India – Bangalore</p>
                <p className="experience__card-description">Python, pandas, numpy, Jupyter Notebook</p>
                <div className="experience__card-badge">
                  <span className="experience__badge">#SIC_SRIB_2024</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/ishan-patil-32bb49242"
                  className="experience__card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            {/* Certification 2 */}
            <div className="experience__card">
              <div className="experience__card-header">
                <i className="fas fa-shield-alt experience__card-icon"></i>
                <h4 className="experience__card-title">Cybersecurity Fundamentals</h4>
              </div>
              <div className="experience__card-body">
                <p className="experience__card-issuer">IBM SkillsBuild (IBM)</p>
                <p className="experience__card-description">
                  Focused on core security concepts, threats, vulnerabilities, and best practices.
                </p>
                <a
                  href="https://www.credly.com/badges/3c98dfe5-c293-4ccd-ac49-8dde9d1300ae/public_url"
                  className="experience__card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            {/* Certification 3 */}
            <div className="experience__card">
              <div className="experience__card-header">
                <i className="fas fa-robot experience__card-icon"></i>
                <h4 className="experience__card-title">Introduction to Modern AI</h4>
              </div>
              <div className="experience__card-body">
                <p className="experience__card-issuer">Cisco Networking Academy</p>
                <p className="experience__card-description">
                  Fundamentals of modern AI concepts, applications, and impacts.
                </p>
                <a
                  href="https://www.credly.com/badges/cb3dd03c-6056-425a-84b4-70554ba29363/public_url"
                  className="experience__card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Participation Section */}
        <div className="experience__section">
          <h3 className="experience__section-title">
            <i className="fas fa-users experience__section-icon"></i>
            Participation &amp; Events
          </h3>
          <div className="experience__cards grid">
            {/* Participation Card 1 - GDSC Hackathon */}
            <div className="experience__card">
              <div className="experience__card-header">
                <i className="fas fa-trophy experience__card-icon"></i>
                <h4 className="experience__card-title">GDSC Hackathon</h4>
              </div>
              <div className="experience__card-body">
                <p className="experience__card-issuer">Google Developer Students Club</p>
                <p className="experience__card-date">
                  <i className="fas fa-calendar-alt"></i> 2024
                </p>
                <p className="experience__card-description">
                  Hackathon organised by GDSC KLEIT, Hubli
                </p>
                <div className="experience__card-badge">
                  <span className="experience__badge">2nd Place</span>
                </div>
              </div>
            </div>

            {/* Participation Card 2 - INSIGNIA-2025 */}
            <div className="experience__card">
              <div className="experience__card-header">
                <i className="fas fa-trophy experience__card-icon"></i>
                <h4 className="experience__card-title">INSIGNIA-2025</h4>
              </div>
              <div className="experience__card-body">
                <p className="experience__card-issuer">Dept. of CSE, SDMCET, Dharwad</p>
                <p className="experience__card-date">
                  <i className="fas fa-calendar-alt"></i> 2025
                </p>
                <p className="experience__card-description">
                  Built a smart BI tool for domain validation and email extraction during this 8-hour hackathon.
                </p>
                <div className="experience__card-badge">
                  <span className="experience__badge">Participant</span>
                </div>
              </div>
            </div>

            {/* Participation Card 3 - Hackkshetra 2.0 */}
            <div className="experience__card">
              <div className="experience__card-header">
                <i className="fas fa-trophy experience__card-icon"></i>
                <h4 className="experience__card-title">Hackkshetra 2.0</h4>
              </div>
              <div className="experience__card-body">
                <p className="experience__card-issuer">VVCE Mysore</p>
                <p className="experience__card-date">
                  <i className="fas fa-calendar-alt"></i> 2025
                </p>
                <p className="experience__card-description">
                  A 24-hour national-level hackathon, shortlisted from 430+ teams and placed in the Top 15 in the AI-Agri domain.
                </p>
                <div className="experience__card-badge">
                  <span className="experience__badge">Top 15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
