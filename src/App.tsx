import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
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
        <div className="skills">
          <pre>
            <code>
              <span className="let">let</span> skills = [ "
              <span className="body-skills">react</span>
              ", "<span className="body-skills">functional programming</span>",
              "<span className="body-skills">ux/ui</span>" ];
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
