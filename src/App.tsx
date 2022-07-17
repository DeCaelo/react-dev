import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Ludovic Cleuet</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ marginBottom: 100 }}>
        Front-End React / Typescript Developer
      </h1>
      <a
        href="https://www.linkedin.com/in/ludovic-cleuet/"
        target="_blank"
        className="neonText linkedin__link"
      >
        @ Linkedin Profil
      </a>
    </div>
  );
}

export default App;
