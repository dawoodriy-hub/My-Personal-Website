import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, Code2, Cpu, Github, Sparkles, Terminal, Braces, Globe,
  ChevronDown, Menu, X, Star, Zap, BrainCircuit, Gamepad2, Rocket,
  BookOpen, Layers3, Mail, ExternalLink, CircleDot
} from 'lucide-react';
import './styles.css';

const projects = [
  { title: 'Dawood AI', tag: 'AI / PYTHON', text: 'An evolving playground for exploring AI ideas, prompts and practical experiments.', icon: BrainCircuit, status: 'Exploring', featured: true },
  { title: 'Simple Python Games', tag: 'PYTHON', text: 'Small games built while learning programming fundamentals, logic, loops and problem solving.', icon: Gamepad2, status: 'Building', featured: true },
  { title: 'Web Experiments', tag: 'REACT / WEB', text: 'Interactive interfaces built to learn modern web development one project at a time.', icon: Globe, status: 'Building', featured: false },
  { title: 'Java & C++ Lab', tag: 'JAVA / C++', text: 'A growing collection of programming exercises, algorithms and experiments.', icon: Braces, status: 'Learning', featured: false },
  { title: 'Mini AI Ideas', tag: 'AI / EXPERIMENTS', text: 'Small experiments that turn questions into prototypes and help me understand how AI works.', icon: Sparkles, status: 'Ideas', featured: false },
  { title: 'Future Builds', tag: 'NEXT / UNKNOWN', text: 'The next project has not been decided yet. That is part of the fun.', icon: Rocket, status: 'Coming soon', featured: false },
];

const skills = [
  ['Python', 'Building & experimenting', '01', 82],
  ['React', 'Modern interfaces', '02', 62],
  ['JavaScript', 'Web interactions', '03', 67],
  ['HTML / CSS', 'Web foundations', '04', 76],
  ['C++', 'Programming fundamentals', '05', 42],
  ['Java', 'Object-oriented thinking', '06', 38],
  ['AI', 'Exploring & learning', '07', 58],
];

const journey = [
  ['01', 'Curiosity', 'Ask questions'],
  ['02', 'Python', 'Learn foundations'],
  ['03', 'Projects', 'Build by doing'],
  ['04', 'AI', 'Explore possibilities'],
  ['05', 'Web', 'Make ideas visible'],
  ['06', 'Next', 'Keep going'],
];

const principles = [
  { icon: BookOpen, title: 'Learn by doing', text: 'I understand ideas better when I turn them into something I can actually run.' },
  { icon: Zap, title: 'Stay curious', text: 'Every bug is a question, and every question can become a new thing to learn.' },
  { icon: Layers3, title: 'Build small', text: 'Small experiments become bigger projects when I keep improving them.' },
];

