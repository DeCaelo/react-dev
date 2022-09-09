import reactLogo from './assets/react.svg';
import { Toggle } from './components/Toggle';
import { useState } from 'react';
import { ToggleAction, ToggleState } from './hooks/useToggle';
import { useTheme } from './hooks/useTheme';
import Head from './components/Head';
import Starfield from './components/starfield';
import { motion, useReducedMotion } from 'framer-motion';
import Linkedin from './icons/Linkedin';
import Github from './icons/Github';

function App() {
  const [bothOn, setBothOn] = useState(false);
  const [timesClicked, setTimesClicked] = useState(0);
  const [theme, handleChange] = useTheme('dark');
  const [starfieldSpeed, setStarfieldSpeed] = useState(0.5);
  const shouldReduceMotion = useReducedMotion();

  console.log({ theme });
  const isDark = theme === 'dark';

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

  const title = 'Développeur React / Typescript';
  const image = 'image';
  const url = 'https://ludovic-cleuet.netlify.app/';
  const description =
    'Bonjour à vous 👋, si vous cherchez un développeur React Typescript en freelance je suis votre homme.';

  return (
    <>
      <Head title={title} image={image} url={url} description={description} />
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
          <motion.span style={{ position: 'relative' }}>
            React / TypeScript Developer
            <motion.div
              animate={shouldReduceMotion ? {} : { width: ['0%', '100%'] }}
              transition={{
                delay: 0.5,
                type: 'spring',
                duration: 1,
              }}
              initial={{ width: shouldReduceMotion ? '100%' : '0%' }}
              className="motion-div"
            />
          </motion.span>
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
        <div
          style={{
            marginTop: 100,
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <a
            href="https://www.linkedin.com/in/ludovic-cleuet/"
            target="_blank"
            className="a-link"
          >
            <div style={{ marginRight: 10 }}>Linkedin</div>
            <Linkedin isDark={isDark} />
          </a>
          <a
            href="http://github.com/DeCaelo"
            target="_blank"
            rel="noopener noreferrer"
            title="Mon Github pour voir ce que je code"
            className="a-link"
          >
            <div style={{ marginRight: 10 }}>Github</div>
            <Github isDark={isDark} />
          </a>
        </div>
      </div>
      <Starfield speed={starfieldSpeed} />
    </>
  );
}

export default App;
