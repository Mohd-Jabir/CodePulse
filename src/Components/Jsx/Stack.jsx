import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Stack.css';
import gsap from 'gsap';

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [value, setValue] = useState('');
  const [traverseResult, setTraverseResult] = useState([]);
  const ref = useRef([]);

  const push = () => {
    if (value === '') return;
    setStack([...stack, parseInt(value)]);
    setValue('');
  };

  const pop = () => {
    if (stack.length === 0) return;
    const index = stack.length - 1;

    gsap.to(ref.current[index], {
      y: -50,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setStack((prev) => prev.slice(0, index));
        ref.current[index] = null;
      },
    });
  };

  const reset = () => {
    setStack([]);
    ref.current = [];
    setTraverseResult([]);
  };
const traverse = () => {
  if (stack.length === 0) return;
  setTraverseResult([]); // Clear previous traverse list

  for (let i = stack.length - 1; i >= 0; i--) {
    const box = ref.current[i];
    const delay = (stack.length - 1 - i) * 1.2; // sequential delay

    gsap.to(box, {
      backgroundColor: '#f87171',
      scale: 1.2,
      duration: 0.4,
      delay,
      yoyo: true,
      repeat: 1,
      onStart: () => {
        // Push to result *when this box animation starts*, synced with GSAP delay
        setTraverseResult((prev) => [...prev, stack[i]]);
      },
      onComplete: () => {
        gsap.to(box, {
          backgroundColor: '#81baffff',
          scale: 1,
          duration: 0.3,
        });
      }
    });
  }
};

  useEffect(() => {
    if (stack.length === 0) return;
    const index = stack.length - 1;

    gsap.fromTo(
      ref.current[index],
      { y: -50, scale: 0 },
      {
        y: 0,
        scale: 1,
        backgroundColor: 'red',
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)',
        onComplete: () => {
          ref.current[index].style.backgroundColor = '#81baffff';
        },
      }
    );
  }, [stack]);

  return (
    <section className='stack'>
      <h1 className='stack-title'>Stack <span>Visualizer</span></h1>

      <div className='stack-input'>
        <input
          type='number'
          placeholder='Enter a number'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className='stack-btn' onClick={push}>Push</button>
        <button className='stack-btn' onClick={pop}>Pop</button>
        <button className='stack-btn' onClick={reset}>Reset</button>
        <button className='stack-btn' onClick={traverse}>Traverse</button>
      </div>

      <div className='stack-visual-container'>
        <div className='stack-display'>
          {stack.map((item, index) => (
            <div key={index} className='stack-item-container'>
              <div className='stack-item' ref={(el) => (ref.current[index] = el)}>
                {item}
              </div>
              {index === stack.length - 1 && (
                <div className='stack-top-label'>Top</div>
              )}
            </div>
          ))}
        </div>

        <div className='stack-traverse-output'>
          <h3>Traversed Elements:</h3>
          <div className='traverse-items'>
            {traverseResult.map((item, i) => (
              <span key={i} className='traverse-box'>{item}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="stack-info-container">
  <h2>About <span id="sp">Stack</span> </h2>

  <div className="stack-section">
    <h3>Definition:</h3>
    <p>
      A <strong>stack</strong> is a linear data structure that follows the <strong>LIFO</strong> (Last In First Out) principle.
      The last element inserted is the first one to be removed.
    </p>
  </div>

  <div className="stack-section">
    <h3>Basic Operations:</h3>
    <ul>
      <li><strong>push(x)</strong> – Adds element <code>x</code> to the top</li>
      <li><strong>pop()</strong> – Removes the top element</li>
      <li><strong>peek()</strong> – Returns top element without removing</li>
      <li><strong>isEmpty()</strong> – Checks if the stack is empty</li>
      <li><strong>traverse()</strong> – Reads all elements from top to bottom</li>
    </ul>
  </div>

  <div className="stack-section">
    <h3>Time Complexities:</h3>
    <ul>
      <li><strong>Push:</strong> O(1)</li>
      <li><strong>Pop:</strong> O(1)</li>
      <li><strong>Peek:</strong> O(1)</li>
      <li><strong>Traverse:</strong> O(n)</li>
      <li><strong>Search:</strong> O(n)</li>
    </ul>
  </div>

  <div className="stack-section">
    <h3>Advantages:</h3>
    <ul>
      <li>Simple and easy to implement</li>
      <li>Efficient for managing function calls</li>
      <li>Helps in Undo/Redo operations</li>
      <li>Used in expression parsing and evaluation</li>
    </ul>
  </div>

  <div className="stack-section">
    <h3>Disadvantages:</h3>
    <ul>
      <li>Only the top element is accessible</li>
      <li>Stack overflow if memory is exceeded</li>
      <li>Linear search is inefficient (O(n))</li>
    </ul>
  </div>

  <div className="stack-section">
    <h3>Memory Usage:</h3>
    <p><strong>Space Complexity:</strong> O(n)</p>
  </div>
</div>

    </section>
  );
};

export default Stack;
