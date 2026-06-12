import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ContractorDemo from "./pages/ContractorDemo";
import PastWork from "./pages/PastWork";

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <header className="navbar">
          <Link to="/" className="brand">
            <img src="/karven-logo.png" alt="Karven Systems logo" />
            <span>Karven Systems</span>
          </Link>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/contractor-demo">Contractor Demo</Link>
            <Link to="/past-work">Past Work</Link>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contractor-demo" element={<ContractorDemo />} />
            <Route path="/past-work" element={<PastWork />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;