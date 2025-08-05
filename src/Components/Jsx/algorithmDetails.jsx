import React, { useState, useEffect } from "react";
import '../Styles/algorithmDetails.css';

const AlgorithmDetails = ({ algo }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    switch (algo) {
      case "FCFS":
        setDescription(
          "### 🚀 First-Come, First-Served (FCFS)\n\n**Definition:\nFCFS executes processes in the exact order they arrive, like a queue at a ticket counter. It is a **non-preemptive** algorithm.\n\n**How it Runs:\n- All processes are sorted by arrival time.\n- The CPU executes the first-arrived process until it finishes, then moves to the next one. No interruption occurs during execution.\n\n**Advantages:\n- Simple and easy to implement.\n- No starvation — every process gets executed.\n\n**Disadvantages:\n- Poor average waiting time.\n- Long jobs can delay short ones (convoy effect).\n- Not suitable for time-critical applications.\n\n**Use Cases:\n- Batch systems.\n- Scenarios where all jobs have roughly equal burst time."
        );
        break;
      case "SJF":
        setDescription(
          "### ⚡ Shortest Job First (SJF)\n\n**Definition:\nThe process with the smallest CPU burst time is executed next. It is a **non-preemptive** algorithm.\n\n**How it Runs:\n- Among available processes, pick the one with the lowest burst time.\n- Run it until completion.\n- Repeat the selection for the next available shortest job.\n\n**Advantages:\n- Minimizes average waiting time.\n- Efficient in systems where burst times are predictable.\n\n**Disadvantages:\n- Can cause starvation of long processes.\n- Requires accurate knowledge of burst times.\n\n**Use Cases:\n- Batch processing systems with known workloads."
        );
        break;
      case "SRTF":
        setDescription(
          "### ⚡ Shortest Remaining Time First (SRTF)\n\n**Definition:\nA **preemptive** version of SJF that interrupts the current process if a new one arrives with a shorter remaining time.\n\n**How it Runs:\n- Continuously compare remaining times of all available processes.\n- If a new process arrives with a shorter burst than the current, preempt and run the new one.\n- Repeat until all processes are completed.\n\n**Advantages:\n- Optimized for shortest turnaround and waiting time.\n- More responsive to new short jobs.\n\n**Disadvantages:\n- High CPU overhead due to frequent preemptions.\n- Starvation for long jobs.\n\n**Use Cases:\n- Interactive systems where responsiveness matters.\n- Real-time systems with short job deadlines."
        );
        break;
      case "Priority":
        setDescription(
          "### 👑 Priority Scheduling\n\n**Definition:\nEach process is assigned a priority. The CPU executes the process with the highest priority first.\n\n**How it Runs:\n- Among all available processes, pick the one with the highest priority (lowest number).\n- If preemptive, a new higher-priority process interrupts the current one.\n- Continue until all processes are done.\n\n**Advantages:\n- Critical tasks get executed earlier.\n- Can be made preemptive for responsiveness.\n\n**Disadvantages:\n- Starvation of low-priority tasks.\n- Priority assignment must be handled properly.\n\n**Use Cases:\n- Real-time systems like aircraft control, where critical processes must run first."
        );
        break;
      case "Round Robin":
        setDescription(
          "### ⏰ Round Robin (RR)\n\n**Definition:\nEach process gets a fixed time slice (quantum) and is cycled through in a circular queue. It is a **preemptive** algorithm.\n\n**How it Runs:\n- The first process in the ready queue is given a time quantum.\n- If it finishes within the quantum, it's removed.\n- If not, it’s paused and added back to the end of the queue.\n- Repeat this cycle until all processes are complete.\n\n**Advantages:\n- Fairness: every process gets CPU time.\n- Good for interactive and time-sharing systems.\n\n**Disadvantages:\n- Not efficient for short tasks if quantum is large.\n- High context-switch overhead if quantum is too small.\n\n**Use Cases:\n- Time-sharing systems, general-purpose OS."
        );
        break;
      default:
        setDescription("");
    }
  }, [algo]);

  // A simple function to render markdown-like text
  const renderDescription = (text) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("###")) return <h3 key={i}>{line.substring(4)}</h3>;
      if (line.startsWith("**"))
        return (
          <p key={i}>
            <strong>{line.substring(2)}</strong>
          </p>
        );
      if (line.startsWith("-")) return <li key={i}>{line.substring(2)}</li>;
      return <p key={i}>{line}</p>;
    });
  };

  return (
    <div className="algo-description">
      <h2>About this <span className="alo">Algorithm</span></h2>
      {renderDescription(description)}
    </div>
  );
};

export default AlgorithmDetails;
