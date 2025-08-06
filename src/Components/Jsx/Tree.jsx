import React, { useState, useRef, useEffect } from "react";
import "../Styles/Tree.css";
import gsap from "gsap";
import { v4 as uuidv4 } from "uuid";

// TreeNode renders a circle with label and animation
const TreeNode = ({ x, y, value, highlight, inserted, removed, onRemove }) => {
  const ref = useRef();

  // insertion animation
  useEffect(() => {
    if (inserted) {
      gsap.fromTo(
        ref.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, [inserted]);

  // highlight animation
  useEffect(() => {
    if (highlight) {
      const tl = gsap.timeline();
      tl.to(ref.current, { fill: "#f00", duration: 1.7 }).to(ref.current, {
        fill: "#81baffff",
        duration: 1.5,
      });
    }
  }, [highlight]);

  // removal animation
  useEffect(() => {
    if (removed) {
      gsap.to(ref.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        onComplete: onRemove,
      });
    }
  }, [removed, onRemove]);

  return (
    <g>
      <circle
        ref={ref}
        cx={x}
        cy={y}
        r={20}
        fill="#81baffff"
        stroke="#3498db"
        strokeWidth={1}
        style={{ transformOrigin: `${x}px ${y}px` }}
      />
      <text
        x={x}
        y={y + 5}
        textAnchor="middle"
        fontSize="14"
        fill="#fff"
        fontWeight="bold"
        pointerEvents="none"
      >
        {value}
      </text>
    </g>
  );
};

// Utility: Get depth of tree for dynamic height
const getTreeDepth = (node) => {
  if (!node) return 0;
  return 1 + Math.max(getTreeDepth(node.left), getTreeDepth(node.right));
};

const Tree = () => {
  const [input, setInput] = useState("");
  const treeRef = useRef(null);
  const [nodes, setNodes] = useState([]);
  const [highlightId, setHighlightId] = useState(null);
  const [inorderRes, setInorderRes] = useState([]);
  const [preorderRes, setPreorderRes] = useState([]);
  const [postorderRes, setPostorderRes] = useState([]);

  // BST logic
  const createNode = (v) => ({ value: v, left: null, right: null });
  const insertBST = (root, v) => {
    if (!root) return createNode(v);
    if (v < root.value) root.left = insertBST(root.left, v);
    else if (v > root.value) root.right = insertBST(root.right, v);
    return root;
  };
  const findMin = (n) => {
    while (n && n.left) n = n.left;
    return n;
  };
  const deleteBST = (root, v) => {
    if (!root) return null;
    if (v < root.value) root.left = deleteBST(root.left, v);
    else if (v > root.value) root.right = deleteBST(root.right, v);
    else {
      if (!root.left && !root.right) return null;
      if (!root.left) return root.right;
      if (!root.right) return root.left;
      const mn = findMin(root.right);
      root.value = mn.value;
      root.right = deleteBST(root.right, mn.value);
    }
    return root;
  };

  // layout function
  const layout = (
    node,
    depth = 0,
    x0 = 50,
    x1 = 750,
    positions = [],
    parent = null
  ) => {
    if (!node) return positions;
    const x = (x0 + x1) / 2;
    const y = 80 + depth * 80;
    positions.push({
      id: node.value.toString(),
      value: node.value,
      x,
      y,
      parentX: parent?.x,
      parentY: parent?.y,
    });
    layout(node.left, depth + 1, x0, x, positions, { x, y });
    layout(node.right, depth + 1, x, x1, positions, { x, y });
    return positions;
  };

  // rebuild visual nodes
  const rebuild = (prevInsertedVal, removedVal) => {
    const pos = layout(treeRef.current);
    const newState = pos.map((p) => {
      const prev = nodes.find((n) => n.value === p.value);
      return {
        id: prev?.id || uuidv4(),
        value: p.value,
        x: p.x,
        y: p.y,
        parentX: p.parentX,
        parentY: p.parentY,
        inserted: p.value === prevInsertedVal,
        removed: false,
      };
    });
    if (removedVal != null) {
      const removedNode = nodes.find((n) => n.value === removedVal);
      if (removedNode) newState.push({ ...removedNode, removed: true });
    }
    setNodes(newState);
  };

  const handleInsert = () => {
    const v = parseInt(input);
    if (isNaN(v)) return;
    treeRef.current = insertBST(treeRef.current, v);
    rebuild(v, null);
    setInput("");
  };

  const handleDelete = () => {
    const v = parseInt(input);
    if (isNaN(v)) return;
    treeRef.current = deleteBST(treeRef.current, v);
    rebuild(null, v);
    setInput("");
  };

  const handleRemove = (id) => {
    setNodes((ns) => ns.filter((n) => n.id !== id));
    rebuild(null, null);
  };

  // Traversals with highlight
  const handleTraverse = async (order) => {
    if (!treeRef.current) return;
    const sequence = [];
    const dfs = {
      inorder: (n) => {
        if (n) {
          dfs.inorder(n.left);
          sequence.push(n.value);
          dfs.inorder(n.right);
        }
      },
      preorder: (n) => {
        if (n) {
          sequence.push(n.value);
          dfs.preorder(n.left);
          dfs.preorder(n.right);
        }
      },
      postorder: (n) => {
        if (n) {
          dfs.postorder(n.left);
          dfs.postorder(n.right);
          sequence.push(n.value);
        }
      },
    };
    dfs[order](treeRef.current);

    // Clear result
    if (order === "inorder") setInorderRes([]);
    if (order === "preorder") setPreorderRes([]);
    if (order === "postorder") setPostorderRes([]);

    const currentNodes = [...nodes];
    const tempSeq = [];
    for (let val of sequence) {
      const node = currentNodes.find((n) => n.value === val);
      if (node) {
        setHighlightId(node.id);
        tempSeq.push(val);
        if (order === "inorder") setInorderRes([...tempSeq]);
        if (order === "preorder") setPreorderRes([...tempSeq]);
        if (order === "postorder") setPostorderRes([...tempSeq]);
        await new Promise((res) => setTimeout(res, 2000));
      }
    }
    setHighlightId(null);
  };

  // Compute tree height for dynamic SVG height
  const treeDepth = getTreeDepth(treeRef.current);
  const canvasHeight = 100 + treeDepth * 80;

  return (
    <section>
      <div>
        <h6 className="Tree-heading" tabIndex="-1">
          Tree <span> Visualizer</span>
        </h6>
      </div>

      <div className="Tree-input">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a number"
        />
      </div>

      <div className="Tree-button">
        <button onClick={handleInsert} className="Tree-btn">Insert</button>
        <button onClick={handleDelete} className="Tree-btn">Delete</button>
        <button
          onClick={() => {
            treeRef.current = null;
            setNodes([]);
            setHighlightId(null);
            setInorderRes([]);
            setPreorderRes([]);
            setPostorderRes([]);
          }}
          className="Tree-btn"
        >
          Reset
        </button>
        <button onClick={() => handleTraverse("inorder")} className="Tree-btn">
          Inorder
        </button>
        <button onClick={() => handleTraverse("preorder")} className="Tree-btn">
          Preorder
        </button>
        <button onClick={() => handleTraverse("postorder")} className="Tree-btn">
          Postorder
        </button>
      </div>

      {/* Dynamic Height SVG */}
      <svg width="100%" height={canvasHeight} className="Tree-canvas">
        {nodes.map(
          (n) =>
            n.parentX != null && (
              <line
                key={`l-${n.id}`}
                x1={n.parentX}
                y1={n.parentY}
                x2={n.x}
                y2={n.y}
                stroke="#555"
                strokeWidth="2"
              />
            )
        )}
        {nodes.map((n) => (
          <TreeNode
            key={n.id}
            x={n.x}
            y={n.y}
            value={n.value}
            highlight={n.id === highlightId}
            inserted={n.inserted}
            removed={n.removed}
            onRemove={() => handleRemove(n.id)}
          />
        ))}
      </svg>

      {/* Traversal Outputs */}
      <div className="Tree-traverse-results">
        <h2>Traversal Outputs</h2>
        <p><strong>Inorder:</strong> {inorderRes.join(" -> ")}</p>
        <p><strong>Preorder:</strong> {preorderRes.join(" -> ")}</p>
        <p><strong>Postorder:</strong> {postorderRes.join(" -> ")}</p>
      </div>
    </section>
  );
};

export default Tree;
