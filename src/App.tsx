import reactLogo from './assets/react.svg';
import { Toggle } from './components/Toggle';
import { useState } from 'react';
import { ToggleAction, ToggleState } from './hooks/useToggle';
import { useTheme } from './hooks/useTheme';

function App() {
  const [bothOn, setBothOn] = useState(false);
  const [timesClicked, setTimesClicked] = useState(0);
  const [theme, handleChange] = useTheme('dark');

  function handleToggleChange(state: ToggleState, action: ToggleAction) {
    if (action.type === 'toggle' && timesClicked > 4) {
      return;
    }
    setBothOn(state.on);
    setTimesClicked((c) => c + 1);
    handleChange(theme);
  }

  function handleResetClick() {
    setBothOn(false);
    setTimesClicked(0);
    handleChange(theme === 'dark');
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div>
          <Toggle on={bothOn} onChange={handleToggleChange} />
        </div>
        {timesClicked > 4 ? (
          <div data-testid="notice">Houlala calme toi!!!</div>
        ) : (
          <div data-testid="click-count">
            {timesClicked === 1 || timesClicked === 3 ? '🌞' : '🌚'}
          </div>
        )}
        {timesClicked > 4 ? (
          <button onClick={handleResetClick}>Reset</button>
        ) : null}
      </div>
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
          FullStack React / TypeScript / Node / Ruby On Rails Developer
        </h1>
        <div className="skills">
          <pre>
            <code>
              <span className="let">let</span> skills{' '}
              <span className="let">=</span> <span className="crochet">[</span>{' '}
              '<span className="body-skills">react</span>
              ', '<span className="body-skills">functional programming</span>
              ', '<span className="body-skills">ux/ui</span>'{' '}
              <span className="crochet">]</span>;
            </code>
          </pre>
        </div>
        <div style={{ marginTop: 100 }}>
          <a
            href="https://www.linkedin.com/in/ludovic-cleuet/"
            target="_blank"
            className="neonText linkedin__link"
          >
            @ Linkedin Profile
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
