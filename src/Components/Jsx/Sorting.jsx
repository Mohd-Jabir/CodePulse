// SortingVisualizerFix.js
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "../Styles/Sorting.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Sorting = () => {
  const [arraySize, setArraySize] = useState(10);
  const [isPausedUI, setIsPausedUI] = useState(false);
  const [manualInput, setManualInput] = useState("");
  const [algo, setAlgo] = useState("Bubble Sort");
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(1000);
  const barsRef = useRef([]);
  const isPaused = useRef(false);
  const shouldReset = useRef(false);
  const [statusText, setStatusText] = useState("");
  const [complexity, setComplexity] = useState({
    best: "-",
    average: "-",
    worst: "-",
    space: "-",
  });

  const handleRandomArray = () => {
    const random = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 100)
    );
    setArray(random);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    shouldReset.current = false;
    isPaused.current = false;
    setIsPausedUI(false);

    let currentArray = manualInput
      ? manualInput.split(",").map((num) => parseInt(num.trim()))
      : array;

    if (!currentArray || currentArray.length === 0) return;

    setArray([...currentArray]);

    let steps = [];
    if (algo === "Bubble Sort") steps = getBubbleSortSteps([...currentArray]);
    else if (algo === "Selection Sort")
      steps = getSelectionSortSteps([...currentArray]);
    else if (algo === "Insertion Sort")
      steps = getInsertionSortSteps([...currentArray]);
    else if (algo === "Merge Sort")
      steps = getMergeSortSteps([...currentArray]);
    else if (algo === "Quick Sort")
      steps = getQuickSortSteps([...currentArray]);

    await animateSteps(steps);
  };

  const handlePause = () => {
    isPaused.current = !isPaused.current;
    setIsPausedUI((prev) => !prev);
  };

  const handleReset = () => {
    shouldReset.current = true;
    setArray([]);
    barsRef.current = [];
    setStatusText("");
  };

  const getBubbleSortSteps = (arr) => {
    const steps = [];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        steps.push({
          i: j,
          j: j + 1,
          type: "compare",
          condition: arr[j] > arr[j + 1],
        });
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          steps.push({ i: j, j: j + 1, type: "swap" });
        }
      }
    }
    return steps;
  };

  const getSelectionSortSteps = (arr) => {
    const steps = [];
    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        steps.push({
          i: minIdx,
          j,
          type: "compare",
          condition: arr[j] < arr[minIdx],
        });
        if (arr[j] < arr[minIdx]) minIdx = j;
      }
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        steps.push({ i, j: minIdx, type: "swap" });
      }
    }
    return steps;
  };

  const getInsertionSortSteps = (arr) => {
    const steps = [];
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0) {
        steps.push({
          i: j - 1,
          j,
          type: "compare",
          condition: arr[j - 1] > arr[j],
        });
        if (arr[j - 1] > arr[j]) {
          [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
          steps.push({ i: j - 1, j, type: "swap" });
        } else break;
        j--;
      }
    }
    return steps;
  };

  const getMergeSortSteps = (arr) => {
    const steps = [];
    const mergeSort = (start, end) => {
      if (start >= end) return;
      const mid = Math.floor((start + end) / 2);
      mergeSort(start, mid);
      mergeSort(mid + 1, end);
      merge(start, mid, end);
    };

    const merge = (start, mid, end) => {
      let temp = [],
        i = start,
        j = mid + 1;
      while (i <= mid && j <= end) {
        steps.push({ i, j, type: "compare", condition: arr[i] <= arr[j] });
        if (arr[i] <= arr[j]) temp.push(arr[i++]);
        else temp.push(arr[j++]);
      }
      while (i <= mid) temp.push(arr[i++]);
      while (j <= end) temp.push(arr[j++]);
      for (let k = start; k <= end; k++) {
        arr[k] = temp[k - start];
        steps.push({ i: k, val: arr[k], type: "overwrite" });
      }
    };

    mergeSort(0, arr.length - 1);
    return steps;
  };

  const getQuickSortSteps = (arr) => {
    const steps = [];
    const quickSort = (low, high) => {
      if (low < high) {
        const pi = partition(low, high);
        quickSort(low, pi - 1);
        quickSort(pi + 1, high);
      }
    };

    const partition = (low, high) => {
      const pivot = arr[high];
      let i = low;
      for (let j = low; j < high; j++) {
        steps.push({
          i: j,
          j: high,
          type: "compare",
          condition: arr[j] < pivot,
        });
        if (arr[j] < pivot) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          steps.push({ i, j, type: "swap" });
          i++;
        }
      }
      [arr[i], arr[high]] = [arr[high], arr[i]];
      steps.push({ i, j: high, type: "swap" });
      return i;
    };

    quickSort(0, arr.length - 1);
    return steps;
  };

  const animateSteps = async (steps) => {
    for (let step of steps) {
      if (shouldReset.current) return;
      while (isPaused.current) await sleep(100);

      const el1 = barsRef.current[step.i];
      const el2 = barsRef.current[step.j];

      if (step.type === "compare") {
        const msg = step.condition
          ? `arr[${step.i}] > arr[${step.j}] → ✅ Swap needed`
          : `arr[${step.i}] ≤ arr[${step.j}] → ❌ No swap`;
        setStatusText(msg);

        if (el1 && el2) {
          el1.classList.add("compare");
          el2.classList.add("compare");
          await sleep(speed);
          el1.classList.remove("compare");
          el2.classList.remove("compare");
        }
      } else if (step.type === "swap") {
        setStatusText(`🔄 Swapping index ${step.i} and ${step.j}`);

        if (el1 && el2) {
          el1.classList.add("swap");
          el2.classList.add("swap");

          // Swap heights
          const h1 = el1.style.height,
            h2 = el2.style.height;
          const t1 = el1.textContent,
            t2 = el2.textContent;

          // Animate height swap
          gsap.to(el1, { height: h2, duration: 0.3 });
          gsap.to(el2, { height: h1, duration: 0.3 });

          // Swap text content after animation delay
          setTimeout(() => {
            el1.textContent = t2;
            el2.textContent = t1;
          }, 300);

          await sleep(speed + 100);
          el1.classList.remove("swap");
          el2.classList.remove("swap");
        }
      } else if (step.type === "overwrite") {
        const el = barsRef.current[step.i];
        if (el) {
          gsap.to(el, {
            height: `${step.val * 3}px`,
            duration: 0.3,
            onUpdate: () => (el.textContent = step.val),
          });
          await sleep(speed);
        }
      }

      await sleep(80);
    }

    setStatusText("✅ Sorting Complete");
    for (let bar of barsRef.current) {
      bar.classList.add("sorted");
      await sleep(40);
    }
  };
  const updateComplexityCard = (best, average, worst, space) => {
    setComplexity({ best, average, worst, space });
  };

  useEffect(() => {
    switch (algo) {
      case "Bubble Sort":
        updateComplexityCard("O(n)", "O(n²)", "O(n²)", "O(1)");
        break;
      case "Selection Sort":
        updateComplexityCard("O(n²)", "O(n²)", "O(n²)", "O(1)");
        break;
      case "Insertion Sort":
        updateComplexityCard("O(n)", "O(n²)", "O(n²)", "O(1)");
        break;
      case "Merge Sort":
        updateComplexityCard("O(n log n)", "O(n log n)", "O(n log n)", "O(n)");
        break;
      case "Quick Sort":
        updateComplexityCard("O(n log n)", "O(n log n)", "O(n²)", "O(log n)");
        break;
      default:
        updateComplexityCard("-", "-", "-", "-");
    }
  }, [algo]);

  return (
    <section className="sort-visualizer-container">
      <header className="main-header">
        <h1>
          Sorting Algorithm <span id="vis">Visualizer</span>
        </h1>
        <p>Choose an algorithm, adjust settings, and watch it sort!</p>
      </header>

      <main className="content-wrapper">
        <div className="controls-panel">
          <form className="controls-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="arraySize">Array Size:</label>
              <input
                id="arraySize"
                type="range"
                min="5"
                max="30"
                value={arraySize}
                onChange={(e) => setArraySize(parseInt(e.target.value))}
              />
              <span>{arraySize}</span>
            </div>

            <div className="form-group">
              <label htmlFor="manualInput">Enter Array:</label>
              <input
                id="manualInput"
                type="text"
                value={manualInput}
                placeholder="e.g. 5, 3, 8, 1"
                onChange={(e) => setManualInput(e.target.value)}
              />
              <button
                type="button"
                id="generate"
                className="button-secondary"
                onClick={handleRandomArray}
              >
                Generate Random
              </button>
            </div>

            <div className="form-group">
              <label htmlFor="algoSelect">Algorithm:</label>
              <select
                id="algoSelect"
                value={algo}
                onChange={(e) => setAlgo(e.target.value)}
              >
                <option value="Bubble Sort">Bubble Sort</option>
                <option value="Selection Sort">Selection Sort</option>
                <option value="Insertion Sort">Insertion Sort</option>
                <option value="Merge Sort">Merge Sort</option>
                <option value="Quick Sort">Quick Sort</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="speedRange">Speed:</label>
              <input
                id="speedRange"
                type="range"
                min="1000"
                max="4000"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
              />
              <span>{speed} ms</span>
            </div>

            <div className="button-group">
              <button type="submit" className="button-primary">
                Start
              </button>
              <button
                type="button"
                className="button-secondary"
                onClick={handlePause}
              >
                {isPausedUI ? "Resume" : "Pause"}
              </button>
              <button
                type="button"
                className="button-secondary"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>

          <div className="complexity-card">
            <h3>
              Complexity <span id="ana">Analysis</span>{" "}
            </h3>
            <p>
              <strong>Algorithm:</strong> {algo}
            </p>
            <ul>
              <li>
                <strong>Best Time:</strong> {complexity.best}
              </li>
              <li>
                <strong>Average Time:</strong> {complexity.average}
              </li>
              <li>
                <strong>Worst Time:</strong> {complexity.worst}
              </li>
              <li>
                <strong>Space:</strong> {complexity.space}
              </li>
            </ul>
          </div>
        </div>

        <div className="visualization-area">
          <div className="status-display">
            <p className="status-text">{statusText}</p>
          </div>
          <div className="bars-container">
            {array.length > 0 ? (
              array.map((value, idx) => (
                <div key={idx} className="bar-wrapper">
                  <div
                    className="bar"
                    ref={(el) => (barsRef.current[idx] = el)}
                    style={{ height: `${value * 3}px` }}
                  >
                    <span>{value}</span>
                  </div>
                  <div className="bar-index">[{idx}]</div>
                </div>
              ))
            ) : (
              <p className="placeholder-text">Generate an array to begin.</p>
            )}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Sorting;
