import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './styles.css';
import '../src/styles/less/master.less';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
