import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './alternative/App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <App2 />
  </>,
);
