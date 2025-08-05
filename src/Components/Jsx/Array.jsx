import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Array.css';
import gsap from 'gsap';

const Array = () => {
  const [array, setarray] = useState([]);
  const [value, setvalue] = useState('');
  const ref = useRef([]);
  const PushBack = () => {
    if (value === '') return;
    setarray([...array, parseInt(value)]);
    setvalue('');
  };

  const PopBack = () => {
    if (array.length === 0) return;
    const index = array.length - 1;
    gsap.to(ref.current[index], {
      scale: 0,
      duration: 0.5,
      onComplete: () => {
        setarray(array.slice(0, index));
      },
    });
  };

  const reset = () => {
    setarray([]);
  };
  const search = () => {
    const num = parseInt(value);
    if (isNaN(num)) return;

    let i = 0;

    const searchStep = () => {
      if (i >= array.length) {
        alert('Number not found');
        return;
      }

      const box = ref.current[i];

      gsap.to(box, {
        scale: 1.2,
        backgroundColor: '#f87171',
        duration: 0.9,
        onComplete: () => {
          if (array[i] === num) {
            gsap.to(box, {
              backgroundColor: 'green',
              duration: 1,
              onComplete: () => {
                gsap.to(box, {
                  backgroundColor: '#81baffff',
                  scale: 1,
                  duration: 0.3,
                });
              },
            });
            setTimeout(() => {
              alert('Number found at index ' + i);
            }, 1000);
          } else {
            gsap.to(box, {
              backgroundColor: '#81baffff',
              scale: 1,
              duration: 1.2,
              onComplete: () => {
                i++;
                searchStep();
              },
            });
          }
        },
      });
    };

    searchStep();
    setvalue('');
  };

  useEffect(() => {
    if (array.length === 0) return;
    const lastIndex = array.length - 1;
    gsap.fromTo(
      ref.current[lastIndex],
      { scale: 0 },
      {
        scale: 1,
        backgroundColor: 'red',
        duration: 0.9,
        ease: 'elastic.out(1, 0.3)',
        onComplete: () => {
          ref.current[lastIndex].style.backgroundColor = '#81baffff';
        },
      }
    );
  }, [array]);

  return (
    <section className='array'>
      <h1 className='array-title'>
        Array <span>Visualizer</span>
      </h1>

      <div className='array-input'>
        <input
          type='number'
          placeholder='Enter a number'
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        <button onClick={PushBack} className='array-button'>Push Back</button>
        <button onClick={PopBack} className='array-button'>Pop Back</button>
        <button onClick={search} className='array-button'>Search</button>
        <button onClick={reset} className='array-button'>Reset</button>
      </div>

      <div className='array-display'>
        <div className='array-display-box'>
          {array.map((item, index) => (
            <div key={index} className='array-item-container'>
              <div
                className='array-item'
                ref={(el) => (ref.current[index] = el)}
              >
                {item}
              </div>
              <div className='array-index'>{index}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="array-info-section">
  <h2>About Dynamic <span>Array</span></h2>
  
  <div className="info-block">
    <h3>Definition</h3>
    <p>
      A <strong>dynamic array</strong> is a data structure that allows you to store elements in a resizable array. Unlike static arrays, dynamic arrays can grow or shrink in size during runtime, making them more flexible. It works similarly to <strong>vector</strong> in C++ or <strong>ArrayList</strong> in Java.
    </p>
  </div>

  <div className="info-block">
    <h3>Advantages</h3>
    <ul>
      <li>Resizable during runtime.</li>
      <li>Contiguous memory allows fast random access (like index access).</li>
      <li>Efficient for append operations (push back).</li>
    </ul>
  </div>

  <div className="info-block">
    <h3>Disadvantages</h3>
    <ul>
      <li>Insertion/deletion at specific index is costly (requires shifting elements).</li>
      <li>May waste memory if over-allocated.</li>
      <li>Amortized resizing can cause occasional performance hits.</li>
    </ul>
  </div>

  <div className="info-block">
    <h3>Time Complexity</h3>
    <table className="array-complexity-table">
      <thead>
        <tr>
          <th>Operation</th>
          <th>Time Complexity</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>PushBack</strong></td>
          <td>O(1) <em>(amortized)</em></td>
          <td>Appends element at the end. May trigger resize if full.</td>
        </tr>
        <tr>
          <td><strong>PopBack</strong></td>
          <td>O(1)</td>
          <td>Removes last element.</td>
        </tr>
        <tr>
          <td><strong>Search (Linear)</strong></td>
          <td>O(n)</td>
          <td>Scans all elements to find a match.</td>
        </tr>
        <tr>
          <td><strong>Insert at Index</strong></td>
          <td>O(n)</td>
          <td>Shifts elements to make space at the specified index.</td>
        </tr>
        <tr>
          <td><strong>Delete at Index</strong></td>
          <td>O(n)</td>
          <td>Shifts elements to fill the gap created after deletion.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </section>
  );
};

export default Array;
