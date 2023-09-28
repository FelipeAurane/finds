// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/favicon-32x32.png';
import { FaHome, FaSearch, FaEnvelope, FaCog } from 'react-icons/fa'; // Importe os ícones
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Menu de Navegação Horizontal na Parte Inferior */}
      <nav className="bottom-navigation">
        <ul>
          <li>
            <a href="/">
              <FaHome />
            </a>
          </li>
          <li>
            <a href="/search">
              <FaSearch />
            </a>
          </li>
          <li>
            <a href="/messages">
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a href="/settings">
              <FaCog />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
