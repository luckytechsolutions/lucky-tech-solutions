import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Website",
    category: "Web Development",
    description:
      "A modern and responsive e-commerce website designed for a growing business.",
  },
  {
    title: "Admin Dashboard",
    category: "Dashboard",
    description:
      "A professional admin dashboard for managing products, orders and customers.",
  },
  {
    title: "Business Website",
    category: "Website Development",
    description:
      "A clean and modern business website built to create a strong online presence.",
  },
];

const reviews = [
  {
    name: "Client Review",
    business: "Business Owner",
    review:
      "Professional work, clean design and good communication throughout the project.",
  },
  {
    name: "Happy Client",
    business: "Business Owner",
    review:
      "The website looks modern and works smoothly on mobile and desktop.",
  },
  {
    name: "Client Feedback",
    business: "Business Owner",
    review:
      "Good support and attention to the requirements. Very satisfied with the result.",
  },
];

function Projects() {
  return (
    <div className="projects-page">

      {/* Hero */}
      <section className="projects-hero">
        <span className="projects-badge">
          Our Work & Client Feedback
        </span>

        <h1>
          Projects That Make
          <span> Businesses Stand Out.</span>
        </h1>

        <p>
          Explore some of our digital projects and see what our clients
          have to say about working with Lucky Tech Solutions.
        </p>
      </section>

      {/* Projects */}
      <section className="projects-section">
        <div className="section-heading">
          <span>OUR PROJECTS</span>

          <h2>
            Digital solutions built
            <br />
            for real businesses.
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                <div className="project-number">
                  0{index + 1}
                </div>

                <div className="project-preview">
                  <span>{project.category}</span>
                  <strong>{project.title}</strong>
                </div>
              </div>

              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <button className="project-link">
                  View Project →
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews-section">

        <div className="section-heading center">
          <span>CLIENT REVIEWS</span>

          <h2>
            What our clients
            <br />
            say about us.
          </h2>

          <p>
            We focus on quality, communication and long-term support.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>

              <div className="stars">
                ★ ★ ★ ★ ★
              </div>

              <p className="review-text">
                "{review.review}"
              </p>

              <div className="review-user">
                <div className="review-avatar">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h4>{review.name}</h4>
                  <span>{review.business}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="projects-cta">
        <div>
          <span>HAVE A PROJECT IN MIND?</span>

          <h2>
            Let's build something
            <br />
            amazing together.
          </h2>
        </div>

        <a href="/#contact" className="cta-button">
          Start a Project →
        </a>
      </section>

    </div>
  );
}

export default Projects;