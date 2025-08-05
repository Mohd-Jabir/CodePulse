import React from "react";
import "../Styles/Visualizer.css";
import sort from "./assets/sort.png";
import schedule from "./assets/schedule.jpg";
import ds2 from "./assets/ds2.png";
import { Link } from "react-router-dom";

const Visualizer = () => {
  return (
    <div className="vis-main">
      <div className="sorting-block">
        <img src={sort} alt="sorting" />
        <h3>Sorting Visualizer</h3>
        <h5>Turn algorithms into motion — visualize how sorting really works</h5>
        <Link to="sorting">
          <button>Start Exploring</button>
        </Link>
      </div>

      <div className="os-block">
        <img src={schedule} alt="scheduling" />
        <h3>Scheduling Simulator</h3>
        <h5>Visualize process execution like never before — from queue to CPU.</h5>
        <Link to="scheduling">
          <button>Start Exploring</button>
        </Link>
      </div>

      <div className="ds-block">
        <img src={ds2} alt="data structures" />
        <h3>Data Structure Visualizer</h3>
        <h5>Understand complex structures visually — learn by interaction</h5>
        <Link to="ds">
          <button>Start Exploring</button>
        </Link>
      </div>
    </div>
  );
};

export default Visualizer;
