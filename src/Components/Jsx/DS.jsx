import React from 'react'
import '../Styles/DS.css'
import { Link } from 'react-router-dom'
import queue from './assets/queue.png';
import stack from './assets/stack.png';
import array from './assets/array.png';
import linkedList from './assets/linkedList.png';
import tree from './assets/tree.png';
const DS = () => {
  return (
    <div className='data-structures-main'>
      <div className='Array'>
      <img src={array} alt='array' />
        <h3>Array Visualizer</h3>
        <h5>Explore data arranged in perfect order — from first index to last</h5>
        <Link to='Array'>
          <button>Start Exploring</button>
        </Link>
      </div>
       <div className='Stack'>
       <img src={stack} alt='stack' />
        <h3>Stack Visualizer</h3>
        <h5>One way in, one way out — visualize the LIFO principle in action.</h5>
        <Link to='Stack'>
          <button>Start Exploring</button>
        </Link>
      </div>
       <div className='Queue'>
       <img src={queue} alt='queue' />
        <h3>Queue Visualizer</h3>
        <h5>The line that never lies — First In, First Out like never before.</h5>
        <Link to='Queue'>
          <button>Start Exploring</button>
        </Link>
      </div>
       <div className='LinkedList'>
        <img src={linkedList} alt='linked list' />
        <h3>LinkedList Visualizer</h3>
        <h5>Dynamic data structure, dynamic animation — understand pointer magic.</h5>
        <Link to='LinkedList'>
          <button>Start Exploring</button>
        </Link>
      </div>
       <div className='Tree'>
        <img src={tree} alt='tree' />
        <h3>Tree Visualizer</h3>
        <h5>From root to leaf — see hierarchical data unfold visually.</h5>
        <Link to='Tree'>
          <button>Start Exploring</button>
        </Link>
      </div>
    </div>
  )
}

export default DS
