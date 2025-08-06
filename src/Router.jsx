import React, { lazy } from 'react';
import App from '../src/App.jsx';
import { createHashRouter } from 'react-router-dom';

const Home = lazy(() => import('../src/Components/Jsx/Home'));  
const Visualizer = lazy(() => import('../src/Components/Jsx/Visualizer'));
const About = lazy(() => import('../src/Components/Jsx/About.jsx'));
const Sorting = lazy(() => import('../src/Components/Jsx/Sorting'));
const Scheduling = lazy(() => import('../src/Components/Jsx/Scheduling'));
const DS = lazy(() => import('../src/Components/Jsx/DS'));
const Tree = lazy(() => import('../src/Components/Jsx/Tree.jsx'));
const Stack = lazy(() => import('../src/Components/Jsx/Stack.jsx'));
const Queue = lazy(() => import('../src/Components/Jsx/Queue.jsx'));
const Array = lazy(() => import('../src/Components/Jsx/Array.jsx'));
const LinkedList = lazy(() => import('../src/Components/Jsx/LinkedList.jsx'));
const Router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'Visualizer', element: <Visualizer /> },
      { path: 'Visualizer/sorting', element: <Sorting /> },
      { path: 'Visualizer/scheduling', element: <Scheduling /> },
      { path: 'Visualizer/ds', element: <DS /> },
      { path: 'Visualizer/ds/Tree', element : <Tree/> },
      { path: 'Visualizer/ds/Stack', element : <Stack/>},
      { path: 'Visualizer/ds/Queue', element : <Queue/>},
      { path: 'Visualizer/ds/Array', element : <Array/>},
      { path: 'Visualizer/ds/LinkedList', element : <LinkedList/>},
      { path: 'About', element: <About /> },
    ],
  },
]);

export default Router;
