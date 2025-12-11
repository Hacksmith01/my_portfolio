import React, { useState, type FormEvent } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    // Construct the mailto link
    // Subject: Project
    // Body: Message + Name/Email signature
    const subject = encodeURIComponent(project || 'Portfolio Contact');
    const bodyContent = `${message}\n\n----------------\nFrom: ${name}\nEmail: ${email}`;
    const body = encodeURIComponent(bodyContent);

    // Open default mail client
    window.location.href = `mailto:ishanpatil2005@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>
      <p className="section__subtitle" style={{ maxWidth: '700px', margin: '0 auto 3rem', padding: '0 1rem', color: 'var(--title-color)' }}>
        I&apos;m always open to interesting projects in web dev, AI/ML, cybersecurity, and
        data-driven tools. Reach out and let&apos;s build something.
      </p>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="fas fa-phone contact__icon"></i>

            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+91 7349177645</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="fas fa-envelope contact__icon"></i>

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">ishanpatil2005@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="fas fa-map-marker-alt contact__icon"></i>

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Bengaluru, Karnataka, India</span>
            </div>
          </div>
        </div>

        <form onSubmit={sendEmail} className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label className="contact__label">Name</label>
              <input
                type="text"
                className="contact__input"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="contact__content">
              <label className="contact__label">Email</label>
              <input
                type="email"
                className="contact__input"
                placeholder="your@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="contact__content">
            <label className="contact__label">Project</label>
            <input
              type="text"
              className="contact__input"
              placeholder="What do you want to build?"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
          </div>
          <div className="contact__content">
            <label className="contact__label">Message</label>
            <textarea
              cols={0}
              rows={7}
              className="contact__input"
              placeholder="Tell me a bit about your idea."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div>
            <button type="submit" className="button button--flex">
              Send Message
              <i className="fas fa-paper-plane button__icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
