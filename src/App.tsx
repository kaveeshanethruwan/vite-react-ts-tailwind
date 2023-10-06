import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`stopwatch`}>Stopwatch</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
