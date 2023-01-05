import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";
import React from "react";
import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <nav>
            {/* Link : <a>와 같은 기능을 한다.*/}
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/input2">Input2</Link> | <Link to="/list">UserList</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/Input" element={<Input />} />
            <Route path="/Input2" element={<Input2 />} />
            <Route path="/list" element={<List />} />
        </Routes>
    </div>
  );
}

export default App;
