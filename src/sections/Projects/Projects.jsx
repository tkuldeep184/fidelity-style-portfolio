function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div>
        <h3>AI Image Generator</h3>
        <p>
          A full-stack web application that converts text prompts into
          AI-generated images. The project includes a responsive user interface
          built with React and a secure backend for handling API requests.
        </p>
        <p>
          <strong>Tech:</strong> React.js, Node.js, Tailwind CSS, Clipdrop API
        </p>
      </div>

      <div>
        <h3>Food Delivery Website</h3>
        <p>
          A full-stack food ordering platform featuring user authentication,
          shopping cart functionality, and online payments. The project includes
          an admin panel for managing menu items and orders, with Stripe
          integration for secure transactions.
        </p>
        <p>
          <strong>Tech:</strong> React.js, Node.js, Express.js, MongoDB, Stripe
        </p>
      </div>
    </section>
  );
}

export default Projects;
