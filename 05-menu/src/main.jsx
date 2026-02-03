import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AppAlternative from './AppAlternative';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppAlternative />
  </React.StrictMode>,
);
