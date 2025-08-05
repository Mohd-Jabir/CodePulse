import React, { useState, useEffect } from "react";
import "../Styles/Scheduling.css";
import gsap from "gsap";
import AlgorithmDetails from "./algorithmDetails.jsx"; // Assuming this is the correct path
const Scheduling = () => {
  const [algo, setAlgo] = useState("FCFS");
  const [processNames, setProcessNames] = useState("");
  const [priority, setPriority] = useState("");
  const [arrivalTimes, setArrivalTimes] = useState("");
  const [burstTimes, setBurstTimes] = useState("");
  const [quantum, setQuantum] = useState("");
  const [avgWaitingTime, setAvgWaitingTime] = useState(0);
  const [avgTurnaroundTime, setAvgTurnaroundTime] = useState(0);
  const [result, setResult] = useState([]);
  const [ganttData, setGanttData] = useState([]);

  // useEffect to run GSAP animations on ganttData changes
  useEffect(() => {
    ganttData.forEach((_, i) => {
      gsap.from(`#box-${i}`, {
        opacity: 0,
        x: -50,
        delay: i * 2,
        duration: 0.4,
      });
    });
  }, [ganttData]); // Corrected dependency array

  const runFCFS = (finallist) => {
  const sorted = [...finallist].sort((a, b) => a.arrival - b.arrival);
  const Result = [];
  const Gantt = [];
  let currentTime = 0;
  let totalWaiting = 0;
  let totalTurnaround = 0;

  sorted.forEach((proc) => {
    if (proc.arrival > currentTime) {
      // CPU is idle
      Gantt.push({
        label: "Idle",
        start: currentTime,
        end: proc.arrival,
      });
      currentTime = proc.arrival;
    }

    const startTime = currentTime;
    const endTime = startTime + proc.burst;
    const waitingTime = startTime - proc.arrival;
    const turnaroundTime = endTime - proc.arrival;

    totalWaiting += waitingTime;
    totalTurnaround += turnaroundTime;

    Result.push({
      ...proc,
      startTime,
      endTime,
      waiting: waitingTime,
      turnaround: turnaroundTime,
    });

    Gantt.push({
      label: proc.name,
      start: startTime,
      end: endTime,
    });

    currentTime = endTime;
  });

  setResult(Result);
  setGanttData(Gantt);
  setAvgWaitingTime((totalWaiting / finallist.length).toFixed(2));
  setAvgTurnaroundTime((totalTurnaround / finallist.length).toFixed(2));
};

  const runPriority = (finallist) => {
    const sorted = [...finallist].sort((a, b) => a.arrival - b.arrival);
    const Result = [];
    const Gantt = [];
    let currentTime = 0;
    let totalWaiting = 0;
    let totalTurnaround = 0;
    const completed = new Set();

    while (completed.size < finallist.length) {
      const available = sorted.filter(
        (proc) => proc.arrival <= currentTime && !completed.has(proc.name)
      );

      if (available.length === 0) {
        Gantt.push({ label: "Idle", start: currentTime, end: currentTime + 1 });
        currentTime++;
        continue;
      }

      available.sort((a, b) => a.priority - b.priority);
      const proc = available[0];
      const startTime = currentTime;
      const endTime = startTime + proc.burst;
      const waitingTime = startTime - proc.arrival;
      const turnaroundTime = endTime - proc.arrival;

      totalWaiting += waitingTime;
      totalTurnaround += turnaroundTime;

      Result.push({
        ...proc,
        startTime,
        endTime,
        waiting: waitingTime,
        turnaround: turnaroundTime,
      });

      Gantt.push({ label: proc.name, start: startTime, end: endTime });
      currentTime = endTime;
      completed.add(proc.name);
    }

    setResult(Result);
    setGanttData(Gantt);
    setAvgWaitingTime((totalWaiting / finallist.length).toFixed(2));
    setAvgTurnaroundTime((totalTurnaround / finallist.length).toFixed(2));
  };

  const runRoundRobin = (finallist, quantum) => {
    const n = finallist.length;
    const remaining = finallist.map((p) => p.burst);
    const arrival = finallist.map((p) => p.arrival);
    const name = finallist.map((p) => p.name);
    const startTime = Array(n).fill(-1);
    const finishTime = Array(n).fill(0);
    const waiting = Array(n).fill(0);
    const turnaround = Array(n).fill(0);
    const completed = Array(n).fill(false);
    const queue = [];
    const visited = Array(n).fill(false);
    let time = 0;
    let completedCount = 0;
    const Gantt = [];

    for (let i = 0; i < n; i++) {
      if (arrival[i] === 0) {
        queue.push(i);
        visited[i] = true;
      }
    }

    while (completedCount < n) {
      if (queue.length === 0) {
        Gantt.push({ label: "Idle", start: time, end: time + 1 });
        time++;
        for (let i = 0; i < n; i++) {
          if (!visited[i] && arrival[i] <= time) {
            queue.push(i);
            visited[i] = true;
          }
        }
        continue;
      }

      const i = queue.shift();
      if (startTime[i] === -1) startTime[i] = time;

      const execTime = Math.min(quantum, remaining[i]);
      Gantt.push({ label: name[i], start: time, end: time + execTime });
      time += execTime;
      remaining[i] -= execTime;

      for (let j = 0; j < n; j++) {
        if (!visited[j] && arrival[j] <= time) {
          queue.push(j);
          visited[j] = true;
        }
      }

      if (remaining[i] > 0) {
        queue.push(i);
      } else {
        completed[i] = true;
        completedCount++;
        finishTime[i] = time;
        turnaround[i] = finishTime[i] - arrival[i];
        waiting[i] = turnaround[i] - finallist[i].burst;
      }
    }

    const Result = [];
    let totalWaiting = 0;
    let totalTurnaround = 0;

    for (let i = 0; i < n; i++) {
      totalWaiting += waiting[i];
      totalTurnaround += turnaround[i];
      Result.push({
        name: name[i],
        burst: finallist[i].burst,
        arrival: arrival[i],
        startTime: startTime[i],
        endTime: finishTime[i],
        waiting: waiting[i],
        turnaround: turnaround[i],
      });
    }

    setResult(Result);
    setGanttData(Gantt);
    setAvgWaitingTime((totalWaiting / n).toFixed(2));
    setAvgTurnaroundTime((totalTurnaround / n).toFixed(2));
  };

  const runSJF = (finallist) => {
    const processlist = [...finallist];
    const Result = [];
    const Gantt = [];
    let currentTime = 0;
    let totalWaiting = 0;
    let totalTurnaround = 0;

    while (processlist.length > 0) {
      const available = processlist.filter((p) => p.arrival <= currentTime);
      if (available.length === 0) {
        Gantt.push({ label: "Idle", start: currentTime, end: currentTime + 1 });
        currentTime++;
        continue;
      }
      available.sort((a, b) => a.burst - b.burst);
      const proc = available[0];
      const startTime = Math.max(currentTime, proc.arrival);
      const endTime = startTime + proc.burst;
      const waitingTime = startTime - proc.arrival;
      const turnaroundTime = endTime - proc.arrival;

      totalWaiting += waitingTime;
      totalTurnaround += turnaroundTime;

      Result.push({
        ...proc,
        startTime,
        endTime,
        waiting: waitingTime,
        turnaround: turnaroundTime,
      });
      Gantt.push({ label: proc.name, start: startTime, end: endTime });
      currentTime = endTime;
      processlist.splice(processlist.indexOf(proc), 1);
    }

    setResult(Result);
    setGanttData(Gantt);
    setAvgWaitingTime((totalWaiting / finallist.length).toFixed(2));
    setAvgTurnaroundTime((totalTurnaround / finallist.length).toFixed(2));
  };

  const runSRTF = (finallist) => {
    const n = finallist.length;
    const processes = [...finallist].map((p, idx) => ({
      ...p,
      remaining: p.burst,
      index: idx,
    }));
    let time = 0;
    let completed = 0;
    const Gantt = [];
    const Result = [];
    let totalWaiting = 0;
    let totalTurnaround = 0;
    const isCompleted = Array(n).fill(false);
    const startTime = Array(n).fill(-1);
    const endTime = Array(n).fill(0);
    let lastProcess = null;

    while (completed < n) {
      const available = processes
        .filter(
          (p, i) => p.arrival <= time && p.remaining > 0 && !isCompleted[i]
        )
        .sort((a, b) => a.remaining - b.remaining || a.arrival - b.arrival);

      if (available.length === 0) {
        if (lastProcess !== "Idle") {
          Gantt.push({ label: "Idle", start: time, end: time + 1 });
          lastProcess = "Idle";
        } else {
          Gantt[Gantt.length - 1].end++;
        }
        time++;
        continue;
      }

      const current = available[0];
      const idx = current.index;

      if (startTime[idx] === -1) {
        startTime[idx] = time;
      }

      if (lastProcess !== current.name) {
        Gantt.push({ label: current.name, start: time, end: time + 1 });
        lastProcess = current.name;
      } else {
        Gantt[Gantt.length - 1].end++;
      }

      current.remaining--;
      time++;

      if (current.remaining === 0) {
        completed++;
        endTime[idx] = time;
        isCompleted[idx] = true;
      }
    }

    for (let i = 0; i < n; i++) {
      const turnaround = endTime[i] - processes[i].arrival;
      const waiting = turnaround - processes[i].burst;
      totalTurnaround += turnaround;
      totalWaiting += waiting;
      Result.push({
        name: processes[i].name,
        arrival: processes[i].arrival,
        burst: processes[i].burst,
        startTime: startTime[i],
        endTime: endTime[i],
        turnaround,
        waiting,
      });
    }

    setResult(Result);
    setGanttData(Gantt);
    setAvgWaitingTime((totalWaiting / n).toFixed(2));
    setAvgTurnaroundTime((totalTurnaround / n).toFixed(2));
  };

  const handleRunSimulation = () => {
    const namesArray = processNames.split(",").map((name) => name.trim());
    const burstArray = burstTimes.split(",").map((b) => parseInt(b.trim()));
    const arrivalArray = arrivalTimes.split(",").map((a) => parseInt(a.trim()));
    const priorityArray = priority.split(",").map((p) => parseInt(p.trim()));
    const quantumValue = parseInt(quantum);

    const isAllValid =
      namesArray.length > 0 &&
      namesArray.length === burstArray.length &&
      (algo === "Priority"
        ? namesArray.length === priorityArray.length
        : true) &&
      (algo !== "Priority" ? namesArray.length === arrivalArray.length : true);

    if (!isAllValid) {
      alert(
        "Please ensure all input lists are valid and have the same number of elements."
      );
      return;
    }

    const finallist = namesArray.map((name, i) => ({
      name,
      burst: burstArray[i],
      arrival: algo === "Priority" ? 0 : arrivalArray[i],
      priority: algo === "Priority" ? priorityArray[i] : undefined,
    }));

    setResult(finallist);

    switch (algo) {
      case "FCFS":
        runFCFS(finallist);
        break;
      case "Priority":
        runPriority(finallist);
        break;
      case "Round Robin":
        if (quantum) runRoundRobin(finallist, quantumValue);
        else alert("Please enter the Time Quantum for Round Robin.");
        break;
      case "SJF":
        runSJF(finallist);
        break;
      case "SRTF":
        runSRTF(finallist);
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setProcessNames("");
    setPriority("");
    setArrivalTimes("");
    setBurstTimes("");
    setQuantum("");
    setAvgWaitingTime(0);
    setAvgTurnaroundTime(0);
    setResult([]);
    setGanttData([]);
  };

  return (
    <div className="scheduling-container">
      {/* Navbar */}
      <header className="main-header">
        <h1>
          CPU Scheduling <span id="vis">Simulator</span>
        </h1>
        <p>
          Choose an algorithm, customize process inputs, and watch the CPU
          scheduling simulation in <span id="vis">action</span>
        </p>
      </header>

      {/* Inputs and Metrics Table side by side */}
      <div className="main-section">
        <div className="inputs-section">
          <select value={algo} onChange={(e) => setAlgo(e.target.value)}>
            <option value="FCFS">FCFS</option>
            <option value="Priority">Priority</option>
            <option value="Round Robin">Round Robin</option>
            <option value="SJF">SJF</option>
            <option value="SRTF">SRTF</option>
          </select>

          <input
            type="text"
            placeholder="Process Name (e.g., P1, P2...)"
            value={processNames}
            onChange={(e) => setProcessNames(e.target.value)}
          />
          <input
            type="text"
            placeholder="Arrival Time (e.g., 0, 1...)"
            value={arrivalTimes}
            onChange={(e) => setArrivalTimes(e.target.value)}
          />
          <input
            type="text"
            placeholder="Burst Time (e.g., 5, 3...)"
            value={burstTimes}
            onChange={(e) => setBurstTimes(e.target.value)}
          />
          {algo === "Priority" && (
            <input
              type="text"
              placeholder="Priority (e.g., 1, 2...)"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            />
          )}
          {algo === "Round Robin" && (
            <input
              type="number"
              placeholder="Time Quantum"
              value={quantum}
              onChange={(e) => setQuantum(parseInt(e.target.value))}
            />
          )}
          <div className="button-group">
            <button onClick={handleRunSimulation}>Run Simulation</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>

        <div className="metrics-table-section">
          <h3>Process Table</h3>
          <table>
            <thead>
              <tr>
                <th>Process</th>
                <th>Arrival</th>
                <th>Burst</th>
                <th>Start</th>
                <th>End</th>
                <th>Waiting</th>
                <th>Turnaround</th>
              </tr>
            </thead>
            <tbody>
              {result.map((p, i) => (
                <tr key={i}>
                  <td>{p.name}</td>
                  <td>{p.arrival}</td>
                  <td>{p.burst}</td>
                  <td>{p.startTime}</td>
                  <td>{p.endTime}</td>
                  <td>{p.waiting}</td>
                  <td>{p.turnaround}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="averages">
            <p>Average Waiting Time: {avgWaitingTime}</p>
            <p>Average Turnaround Time: {avgTurnaroundTime}</p>
          </div>
        </div>
      </div>

      {/* Gantt Chart */}
      <div className="gantt-chart-section">
        <h3>Gantt Chart</h3>
        <div className="gantt-chart">
          {ganttData.map((g, i) => (
            <div
              key={i}
              className={`gantt-box ${g.label === "Idle" ? "idle" : ""}`}
              id={`box-${i}`}
            >
              <span>{g.label}</span>
              <span>
                {g.start} - {g.end}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="details-section">
        <AlgorithmDetails algo={algo} />
      </div>
    </div>
  );
};

export default Scheduling;
