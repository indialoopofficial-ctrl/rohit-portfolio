import './App.css'

const projects = [
  {
    id: '01',
    title: 'GoldCalc India',
    description: 'A responsive calculator platform for gold, silver and jewellery calculations with SEO-focused pages and a clean mobile-first interface.',
    tags: ['React', 'JavaScript', 'SEO'],
    link: 'https://goldcalc-india.vercel.app/'
  },
  {
    id: '02',
    title: 'Modern Business Website',
    description: 'A polished business website concept focused on strong visuals, responsive layout, clear calls-to-action and fast performance.',
    tags: ['HTML', 'CSS', 'Responsive'],
    link: '#contact'
  },
  {
    id: '03',
    title: 'Interactive Web Experience',
    description: 'A modern React frontend experience with responsive sections, reusable components and smooth interactions for a premium feel.',
    tags: ['React', 'UI', 'Frontend'],
    link: '#contact'
  }
]

const services = [
  ['01', 'Website Development', 'Fast, responsive websites built from scratch using clean and maintainable code.'],
  ['02', 'Landing Pages', 'Conversion-focused landing pages with modern layouts and clear calls-to-action.'],
  ['03', 'Responsive Design', 'Mobile-first layouts that look polished on phones, tablets and desktops.'],
  ['04', 'Website Improvements', 'Frontend fixes, redesigns, UI updates and performance-focused improvements.']
]

function App() {
  return (
    <main>
      <header className="siteHeader">
        <nav className="navbar">
          <a className="logo" href="#top" aria-label="Rohit home">Rohit<span>.</span></a>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="heroCopy">
          <div className="badge"><i /> AVAILABLE FOR FREELANCE WORK</div>
          <p className="kicker">FRONTEND WEB DEVELOPER</p>
          <h1>I build modern websites that <span>help businesses grow.</span></h1>
          <p className="heroText">I create fast, responsive and professional websites using HTML, CSS, JavaScript and React — built to look great on every device.</p>
          <div className="buttons">
            <a className="primary" href="#projects">View My Work <span>↗</span></a>
            <a className="secondary" href="#contact">Start a Project</a>
          </div>
          <div className="skills" aria-label="Skills">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite', 'Responsive Design'].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
        <div className="heroVisual" aria-hidden="true">
          <div className="codeCard">
            <div className="codeTop"><span /><span /><span /></div>
            <div className="codeLines">
              <p><b>const</b> developer = {'{'}</p>
              <p className="indent">name: <em>'Rohit'</em>,</p>
              <p className="indent">focus: <em>'Modern Web'</em>,</p>
              <p className="indent">quality: <em>'High'</em>,</p>
              <p className="indent">responsive: <strong>true</strong></p>
              <p>{'}'}</p>
            </div>
          </div>
          <div className="glowOrb" />
        </div>
      </section>

      <section id="about" className="section shell twoCol">
        <div>
          <p className="eyebrow">ABOUT ME</p>
          <h2>Clean code. Strong design. Reliable delivery.</h2>
        </div>
        <div className="aboutText">
          <p>I focus on building websites that are simple to use, easy to maintain and visually polished. My goal is to understand what a client needs and turn it into a professional web experience.</p>
          <p>I work primarily with HTML, CSS, JavaScript and React, with a strong focus on responsive layouts and frontend quality.</p>
          <div className="stats">
            <div><strong>100%</strong><span>Responsive</span></div>
            <div><strong>Clean</strong><span>Code</span></div>
            <div><strong>Fast</strong><span>Delivery Focus</span></div>
          </div>
        </div>
      </section>

      <section id="projects" className="section shell">
        <p className="eyebrow">SELECTED WORK</p>
        <div className="sectionHead"><h2>Projects I've built.</h2><p>A few examples of the kind of websites and interfaces I can create.</p></div>
        <div className="cards">
          {projects.map((project) => (
            <article className="card" key={project.id}>
              <div className="cardTop"><span className="projectNumber">{project.id}</span><a href={project.link} target={project.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer">↗</a></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section shell">
        <p className="eyebrow">WHAT I DO</p>
        <div className="sectionHead"><h2>How I can help.</h2><p>Focused services for small businesses, creators and growing brands.</p></div>
        <div className="services">
          {services.map(([num, title, text]) => (
            <article key={num}><b>{num}</b><div><h3>{title}</h3><p>{text}</p></div><span>↗</span></article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact shell">
        <div className="contactInner">
          <p className="eyebrow">LET'S WORK TOGETHER</p>
          <h2>Have a website project in mind?</h2>
          <p>Tell me what you need. I can help turn your idea into a clean, responsive and professional website.</p>
          <div className="buttons contactButtons">
            <a className="primary" href="mailto:mahakaljaat579@gmail.com">Email Me <span>↗</span></a>
            <a className="secondary" href="https://wa.me/917878072194" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="logo" href="#top">Rohit<span>.</span></a>
        <p>Frontend Web Developer · India</p>
        <p>© 2026 Rohit</p>
      </footer>
    </main>
  )
}

export default App
