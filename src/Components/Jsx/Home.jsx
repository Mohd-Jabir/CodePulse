import React from "react";
import "../Styles/Home.css";
import sort from "./assets/sort.png"; // Corrected path, assuming assets is in the same directory as Styles
import schedule from "./assets/schedule.jpg"; // Assuming you have these images
import ds from "./assets/ds.png"; // Assuming you have these images

const Home = () => {

  return (
    <div className="home-page">
      <div id="txtt">
        <h4>Welcome to</h4>
        <h1>CodePulse</h1>
        <h3>
          Feel the Pulse of <span >Every</span> Algorithm
        </h3>
      </div>
      
      <div className="features-grid">
  <div className="feature-card">
    <span className="feature-icon">✨</span>
    <h3>Interactive Visualizations</h3>
    <p>
      Bring algorithms and data structures to life with smooth, real-time animations that make learning intuitive and engaging.
    </p>
  </div>

  <div className="feature-card">
    <span className="feature-icon">⚙️</span>
    <h3>Rich Algorithm Coverage</h3>
    <p>
      Explore Sorting, CPU Scheduling, and core Data Structures like Stacks, Queues, and Linked Lists—all in one powerful app.
    </p>
  </div>

  <div className="feature-card">
    <span className="feature-icon">🧠</span>
    <h3>Deep Learning Insights</h3>
    <p>
      Understand complexity, performance, and behavior of algorithms through clear metrics and step-by-step execution flows.
    </p>
  </div>
  <div className="feature-card">
  <span className="feature-icon">🛠️</span>
  <h3>All-in-One CS Toolkit</h3>
  <p>
    Access Sorting, Scheduling, and Data Structures in a single platform—perfect for students and educators alike.
  </p>
</div>

</div>

    </div>
  );
};

export default Home;
