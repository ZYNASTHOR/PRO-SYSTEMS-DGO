import { useState } from "react";
import reactLogo from "./assets/react.svg";
import PSDGO from "./assets/PSDGO.png";
import "./App.css";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://www.facebook.com/ProSystemsDgo/" target="_blank">
          <img src={PSDGO} className="logo-psdgo" alt="Vite logo" />
        </a>
      </div>
      <div>
        <Link to={'/services'} >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </div>

      <h1>PRO SYSTEMS DGO</h1>
      <CustomButton />
      {/* <h1>Vite + React</h1>
      <h3>Vite + React</h3>
      <h4>Vite + React</h4>
      <h5>Vite + React</h5>
      <h6>Vite + React</h6>
      <div> ASDASD </div>
      <span> ASDASD </span>
      <p> XD </p>
      <text> ss </text> */}
      <div className="card">
        <p>
          {" "}
          Mensaje de <strong className="read-the-docs">
            {" "}
            Bienvenida{" "}
          </strong>{" "}
        </p>
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
    </>
  );
}

export default App;
