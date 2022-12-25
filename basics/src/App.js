import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import React from "react";
import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <nav>
            {/* Link : <a>와 같은 기능을 한다.*/}
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
        </Routes>
    </div>
  );
}

export default App;
