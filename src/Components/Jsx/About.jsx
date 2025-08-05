import React from "react";
import "../Styles/About.css";
const About = () => {
  return (
    <div className="about-container">
      <h2>
        About <span id='sp'>CodePulse</span>
      </h2>
      <p>
        CodePulse is an interactive visualizer built to help students and
        developers understand the inner workings of core Computer Science
        algorithms and data structures. With vibrant animations and real-time
        step-by-step breakdowns, CodePulse brings abstract logic to life.
      </p>
      <div className="vision">
        <h3>Purpose & Vision</h3>
        <p>
          As a Computer Science student, I noticed how difficult it can be to
          grasp the logic behind algorithms and data structures just through
          textbook diagrams. CodePulse was created to bridge that gap — a
          visual-first, interactive tool that turns static concepts into
          animated experiences.
        </p>
        <p>
          My vision is to make CS education more accessible, intuitive, and
          enjoyable.
        </p>
      </div>
      <div className="features">
        <h3>What You Can Do with CodePulse</h3>
        <ul>
          <li>
            ⚡ Visualize how different <strong>sorting algorithms</strong> work
            step by step
          </li>
          <li>
            🧠 Understand <strong>CPU scheduling</strong> with real-time Gantt
            charts
          </li>
          <li>
            📦 Interact with <strong>data structures</strong> like arrays,
            stacks, queues, and trees
          </li>
          <li>
            🎨 Experience smooth animations by <strong>GSAP</strong>
          </li>
        </ul>
      </div>
      <div className="creator">
        <h3>
          Hi, I'm <span id='sp'>Mohd Jabir </span>👋
        </h3>
        <p>
          I’m a Computer Science & Engineering student at United Institute of
          Technology. I'm passionate about building educational tools, Learning
          MERN-stack development, and turning complex problems into visual
          solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
