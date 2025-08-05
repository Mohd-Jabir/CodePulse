import React, { useState, useRef } from "react";
import gsap from "gsap";
import "../Styles/Queue.css";

const QueueVisualizer = () => {
  const [queue, setQueue] = useState([]);
  const inputRef = useRef();
  const boxRefs = useRef([]);
  const [currentTraverse, setCurrentTraverse] = useState(null);
  const [traverseResult, setTraverseResult] = useState([]);

  const enqueue = () => {
    const value = inputRef.current.value.trim();
    if (value === "") return;

    setQueue((prevQueue) => {
      const updatedQueue = [...prevQueue, value];

      // Let React render new box, then animate it
      setTimeout(() => {
        const lastIndex = updatedQueue.length - 1;
        const newBox = boxRefs.current[lastIndex];
        if (newBox) {
          const tl = gsap.timeline();

          tl.fromTo(
            newBox,
            { scale: 0, opacity: 0, backgroundColor: "#ff0000ff" },
            { scale: 1.2, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
          ).to(
            newBox,
            { scale: 1, backgroundColor: "#81baffff", duration: 0.3 },
            "+=0.1"
          );
        }
      }, 0);

      return updatedQueue;
    });

    inputRef.current.value = "";
  };

  const dequeue = () => {
    if (queue.length === 0) return;

    const firstBox = boxRefs.current[0];

    // Freeze the first box and animate it, before updating the queue
    if (firstBox) {
      gsap.to(firstBox, {
        x: -100,
        backgroundColor: "#ff0000ff",
        opacity: 0,
        duration: 0.4,
        onComplete: () => {
          setQueue((prevQueue) => prevQueue.slice(1));
        },
      });
    }
  };

  const reset = () => {
    setQueue([]);
  };
  const traverse = () => {
    if (queue.length === 0) return;

    setTraverseResult([]); // Clear old traverse result
    setCurrentTraverse(null); // Clear previous current value

    const timeline = gsap.timeline();

    queue.forEach((item, index) => {
      const box = boxRefs.current[index];
      if (!box) return;
      timeline.to(box, {
        backgroundColor: "red",
        scale: 1.2,
        duration: 0.4,
        onStart: () => {
          setCurrentTraverse(item); // show current item
          setTraverseResult((prev) => [...prev, item]); // show traversed list
        },
      });

      timeline.to(box, {
        backgroundColor: "#81baffff",
        scale: 1,
        duration: 0.3,
      });
    });

    // After all done
    timeline.call(() => {
      setCurrentTraverse(null);
    });
  };

  return (
    <div className="queue-container">
      <h1 className="queue-title ">Queue <span>Visualizer</span></h1>
      <div className="controls">
        <input type="number" ref={inputRef} placeholder="Enter value" />
        <button onClick={enqueue}>Enqueue</button>
        <button onClick={dequeue}>Dequeue</button>
        <button onClick={reset}>Reset</button>
        <button onClick={traverse}>Traverse</button>
      </div>

      <div className="queue-boxes">
        {queue.map((item, index) => (
          <div
            key={index + "-" + item + "-" + Math.random()} // make keys unique!
            className="queue-box"
            ref={(el) => (boxRefs.current[index] = el)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="queue-traverse-output">
        <h3>Traversed Elements:</h3>
        <div className="traverse-items">
          {traverseResult.map((item, i) => (
            <span key={i} className="traverse-box">
              {item}
            </span>
          ))}
        </div>
      </div>
<div className="queue-details">
 <h2>About <span id="sp">Queue</span></h2>
<div className="queue-section">
  <h3>Definition:</h3>
  <p>
    A <strong>queue</strong> is a linear data structure that follows the <strong>FIFO</strong> (First In First Out) principle.
    The first element inserted is the first one to be removed.
  </p>
</div>

<div className="queue-section">
  <h3>Basic Operations:</h3>
  <ul>
    <li><strong>enqueue(x)</strong> – Adds element <code>x</code> at the rear (end)</li>
    <li><strong>dequeue()</strong> – Removes the front element</li>
    <li><strong>peek()</strong> – Returns front element without removing</li>
    <li><strong>isEmpty()</strong> – Checks if the queue is empty</li>
    <li><strong>traverse()</strong> – Reads all elements from front to rear</li>
  </ul>
</div>

<div className="queue-section">
  <h3>Time Complexities:</h3>
  <ul>
    <li><strong>Enqueue:</strong> O(1)</li>
    <li><strong>Dequeue:</strong> O(1)</li>
    <li><strong>Peek:</strong> O(1)</li>
    <li><strong>Traverse:</strong> O(n)</li>
    <li><strong>Search:</strong> O(n)</li>
  </ul>
</div>

<div className="queue-section">
  <h3>Advantages:</h3>
  <ul>
    <li>Simple and easy to use</li>
    <li>Useful in scheduling processes</li>
    <li>Models real-world scenarios like printer queues and call centers</li>
    <li>Efficient in BFS traversal and resource sharing</li>
  </ul>
</div>

<div className="queue-section">
  <h3>Disadvantages:</h3>
  <ul>
    <li>Elements can only be accessed in order</li>
    <li>Fixed size in static arrays (unless dynamically handled)</li>
    <li>Inefficient memory use in naive array implementations</li>
  </ul>
</div>

<div className="queue-section">
  <h3>Memory Usage:</h3>
  <p><strong>Space Complexity:</strong> O(n)</p>
</div>
</div>
    </div>
  );
};

export default QueueVisualizer;
