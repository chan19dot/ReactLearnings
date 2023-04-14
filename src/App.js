import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouterConfig";

import "./App.css";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>
        </header>
      </div>
  );
}

export default App;
