import React, { useState } from 'react';

const Services: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I work on</span>

      <div className="services__container container grid">
        {/* 1 - Full-Stack Web */}
        <div className="services__content">
          <div>
            <i className="fas fa-layer-group services__icon"></i>
            <h3 className="services__title">
              Full-Stack
              <br /> Web Development
            </h3>
          </div>

          <span className="services__button" onClick={() => setActiveModal(0)}>
            View More <i className="fas fa-arrow-right button__icon"></i>
          </span>

          <div className={`services__modal ${activeModal === 0 ? 'active-modal' : ''}`}>
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Full-Stack
                <br /> Web Development
              </h4>
              <i
                className="fas fa-times services__modal-close"
                onClick={() => setActiveModal(null)}
              ></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="fas fa-check-circle services__modal-icon"></i>
                  <p>Responsive web apps using HTML, CSS, JavaScript, and React.</p>
                </li>
                <li className="services__modal-service">
                  <i className="fas fa-check-circle services__modal-icon"></i>
                  <p>REST APIs and backend logic using Node.js, MySQL, and MongoDB.</p>
                </li>
                <li className="services__modal-service">
                  <i className="fas fa-check-circle services__modal-icon"></i>
                  <p>Real-time dashboards and structured project architecture.</p>
                </li>
                <li className="services__modal-service">
                  <i className="fas fa-check-circle services__modal-icon"></i>
                  <p>Clean, component-based UI with reusable code.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2 - AI / Medical */}
        <div className="services__content">
          <div>
            <i className="fas fa-brain services__icon"></i>
            <h3 className="services__title">
              AI / ML &amp;
              <br /> Medical Imaging
            </h3>
          </div>

          <span className="services__button" onClick={() => setActiveModal(1)}>
            View More <i className="fas fa-arrow-right button__icon"></i>
          </span>

          <div className={`services__modal ${activeModal === 1 ? 'active-modal' : ''}`}>
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                AI / ML &amp;
                <br /> Medical Imaging
              </h4>
              <i
                className="fas fa-times services__modal-close"
                onClick={() => setActiveModal(null)}
              ></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="fas fa-check-circle services__modal-icon"></i>
                  <p>Image preprocessing and pipelines for X-ray/medical images.</p>
                </li>
                <li className="services__modal-service">
                  <i className="fas fa-check-circle services__modal-icon"></i>
                  <p>Evaluation metrics like SSIM, MSE, and accuracy.</p>
                </li>
                <li className="services__modal-service">
                  <i className="fas fa-check-circle services__modal-icon"></i>
                  <p>Experiment management and Agile planning via Jira.</p>
                </li>
                <li className="services__modal-service">
                  <i className="fas fa-check-circle services__modal-icon"></i>
                  <p>Research-style prototypes for smart diagnosis.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 - Automation / Scraping */}
        <div className="services__content">
          <div>
            <i className="fas fa-pen services__icon"></i>
            <h3 className="services__title">
              Automation &amp;
              <br /> Web Scraping
            </h3>
          </div>

          <span className="services__button" onClick={() => setActiveModal(2)}>
            View More <i className="fas fa-arrow-right button__icon"></i>
          </span>

          <div className={`services__modal ${activeModal === 2 ? 'active-modal' : ''}`}>
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Automation &amp;
                <br /> Web Scraping
              </h4>
              <i
                className="fas fa-times services__modal-close"
                onClick={() => setActiveModal(null)}
              ></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="fas fa-check-circle services__modal-icon"></i>
                  <p>Lead generation by scraping contact emails and data.</p>
                </li>
                <li className="services__modal-service">
                  <i className="fas fa-check-circle services__modal-icon"></i>
                  <p>Checking active domains and exporting data to CSV/DB.</p>
                </li>
                <li className="services__modal-service">
                  <i className="fas fa-check-circle services__modal-icon"></i>
                  <p>OCR and text extraction from PDFs, images, and more.</p>
                </li>
                <li className="services__modal-service">
                  <i className="fas fa-check-circle services__modal-icon"></i>
                  <p>Small automation tools for repetitive tasks.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
