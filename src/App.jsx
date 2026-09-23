import "./App.css";

function App() {
  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <a href="#home" className="brand">
          <img
            src="/logo.png"
            alt="Lucky Tech Solutions"
            className="company-logo"
          />

          <div className="brand-name">
            <strong>Lucky Tech</strong>
            <span>Solutions</span>
          </div>
        </a>

        {/* MOBILE MENU */}
        <input
          type="checkbox"
          id="mobile-menu-toggle"
          className="mobile-menu-toggle"
        />

        <label
          htmlFor="mobile-menu-toggle"
          className="mobile-menu-btn"
        >
          ☰
        </label>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Talk <span>↗</span>
        </a>
      </header>

      {/* ================= HERO ================= */}
      <main>
        <section id="home" className="hero">
          <div className="hero-shape hero-shape-one"></div>
          <div className="hero-shape hero-shape-two"></div>
          <div className="hero-shape hero-shape-three"></div>

          <div className="hero-content">
            <div className="hero-tag">
              <span className="tag-dot"></span>
              Digital Solutions for Growing Businesses
            </div>

            <h1>
              We Create
              <span>Digital Experiences</span>
              People Remember.
            </h1>

            <p>
              From modern websites to powerful e-commerce platforms and
              business dashboards, we turn ideas into digital experiences
              designed to grow.
            </p>

            <div className="hero-actions">
              <a href="#services" className="primary-btn">
                Explore Services
                <span>→</span>
              </a>

              <a href="#contact" className="outline-btn">
                Start a Project
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <strong>Creative</strong>
                <span>Design</span>
              </div>

              <div className="trust-line"></div>

              <div className="trust-item">
                <strong>Modern</strong>
                <span>Technology</span>
              </div>

              <div className="trust-line"></div>

              <div className="trust-item">
                <strong>Business</strong>
                <span>Focused</span>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="floating-card card-one">
              <span className="mini-icon">✦</span>
              <div>
                <strong>Web Design</strong>
                <small>Creative & Modern</small>
              </div>
            </div>

            <div className="main-visual-card">
              <div className="visual-header">
                <div className="visual-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <span>LUCKY TECH</span>
              </div>

              <div className="visual-body">
                <span className="visual-label">DIGITAL STUDIO</span>

                <h2>
                  Build.
                  <br />
                  Design.
                  <br />
                  <em>Grow.</em>
                </h2>

                <div className="visual-gradient-line"></div>

                <div className="visual-bottom">
                  <div>
                    <strong>05+</strong>
                    <span>Services</span>
                  </div>

                  <div>
                    <strong>100%</strong>
                    <span>Responsive</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card card-two">
              <span className="check-icon">✓</span>
              <div>
                <strong>Mobile Ready</strong>
                <small>Every Screen</small>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="services-section">
          <div className="section-intro">
            <div>
              <span className="section-label">WHAT WE DO</span>
              <h2>
                Solutions that make
                <br />
                your business <span>stand out.</span>
              </h2>
            </div>

            <p>
              We combine thoughtful design, modern technology and business
              goals to create digital products that actually work for you.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card service-purple">
              <div className="service-top">
                <span>01</span>
                <div className="service-icon">⌘</div>
              </div>

              <div className="service-content">
                <h3>Website Development</h3>
                <p>
                  Professional, fast and responsive websites designed around
                  your brand and business goals.
                </p>
              </div>

              <span className="card-arrow">↗</span>
            </article>

            <article className="service-card service-blue">
              <div className="service-top">
                <span>02</span>
                <div className="service-icon">◇</div>
              </div>

              <div className="service-content">
                <h3>E-Commerce Website</h3>
                <p>
                  Beautiful online stores with product management, cart,
                  checkout and customer-friendly experiences.
                </p>
              </div>

              <span className="card-arrow">↗</span>
            </article>

            <article className="service-card service-peach">
              <div className="service-top">
                <span>03</span>
                <div className="service-icon">▦</div>
              </div>

              <div className="service-content">
                <h3>Admin Dashboard</h3>
                <p>
                  Powerful dashboards to manage products, orders, customers
                  and important business information.
                </p>
              </div>

              <span className="card-arrow">↗</span>
            </article>

            <article className="service-card service-mint">
              <div className="service-top">
                <span>04</span>
                <div className="service-icon">✧</div>
              </div>

              <div className="service-content">
                <h3>Website Redesign</h3>
                <p>
                  Turn an outdated website into a fresh, modern and engaging
                  digital experience.
                </p>
              </div>

              <span className="card-arrow">↗</span>
            </article>

            <article className="service-card service-lavender">
              <div className="service-top">
                <span>05</span>
                <div className="service-icon">↻</div>
              </div>

              <div className="service-content">
                <h3>Website Maintenance</h3>
                <p>
                  Keep your website secure, updated and performing smoothly
                  with ongoing technical support.
                </p>
              </div>

              <span className="card-arrow">↗</span>
            </article>
          </div>
        </section>

        {/* ================= WHY US ================= */}
        <section id="why-us" className="why-section">
          <div className="why-background-circle"></div>

          <div className="why-container">
            <div className="why-heading">
              <span className="section-label">WHY LUCKY TECH</span>

              <h2>
                More than a website.
                <br />
                <span>A digital partner.</span>
              </h2>

              <p>
                We don't just build pages. We understand your business,
                translate your ideas into digital experiences and help you
                present your brand professionally online.
              </p>

              <a href="#contact" className="text-link">
                Let's build something great <span>→</span>
              </a>
            </div>

            <div className="why-cards">
              <div className="why-card">
                <div className="why-number">01</div>
                <h3>Modern Design</h3>
                <p>
                  Clean, premium and memorable interfaces that represent your
                  brand professionally.
                </p>
              </div>

              <div className="why-card">
                <div className="why-number">02</div>
                <h3>Mobile First</h3>
                <p>
                  Your website will be designed to look great on phones,
                  tablets and desktops.
                </p>
              </div>

              <div className="why-card">
                <div className="why-number">03</div>
                <h3>Custom Built</h3>
                <p>
                  No unnecessary templates. Your website is created according
                  to your actual requirements.
                </p>
              </div>

              <div className="why-card">
                <div className="why-number">04</div>
                <h3>Long-Term Support</h3>
                <p>
                  We stay available for improvements, updates and technical
                  support after delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="contact-section">
          <div className="contact-orb contact-orb-one"></div>
          <div className="contact-orb contact-orb-two"></div>

          <div className="contact-inner">
            <div className="contact-label">LET'S CREATE SOMETHING</div>

            <h2>
              Your idea deserves
              <br />
              a <span>great website.</span>
            </h2>

            <p>
              Have a project in mind? Let's talk about your idea and turn it
              into something people will remember.
            </p>

            <a
              href="https://wa.me/918778354849?text=Hi%20Lucky%20Tech%20Solutions,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Start a Conversation
              <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-brand">
          <img
            src="/logo.png"
            alt="Lucky Tech Solutions"
            className="footer-logo"
          />

          <div>
            <strong>Lucky Tech Solutions</strong>
            <span>Building digital experiences.</span>
          </div>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="mailto:luckytechsolutions786@gmail.com">
  luckytechsolutions786@gmail.com
</a>
      </footer>
    </div>
  );
}

export default App;