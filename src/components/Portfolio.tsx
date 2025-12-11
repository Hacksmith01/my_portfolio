import React from 'react';
import disastersosImg from '../assets/project_imgs/disastersos.png';
import emailExtractImg from '../assets/project_imgs/email_extract.png';
import medvisionImg from '../assets/project_imgs/medvision.png';
import agriImg from '../assets/project_imgs/agri.png';
import ocrImg from '../assets/project_imgs/ocr.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string;
  tags?: string[];
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Real-Time Disaster Alert & Relief Platform',
      description:
        'Hackathon project simulating live disaster alerts, resource tracking, volunteer coordination, and an interactive map interface. Designed for real-time updates, fast incident reporting, and seamless user experience across devices.',
      image: disastersosImg,
      techStack: 'React, Node.js, MySQL, MongoDB, REST APIs, Maps API',
      tags: ['React', 'Node.js', 'MySQL', 'MongoDB', 'REST APIs', 'Maps API'],
    },
    {
      id: 2,
      title: 'Web Scraper for Active Domains & Email Extraction',
      description:
        'Developed a scalable web scraping system that discovers websites by keyword and country, validates active domains, and extracts emails reliably. Supports concurrency for faster crawling and exports data into structured CSV files.',
      image: emailExtractImg,
      techStack: 'Python, BeautifulSoup, Requests, Regex, Concurrency',
      tags: ['Python', 'BeautifulSoup', 'Requests', 'Regex', 'Concurrency'],
    },
    {
      id: 3,
      title: 'Pneumonia Detection Using Chest X-ray Image Analysis',
      description:
        'Built an end-to-end pneumonia detection system using medical image preprocessing and ML models. Compares X-ray images using SSIM and MSE metrics, with CNN-based classification achieving ~94% training accuracy. Integrated Google Gemini API to generate interpretable diagnostic insights.',
      image: medvisionImg,
      techStack: 'Python, Flask, OpenCV, CNNs, SSIM/MSE, Google Gemini API',
      tags: ['Python', 'Flask', 'OpenCV', 'CNNs', 'SSIM/MSE', 'Google Gemini API'],
    },
    {
      id: 4,
      title: 'Agri-Sense: AI for Agriculture',
      description:
        'Developed AgriSense, a full-stack AI agriculture platform offering crop recommendations, disease/pest detection, market insights, crop calendars, and multilingual AI assistance. Includes a mobile-first UI for low-connectivity regions and multiple AI backends for real-time advisory, chatbot interactions, and ML-driven predictions.',
      image: agriImg,
      techStack: 'Python, Flask, ML Models, Node.js, Express, Google Gemini (GenAI), Tailwind CSS, JavaScript, HTML',
      tags: ['Python', 'Flask', 'ML Models', 'Node.js', 'Express', 'Google Gemini', 'Tailwind CSS', 'JavaScript', 'HTML'],
    },
    {
      id: 5,
      title: 'OCR & Document Text Analyzer',
      description:
        'Python-based toolkit for extracting and analyzing text from PDFs, images, CSVs, and TXT files. Uses Tesseract OCR with advanced preprocessing (denoising, thresholding, rotation correction) and supports batch processing and text statistics generation.',
      image: ocrImg,
      techStack: 'Python, Tesseract OCR, OpenCV, Pandas',
      tags: ['Python', 'Tesseract OCR', 'OpenCV', 'Pandas'],
    },
  ];

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Some things I&apos;ve built</span>

      <div className="portfolio__wrapper">
        <div className="portfolio__container container">
          <div className="portfolio__carousel">
            <div className="portfolio__track">
              {duplicatedProjects.map((project, index) => (
                <div key={`${project.id}-${index}`} className="portfolio__card">
                  <div className="portfolio__image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="portfolio__img"
                    />
                  </div>

                  <div className="portfolio__content">
                    <h3 className="portfolio__title">{project.title}</h3>
                    <p className="portfolio__description">{project.description}</p>

                    {project.tags && project.tags.length > 0 && (
                      <div className="portfolio__tags">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="portfolio__tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
