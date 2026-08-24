import "./App.css";

function App() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">Rohit<span>.</span></div>
        <div className="navLinks">
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="badge">AVAILABLE FOR FREELANCE WORK</div>

        <h1>
          I build modern websites
          <br />
          that <span>grow businesses.</span>
        </h1>

        <p>
          Frontend Web Developer building fast, responsive and modern
          websites using HTML, CSS, JavaScript and React.
        </p>

        <div className="buttons">
          <a className="primary" href="#projects">View My Work →</a>
          <a className="secondary" href="#contact">Hire Me</a>
        </div>

        <div className="skills">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Responsive Design</span>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Projects I've built.</h2>

        <div className="cards">
          <article className="card">
            <div className="projectNumber">01</div>
            <h3>GoldCalc India</h3>
            <p>
              Responsive gold and silver calculation platform with multiple
              calculators and search-engine optimized pages.
            </p>
            <div className="tags">
              <span>React</span><span>JavaScript</span><span>SEO</span>
            </div>
            <a
              className="projectLink"
              href="https://goldcalc-india.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              View Live Project →
            </a>
          </article>

          <article className="card">
            <div className="projectNumber">02</div>
            <h3>Modern Business Website</h3>
            <p>
              Clean, responsive business website designed for fast loading
              and a professional experience on every device.
            </p>
            <div className="tags">
              <span>HTML</span><span>CSS</span><span>Responsive</span>
            </div>
          </article>

          <article className="card">
            <div className="projectNumber">03</div>
            <h3>Interactive Web Experience</h3>
            <p>
              Modern interactive frontend experience focused on polished
              visuals, responsive layouts and smooth user interactions.
            </p>
            <div className="tags">
              <span>React</span><span>UI</span><span>Frontend</span>
            </div>
          </article>
        </div>
      </section>

      <section id="services" className="section">
        <p className="eyebrow">WHAT I DO</p>
        <h2>How I can help.</h2>

        <div className="services">
          <div><b>01</b><h3>Website Development</h3><p>Fast and modern websites built from scratch.</p></div>
          <div><b>02</b><h3>Responsive Design</h3><p>Layouts that work beautifully across phones, tablets and desktops.</p></div>
          <div><b>03</b><h3>Website Improvements</h3><p>Frontend fixes, redesigns, performance improvements and UI updates.</p></div>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">LET'S WORK TOGETHER</p>
        <h2>Have a project in mind?</h2>
        <p>I'm available for freelance website development projects.</p>
        <a href="mailto:mahakaljaat579@gmail.com">Start a Project →</a>
      </section>

      <footer>
        <div>Rohit<span>.</span></div>
        <p>Frontend Web Developer · India</p>
        <p>© 2026 Rohit</p>
      </footer>
    </main>
  );
}

export default App;
