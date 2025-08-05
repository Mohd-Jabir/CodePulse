import React, { useEffect, useRef, useState } from 'react'
import '../Styles/LinkedList.css'
import gsap from 'gsap'
class node{
  constructor(value){
    this.value= value;
    this.next =null;
    this.id = node.generateId(); 
  }
   static generateId() {
    return Math.random().toString(16).slice(2); // e.g., 'ab32f1'
  }
}
class linkedlist{
  constructor(){
    this.head=null;
  }
  insertAtEnd(value){
    if(!this.head){
      this.head = new node(value);
      return;
    }
    let current =this.head;
    while(current.next){
      current=current.next;
    }
    current.next = new node(value);
  }
  insertAtBeginning(value){
    const newNode = new node(value);
    newNode.next = this.head;
    this.head=newNode;
  }
  insertAtPosition(value,position){
    const newNode = new node(value);
    if(position === 0){
      this.insertAtBeginning(value);
      return;
    }
    let current = this.head;
    let count= 0;
    let previous = null;
    while(current && count <position){
      previous =current;
      current = current.next;
      count++;
    }
    if(count === position){
      previous.next = newNode;
      newNode.next = current;
    }
    else {
      console.error("Invalid position");
    }
  }
  deleteAtBeginning(){
    if(!this.head) return ;
    this.head = this.head.next;
  }
  deleteAtEnd(){
    if(!this.head) return;
    if(!this.head.next) {
      this.head = null;
      return ;
    }
    let current = this.head;
    while(current.next.next){
      current = current.next;
    }
    current.next = null;
  }
  deleteAtPosition(position){
    if(!this.head) return;
    if(position ===0){
      this.deleteAtBeginning();
      return;
    }
    let current =this.head;
    let count =0;
    let previous = null;
    while(current && count < position){
      previous = current;
      current = current.next;
      count++;
    }
    if(count === position && current ){
      previous.next = current.next;

    }
    else{
      console.error("Invalid position");
    }
  }
  toArray(){
    const arr = [];
    let current = this.head;
    while(current){
      arr.push({
        address: current.id,
        value: current.value,
        next: current.next ? current.next.id : null
      })
      current = current.next;
    }
    return arr;
  }

}
const LinkedList = () => {
  const list = useRef(new linkedlist());
  const [traversedValues, setTraversedValues] = useState([]);
  const [ , forceRender] = useState(0);
  const nodeRefs = useRef([]);
  const [value, setvalue] = useState('');
  const [position, setposition] = useState('');
  const triggerupdate=()=>{
    forceRender((prev)=>prev+1);
  }
  const animateNode = ()=>{
    nodeRefs.current.forEach((ref,index)=>{
      if(ref){
        gsap.fromTo(ref,{ opacity:0 , y: -20 },{ opacity:1, y:0, duration:0.5, delay:index *0.2});
      }
    })
  }
  useEffect(() => {
    animateNode();
  }, [list.current.toArray().length]);
  const handleinsertbeginning=()=>{
    if(value.trim() === '') return;
    list.current.insertAtBeginning(value);
    setvalue('');
    triggerupdate();
  }
  const handleinsertend=()=>{
    if(value.trim()=== '') return;
    list.current.insertAtEnd(value);
    setvalue('');
    triggerupdate();
  }
  const handleinsertatposition=()=>{
    if(value.trim() === '' || position.trim() === '') return;
    list.current.insertAtPosition(value, parseInt(position));
    setvalue('');
    setposition('');
    triggerupdate();
  }
  const handledeletebeginning=()=>{
    list.current.deleteAtBeginning();
    triggerupdate();
    setvalue('');
    setposition('');

  }
  const handledeleteend=()=>{
    list.current.deleteAtEnd();
    triggerupdate();
    setvalue('');
    setposition('');
  }
  const handledeleteatposition=()=>{
    if(position.trim() === '') return;
    list.current.deleteAtPosition(parseInt(position));
    setposition('');
    triggerupdate();
  }
  const handletraverse= async ()=>{
     for (let i = 0; i < nodeRefs.current.length; i++) {
      await gsap.to(nodeRefs.current[i], {
        backgroundColor: '#e60000ff',
        duration: 0.6,
      });
      await gsap.to(nodeRefs.current[i], {
        backgroundColor: '#83c5ff',
        duration: 0.6,
      });
    }
  }
const handlereset=()=>{
   list.current = new linkedlist(); // reset the whole list
  nodeRefs.current = []; // clear animation refs
  setvalue('');
  setposition('');
  forceRender((prev) => prev + 1);
}

  return (
    <section>
      <h1 className='linked-list'>Linked List <span>Visualizer</span></h1>
      <div className='linked-list-main'>

      <div className='linked-list-input'>
        <input type='number' placeholder='Enter a number' value={value} onChange={(e)=>setvalue(e.target.value)}/>
        <input type='number' placeholder='Enter a Position' value={position} onChange={(e)=>setposition(e.target.value)}/>


      </div>
      <div className='linked-list-buttons'>
      <button onClick={handleinsertbeginning}>Insert at Beginning</button>
      <button onClick={handleinsertend}>Insert at End</button>
      <button onClick={handleinsertatposition}>Insert at Position</button>
      <button onClick={handledeletebeginning}>Delete at Beginning</button>
      <button onClick={handledeleteend}>Delete at End</button>
      <button onClick={handledeleteatposition}>Delete at Position</button>
      <button onClick={handlereset}>reset</button>
      <button onClick={handletraverse}>Traverse</button>
      </div>
      <div className='linked-list-container'>
        <div className='linked-list-display'>
        {list.current.toArray().map((node,index)=>(
          <div className="linked-list-node" key={node.address} ref={(el) => (nodeRefs.current[index] = el)}>
            <div className="value">{node.value}</div>
            <div className="address">{node.address}</div>
            {node.next && <div className="arrow">→</div>}
          </div>
        ))}
        </div>

      </div>
      <div className="linkedlist-details">
  <h2>About <span id="sp">Linked List</span></h2>

  <div className="linkedlist-section">
    <h3>Definition:</h3>
    <p>
      A <strong>linked list</strong> is a linear data structure where elements are stored in nodes, and each node points to the next using a reference (pointer). It does <strong>not require contiguous memory</strong> allocation.
    </p>
  </div>

  <div className="linkedlist-section">
    <h3>Basic Operations:</h3>
    <ul>
      <li><strong>insertAtBeginning(x)</strong> – Inserts <code>x</code> at the beginning</li>
      <li><strong>insertAtEnd(x)</strong> – Appends <code>x</code> at the end</li>
      <li><strong>insertAtPosition(x, pos)</strong> – Inserts <code>x</code> at a given position</li>
      <li><strong>deleteAtBeginning()</strong> – Removes the first node</li>
      <li><strong>deleteAtEnd()</strong> – Removes the last node</li>
      <li><strong>deleteAtPosition(pos)</strong> – Deletes node at a given position</li>
      <li><strong>traverse()</strong> – Traverses the list from head to end</li>
    </ul>
  </div>

  <div className="linkedlist-section">
    <h3>Time Complexities:</h3>
    <ul>
      <li><strong>Insertion at Beginning:</strong> O(1)</li>
      <li><strong>Insertion at End:</strong> O(n)</li>
      <li><strong>Insertion at Position:</strong> O(n)</li>
      <li><strong>Deletion at Beginning:</strong> O(1)</li>
      <li><strong>Deletion at End:</strong> O(n)</li>
      <li><strong>Traversal:</strong> O(n)</li>
      <li><strong>Search:</strong> O(n)</li>
    </ul>
  </div>

  <div className="linkedlist-section">
    <h3>Advantages:</h3>
    <ul>
      <li>Dynamic size – grows and shrinks as needed</li>
      <li>Efficient insertion/deletion at beginning</li>
      <li>No memory wastage due to non-contiguous allocation</li>
    </ul>
  </div>

  <div className="linkedlist-section">
    <h3>Disadvantages:</h3>
    <ul>
      <li>Random access not allowed (O(n) traversal)</li>
      <li>Extra memory per node (for pointer)</li>
      <li>More complex than arrays for implementation</li>
    </ul>
  </div>

  <div className="linkedlist-section">
    <h3>Memory Usage:</h3>
    <p><strong>Space Complexity:</strong> O(n)</p>
  </div>
</div>

      </div>

    </section>
  )
}

export default LinkedList
