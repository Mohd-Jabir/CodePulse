import{r as f,j as e}from"./index-i_XjV6bq.js";import{g as X}from"./index-CH_iu5NA.js";const Y=({algo:j})=>{const[N,T]=f.useState("");f.useEffect(()=>{switch(j){case"FCFS":T(`### 🚀 First-Come, First-Served (FCFS)

**Definition:
FCFS executes processes in the exact order they arrive, like a queue at a ticket counter. It is a **non-preemptive** algorithm.

**How it Runs:
- All processes are sorted by arrival time.
- The CPU executes the first-arrived process until it finishes, then moves to the next one. No interruption occurs during execution.

**Advantages:
- Simple and easy to implement.
- No starvation — every process gets executed.

**Disadvantages:
- Poor average waiting time.
- Long jobs can delay short ones (convoy effect).
- Not suitable for time-critical applications.

**Use Cases:
- Batch systems.
- Scenarios where all jobs have roughly equal burst time.`);break;case"SJF":T(`### ⚡ Shortest Job First (SJF)

**Definition:
The process with the smallest CPU burst time is executed next. It is a **non-preemptive** algorithm.

**How it Runs:
- Among available processes, pick the one with the lowest burst time.
- Run it until completion.
- Repeat the selection for the next available shortest job.

**Advantages:
- Minimizes average waiting time.
- Efficient in systems where burst times are predictable.

**Disadvantages:
- Can cause starvation of long processes.
- Requires accurate knowledge of burst times.

**Use Cases:
- Batch processing systems with known workloads.`);break;case"SRTF":T(`### ⚡ Shortest Remaining Time First (SRTF)

**Definition:
A **preemptive** version of SJF that interrupts the current process if a new one arrives with a shorter remaining time.

**How it Runs:
- Continuously compare remaining times of all available processes.
- If a new process arrives with a shorter burst than the current, preempt and run the new one.
- Repeat until all processes are completed.

**Advantages:
- Optimized for shortest turnaround and waiting time.
- More responsive to new short jobs.

**Disadvantages:
- High CPU overhead due to frequent preemptions.
- Starvation for long jobs.

**Use Cases:
- Interactive systems where responsiveness matters.
- Real-time systems with short job deadlines.`);break;case"Priority":T(`### 👑 Priority Scheduling

**Definition:
Each process is assigned a priority. The CPU executes the process with the highest priority first.

**How it Runs:
- Among all available processes, pick the one with the highest priority (lowest number).
- If preemptive, a new higher-priority process interrupts the current one.
- Continue until all processes are done.

**Advantages:
- Critical tasks get executed earlier.
- Can be made preemptive for responsiveness.

**Disadvantages:
- Starvation of low-priority tasks.
- Priority assignment must be handled properly.

**Use Cases:
- Real-time systems like aircraft control, where critical processes must run first.`);break;case"Round Robin":T(`### ⏰ Round Robin (RR)

**Definition:
Each process gets a fixed time slice (quantum) and is cycled through in a circular queue. It is a **preemptive** algorithm.

**How it Runs:
- The first process in the ready queue is given a time quantum.
- If it finishes within the quantum, it's removed.
- If not, it’s paused and added back to the end of the queue.
- Repeat this cycle until all processes are complete.

**Advantages:
- Fairness: every process gets CPU time.
- Good for interactive and time-sharing systems.

**Disadvantages:
- Not efficient for short tasks if quantum is large.
- High context-switch overhead if quantum is too small.

**Use Cases:
- Time-sharing systems, general-purpose OS.`);break;default:T("")}},[j]);const k=I=>I.split(`
`).map((y,S)=>y.startsWith("###")?e.jsx("h3",{children:y.substring(4)},S):y.startsWith("**")?e.jsx("p",{children:e.jsx("strong",{children:y.substring(2)})},S):y.startsWith("-")?e.jsx("li",{children:y.substring(2)},S):e.jsx("p",{children:y},S));return e.jsxs("div",{className:"algo-description",children:[e.jsxs("h2",{children:["About this ",e.jsx("span",{className:"alo",children:"Algorithm"})]}),k(N)]})},te=()=>{const[j,N]=f.useState("FCFS"),[T,k]=f.useState(""),[I,y]=f.useState(""),[S,U]=f.useState(""),[E,G]=f.useState(""),[q,J]=f.useState(""),[B,C]=f.useState(0),[z,A]=f.useState(0),[M,R]=f.useState([]),[D,P]=f.useState([]);f.useEffect(()=>{D.forEach((t,l)=>{X.from(`#box-${l}`,{opacity:0,x:-50,delay:l*2,duration:.4})})},[D]);const O=t=>{const l=[...t].sort((s,a)=>s.arrival-a.arrival),i=[],c=[];let o=0,p=0,h=0;l.forEach(s=>{s.arrival>o&&(c.push({label:"Idle",start:o,end:s.arrival}),o=s.arrival);const a=o,u=a+s.burst,g=a-s.arrival,m=u-s.arrival;p+=g,h+=m,i.push({...s,startTime:a,endTime:u,waiting:g,turnaround:m}),c.push({label:s.name,start:a,end:u}),o=u}),R(i),P(c),C((p/t.length).toFixed(2)),A((h/t.length).toFixed(2))},Q=t=>{const l=[...t].sort((a,u)=>a.arrival-u.arrival),i=[],c=[];let o=0,p=0,h=0;const s=new Set;for(;s.size<t.length;){const a=l.filter(d=>d.arrival<=o&&!s.has(d.name));if(a.length===0){c.push({label:"Idle",start:o,end:o+1}),o++;continue}a.sort((d,x)=>d.priority-x.priority);const u=a[0],g=o,m=g+u.burst,v=g-u.arrival,r=m-u.arrival;p+=v,h+=r,i.push({...u,startTime:g,endTime:m,waiting:v,turnaround:r}),c.push({label:u.name,start:g,end:m}),o=m,s.add(u.name)}R(i),P(c),C((p/t.length).toFixed(2)),A((h/t.length).toFixed(2))},V=(t,l)=>{const i=t.length,c=t.map(n=>n.burst),o=t.map(n=>n.arrival),p=t.map(n=>n.name),h=Array(i).fill(-1),s=Array(i).fill(0),a=Array(i).fill(0),u=Array(i).fill(0),g=Array(i).fill(!1),m=[],v=Array(i).fill(!1);let r=0,d=0;const x=[];for(let n=0;n<i;n++)o[n]===0&&(m.push(n),v[n]=!0);for(;d<i;){if(m.length===0){x.push({label:"Idle",start:r,end:r+1}),r++;for(let b=0;b<i;b++)!v[b]&&o[b]<=r&&(m.push(b),v[b]=!0);continue}const n=m.shift();h[n]===-1&&(h[n]=r);const W=Math.min(l,c[n]);x.push({label:p[n],start:r,end:r+W}),r+=W,c[n]-=W;for(let b=0;b<i;b++)!v[b]&&o[b]<=r&&(m.push(b),v[b]=!0);c[n]>0?m.push(n):(g[n]=!0,d++,s[n]=r,u[n]=s[n]-o[n],a[n]=u[n]-t[n].burst)}const w=[];let F=0,H=0;for(let n=0;n<i;n++)F+=a[n],H+=u[n],w.push({name:p[n],burst:t[n].burst,arrival:o[n],startTime:h[n],endTime:s[n],waiting:a[n],turnaround:u[n]});R(w),P(x),C((F/i).toFixed(2)),A((H/i).toFixed(2))},$=t=>{const l=[...t],i=[],c=[];let o=0,p=0,h=0;for(;l.length>0;){const s=l.filter(r=>r.arrival<=o);if(s.length===0){c.push({label:"Idle",start:o,end:o+1}),o++;continue}s.sort((r,d)=>r.burst-d.burst);const a=s[0],u=Math.max(o,a.arrival),g=u+a.burst,m=u-a.arrival,v=g-a.arrival;p+=m,h+=v,i.push({...a,startTime:u,endTime:g,waiting:m,turnaround:v}),c.push({label:a.name,start:u,end:g}),o=g,l.splice(l.indexOf(a),1)}R(i),P(c),C((p/t.length).toFixed(2)),A((h/t.length).toFixed(2))},L=t=>{const l=t.length,i=[...t].map((r,d)=>({...r,remaining:r.burst,index:d}));let c=0,o=0;const p=[],h=[];let s=0,a=0;const u=Array(l).fill(!1),g=Array(l).fill(-1),m=Array(l).fill(0);let v=null;for(;o<l;){const r=i.filter((w,F)=>w.arrival<=c&&w.remaining>0&&!u[F]).sort((w,F)=>w.remaining-F.remaining||w.arrival-F.arrival);if(r.length===0){v!=="Idle"?(p.push({label:"Idle",start:c,end:c+1}),v="Idle"):p[p.length-1].end++,c++;continue}const d=r[0],x=d.index;g[x]===-1&&(g[x]=c),v!==d.name?(p.push({label:d.name,start:c,end:c+1}),v=d.name):p[p.length-1].end++,d.remaining--,c++,d.remaining===0&&(o++,m[x]=c,u[x]=!0)}for(let r=0;r<l;r++){const d=m[r]-i[r].arrival,x=d-i[r].burst;a+=d,s+=x,h.push({name:i[r].name,arrival:i[r].arrival,burst:i[r].burst,startTime:g[r],endTime:m[r],turnaround:d,waiting:x})}R(h),P(p),C((s/l).toFixed(2)),A((a/l).toFixed(2))},_=()=>{const t=T.split(",").map(s=>s.trim()),l=E.split(",").map(s=>parseInt(s.trim())),i=S.split(",").map(s=>parseInt(s.trim())),c=I.split(",").map(s=>parseInt(s.trim())),o=parseInt(q);if(!(t.length>0&&t.length===l.length&&(j==="Priority"?t.length===c.length:!0)&&(j!=="Priority"?t.length===i.length:!0))){alert("Please ensure all input lists are valid and have the same number of elements.");return}const h=t.map((s,a)=>({name:s,burst:l[a],arrival:j==="Priority"?0:i[a],priority:j==="Priority"?c[a]:void 0}));switch(R(h),j){case"FCFS":O(h);break;case"Priority":Q(h);break;case"Round Robin":q?V(h,o):alert("Please enter the Time Quantum for Round Robin.");break;case"SJF":$(h);break;case"SRTF":L(h);break}},K=()=>{k(""),y(""),U(""),G(""),J(""),C(0),A(0),R([]),P([])};return e.jsxs("div",{className:"scheduling-container",children:[e.jsxs("header",{className:"main-header",children:[e.jsxs("h1",{children:["CPU Scheduling ",e.jsx("span",{id:"vis",children:"Simulator"})]}),e.jsxs("p",{children:["Choose an algorithm, customize process inputs, and watch the CPU scheduling simulation in ",e.jsx("span",{id:"vis",children:"action"})]})]}),e.jsxs("div",{className:"main-section",children:[e.jsxs("div",{className:"inputs-section",children:[e.jsxs("select",{value:j,onChange:t=>N(t.target.value),children:[e.jsx("option",{value:"FCFS",children:"FCFS"}),e.jsx("option",{value:"Priority",children:"Priority"}),e.jsx("option",{value:"Round Robin",children:"Round Robin"}),e.jsx("option",{value:"SJF",children:"SJF"}),e.jsx("option",{value:"SRTF",children:"SRTF"})]}),e.jsx("input",{type:"text",placeholder:"Process Name (e.g., P1, P2...)",value:T,onChange:t=>k(t.target.value)}),e.jsx("input",{type:"text",placeholder:"Arrival Time (e.g., 0, 1...)",value:S,onChange:t=>U(t.target.value)}),e.jsx("input",{type:"text",placeholder:"Burst Time (e.g., 5, 3...)",value:E,onChange:t=>G(t.target.value)}),j==="Priority"&&e.jsx("input",{type:"text",placeholder:"Priority (e.g., 1, 2...)",value:I,onChange:t=>y(t.target.value)}),j==="Round Robin"&&e.jsx("input",{type:"number",placeholder:"Time Quantum",value:q,onChange:t=>J(parseInt(t.target.value))}),e.jsxs("div",{className:"button-group",children:[e.jsx("button",{onClick:_,children:"Run Simulation"}),e.jsx("button",{onClick:K,children:"Reset"})]})]}),e.jsxs("div",{className:"metrics-table-section",children:[e.jsx("h3",{children:"Process Table"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Process"}),e.jsx("th",{children:"Arrival"}),e.jsx("th",{children:"Burst"}),e.jsx("th",{children:"Start"}),e.jsx("th",{children:"End"}),e.jsx("th",{children:"Waiting"}),e.jsx("th",{children:"Turnaround"})]})}),e.jsx("tbody",{children:M.map((t,l)=>e.jsxs("tr",{children:[e.jsx("td",{children:t.name}),e.jsx("td",{children:t.arrival}),e.jsx("td",{children:t.burst}),e.jsx("td",{children:t.startTime}),e.jsx("td",{children:t.endTime}),e.jsx("td",{children:t.waiting}),e.jsx("td",{children:t.turnaround})]},l))})]}),e.jsxs("div",{className:"averages",children:[e.jsxs("p",{children:["Average Waiting Time: ",B]}),e.jsxs("p",{children:["Average Turnaround Time: ",z]})]})]})]}),e.jsxs("div",{className:"gantt-chart-section",children:[e.jsx("h3",{children:"Gantt Chart"}),e.jsx("div",{className:"gantt-chart",children:D.map((t,l)=>e.jsxs("div",{className:`gantt-box ${t.label==="Idle"?"idle":""}`,id:`box-${l}`,children:[e.jsx("span",{children:t.label}),e.jsxs("span",{children:[t.start," - ",t.end]})]},l))})]}),e.jsx("div",{className:"details-section",children:e.jsx(Y,{algo:j})})]})};export{te as default};
