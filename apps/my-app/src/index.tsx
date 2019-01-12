import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Run react in concurrent mode
ReactDOM.unstable_createRoot(document.getElementById(
  'root'
) as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode><App /></React.StrictMode>,
//   document.getElementById('root') as HTMLElement
// );

registerServiceWorker();
