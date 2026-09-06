import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Code2, Cpu, Github, Sparkles, Terminal, Braces, Globe, ChevronDown } from 'lucide-react';
import './styles.css';

const projects = [
  { title: 'Dawood AI', tag: 'AI / Python', text: 'An evolving playground for exploring AI ideas, prompts and practical experiments.', icon: Sparkles },
  { title: 'Simple Python Games', tag: 'Python', text: 'Small games built while learning programming fundamentals, logic and problem solving.', icon: Terminal },
  { title: 'Web Experiments', tag: 'React / HTML / CSS', text: 'Interactive interfaces built to learn modern web development one project at a time.', icon: Globe },
  { title: 'Java & C++ Lab', tag: 'Java / C++', text: 'A growing collection of programming exercises, algorithms and experiments.', icon: Braces },
];

const skills = [
  ['Python', 'Building & experimenting'], ['React', 'Modern interfaces'], ['JavaScript', 'Web interactions'],
  ['HTML / CSS', 'Web foundations'], ['C++', 'Programming fundamentals'], ['Java', 'Object-oriented thinking'],
];

function App() {
  return <div className="site">
    <div className="glow glow-a" /><div className="glow glow-b" />
    <nav className="nav wrap">
      <a className="brand" href="#top">DAWOOD<span>.</span></a>
      <div className="navlinks"><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div>
      <a className="nav-github" href="https://github.com/dawoodriy-hub" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
    </nav>

    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> 9 years old · learning & building</div>
          <h1>Curious about <em>code.</em><br/>Building with AI.</h1>
          <p className="lead">I'm Dawood — a young coder learning Python, exploring artificial intelligence and turning ideas into real projects.</p>
          <div className="actions"><a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button ghost" href="https://github.com/dawoodriy-hub" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a></div>
        </div>
        <div className="terminal-card">
          <div className="terminal-top"><span/><span/><span/><b>~/dawood</b></div>
          <div className="terminal-body"><p><i>$</i> whoami</p><h3>dawood</h3><p><i>$</i> cat focus.txt</p><div className="code-lines"><span>AGE</span><b>09</b><span>LEARNING</span><b>PYTHON</b><span>EXPLORING</span><b>AI</b><span>BUILDING</span><b>🚀</b></div><p className="cursor"><i>$</i> <span>_</span></p></div>
        </div>
      </section>

      <div className="scroll-cue"><ChevronDown size={16}/> scroll to explore</div>

      <section id="about" className="section wrap">
        <div className="section-label">01 — ABOUT</div>
        <div className="about-grid"><div><h2>Learn it.<br/><span>Build it.</span><br/>Make it real.</h2></div><div className="about-text"><p className="large">Coding is a journey of curiosity. I learn by making things, breaking things, fixing them — and trying again.</p><p>I'm building my foundations in Python and web development while exploring what AI can do. Every project is another step forward.</p><div className="mini-stat"><strong>01</strong><span>learner<br/><small>always</small></span><strong>∞</strong><span>ideas<br/><small>to build</small></span></div></div></div>
      </section>

      <section id="projects" className="section wrap">
        <div className="section-head"><div><div className="section-label">02 — PROJECTS</div><h2>Things I've <span>built.</span></h2></div><p>Small projects.<br/>Real learning.</p></div>
        <div className="project-grid">{projects.map(({title,tag,text,icon:Icon},i)=><article className="project" key={title}><div className="project-number">0{i+1}</div><div className="project-icon"><Icon size={22}/></div><div className="project-content"><span className="tag">{tag}</span><h3>{title}</h3><p>{text}</p><a href="https://github.com/dawoodriy-hub" target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={15}/></a></div></article>)}</div>
      </section>

      <section id="skills" className="section skills-section"><div className="wrap"><div className="section-label">03 — TOOLBOX</div><div className="skills-layout"><div><h2>Tools for<br/><span>thinking.</span></h2><p>Languages are tools. The real skill is learning how to use them to solve problems.</p></div><div className="skill-list">{skills.map(([name,desc],i)=><div className="skill" key={name}><span className="skill-no">0{i+1}</span><Code2 size={18}/><div><strong>{name}</strong><small>{desc}</small></div><ArrowUpRight size={16}/></div>)}</div></div></div></section>

      <section className="journey section wrap"><div className="section-label">04 — JOURNEY</div><h2>Just getting <span>started.</span></h2><div className="timeline">{[['01','Start','Curiosity'],['02','Python','Foundations'],['03','Build','Projects'],['04','AI','Explore'],['05','Next','Who knows?']].map(x=><div key={x[0]} className="step"><b>{x[0]}</b><strong>{x[1]}</strong><small>{x[2]}</small></div>)}</div></section>

      <section id="contact" className="contact wrap"><div className="contact-inner"><div className="section-label">05 — CONTACT</div><h2>Let's build<br/><em>something.</em></h2><p>Have an idea, a project, or just want to say hello?</p><a className="button primary" href="https://github.com/dawoodriy-hub" target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight size={17}/></a></div></section>
    </main>
    <footer className="footer wrap"><span>© {new Date().getFullYear()} DAWOOD.</span><span>Made with curiosity + code.</span><a href="#top">Back to top ↑</a></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