function SectionLabel({ number, children }) {
  return <div className="section-label">{number} — {children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <div className="noise" />
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="glow glow-c" />

      <nav className="nav wrap">
        <a className="brand" href="#top" onClick={closeMenu}>DAWOOD<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`navlinks ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <a className="nav-github" href="https://github.com/dawoodriy-hub" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
      </nav>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse"/> 9 years old · learning & building</div>
            <h1>Curious about <em>code.</em><br/>Building with AI.</h1>
            <p className="lead">I'm Dawood — a young coder learning Python, exploring artificial intelligence and turning ideas into real projects.</p>
            <div className="actions">
              <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button ghost" href="https://github.com/dawoodriy-hub" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            </div>
            <div className="hero-microstats">
              <span><strong>07</strong> tools explored</span>
              <span><strong>06</strong> project ideas</span>
              <span><strong>∞</strong> things to learn</span>
            </div>
          </div>

          <div className="terminal-wrap">
            <div className="floating-badge badge-one"><CircleDot size={12}/> BUILD MODE</div>
            <div className="floating-badge badge-two"><Sparkles size={12}/> AI CURIOUS</div>
            <div className="terminal-card">
              <div className="terminal-top"><span/><span/><span/><b>~/dawood</b></div>
              <div className="terminal-body">
                <p><i>$</i> whoami</p><h3>dawood</h3>
                <p><i>$</i> cat focus.txt</p>
                <div className="code-lines">
                  <span>AGE</span><b>09</b>
                  <span>LEARNING</span><b>PYTHON</b>
                  <span>EXPLORING</span><b>AI</b>
                  <span>BUILDING</span><b>PROJECTS</b>
                  <span>STATUS</span><b className="green-text">CURIOUS</b>
                </div>
                <p className="terminal-command"><i>$</i> make something<span className="cursor">_</span></p>
              </div>
            </div>
            <div className="terminal-orbit orbit-a"/><div className="terminal-orbit orbit-b"/>
          </div>
        </section>

        <div className="scroll-cue"><ChevronDown size={16}/> scroll to explore</div>

        <section id="about" className="section wrap">
          <SectionLabel number="01">ABOUT</SectionLabel>
          <div className="about-grid">
            <div><h2>Learn it.<br/><span>Build it.</span><br/>Make it real.</h2></div>
            <div className="about-text">
              <p className="large">Coding is a journey of curiosity. I learn by making things, breaking things, fixing them — and trying again.</p>
              <p>I'm building my foundations in Python and web development while exploring what AI can do. Every project is another step forward.</p>
              <div className="mini-stat">
                <strong>01</strong><span>learner<br/><small>always</small></span>
                <strong>∞</strong><span>ideas<br/><small>to build</small></span>
                <strong>100%</strong><span>curiosity<br/><small>required</small></span>
              </div>
            </div>
          </div>
          <div className="principles-grid">
            {principles.map(({ icon: Icon, title, text }) => (
              <article className="principle" key={title}><div className="principle-icon"><Icon size={19}/></div><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section id="projects" className="section wrap projects-section">
          <div className="section-head">
            <div><SectionLabel number="02">PROJECTS</SectionLabel><h2>Things I've <span>built.</span></h2></div>
            <p>Small projects.<br/>Real learning.<br/>More coming.</p>
          </div>
          <div className="project-grid">
            {projects.map(({ title, tag, text, icon: Icon, status, featured }, i) => (
              <article className={`project ${featured ? 'featured' : ''}`} key={title} onClick={() => setActiveProject(title)}>
                <div className="project-top"><div className="project-number">0{i + 1}</div><span className="status"><span/> {status}</span></div>
                <div className="project-icon"><Icon size={22}/></div>
                <div className="project-content"><span className="tag">{tag}</span><h3>{title}</h3><p>{text}</p></div>
                <button className="project-link" onClick={(e) => { e.stopPropagation(); setActiveProject(title); }}>Explore idea <ArrowUpRight size={15}/></button>
              </article>
            ))}
          </div>
          <div className="projects-footer"><Star size={15}/> Every project starts as a question.</div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="wrap">
            <SectionLabel number="03">TOOLBOX</SectionLabel>
            <div className="skills-layout">
              <div className="skills-intro"><h2>Tools for<br/><span>thinking.</span></h2><p>Languages are tools. The real skill is learning how to use them to solve problems.</p><div className="skill-orb"><Cpu size={31}/><span>LEARN<br/>BUILD<br/>REPEAT</span></div></div>
              <div className="skill-list">
                {skills.map(([name, desc, no, level]) => (
                  <div className="skill" key={name}>
                    <span className="skill-no">{no}</span><Code2 size={18}/><div><strong>{name}</strong><small>{desc}</small><div className="skill-bar"><span style={{width: `${level}%`}}/></div></div><b>{level}%</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="journey" className="journey section wrap">
          <SectionLabel number="04">JOURNEY</SectionLabel>
          <h2>Just getting <span>started.</span></h2>
          <p className="journey-intro">There is no finish line in coding. The goal is to keep discovering what I can make next.</p>
          <div className="timeline">
            {journey.map(([no, title, text], i) => <div key={no} className={`step ${i === journey.length - 1 ? 'future' : ''}`}><b>{no}</b><strong>{title}</strong><small>{text}</small><div className="step-dot"/></div>)}
          </div>
        </section>

        <section className="lab section wrap">
          <div className="lab-card">
            <div className="lab-copy"><SectionLabel number="05">CURRENT LAB</SectionLabel><h2>What I'm<br/><span>playing with.</span></h2><p>Python experiments. AI ideas. Web interfaces. Games. And probably a few bugs hiding somewhere.</p></div>
            <div className="lab-grid">
              <div className="lab-item"><Terminal size={18}/><strong>Python</strong><span>scripts + games</span></div>
              <div className="lab-item"><BrainCircuit size={18}/><strong>AI</strong><span>ideas + prompts</span></div>
              <div className="lab-item"><Globe size={18}/><strong>Web</strong><span>React + design</span></div>
              <div className="lab-item"><Code2 size={18}/><strong>Code</strong><span>Java + C++</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact wrap">
          <div className="contact-inner">
            <div className="contact-copy"><SectionLabel number="06">CONTACT</SectionLabel><h2>Let's build<br/><em>something.</em></h2><p>Have an idea, a project, or just want to say hello?</p></div>
            <div className="contact-action"><a className="button primary large-button" href="https://github.com/dawoodriy-hub" target="_blank" rel="noreferrer"><Github size={18}/> Visit my GitHub <ExternalLink size={15}/></a><span>github.com/dawoodriy-hub</span></div>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <span>© {new Date().getFullYear()} DAWOOD.</span>
        <span className="footer-center"><Sparkles size={12}/> Made with curiosity + code.</span>
        <a href="#top">Back to top ↑</a>
      </footer>

      {activeProject && <div className="modal-backdrop" onClick={() => setActiveProject(null)}><div className="project-modal" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)}><X size={18}/></button><div className="modal-icon"><Rocket size={25}/></div><span className="tag">PROJECT NOTE</span><h3>{activeProject}</h3><p>This is part of Dawood's growing portfolio. The project is being explored and developed as a learning experiment.</p><a href="https://github.com/dawoodriy-hub" target="_blank" rel="noreferrer" className="modal-link">Open GitHub <ArrowUpRight size={15}/></a></div></div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
