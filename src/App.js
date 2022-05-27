import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./features/counter/Counter";
import DataFlow from "./features/dataFlow/DataFlow";
import Home from "./Home";

function App() {
  return (
    <main className="App">
      <h1>Welcome to React Redux App!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="dataFlow" element={<DataFlow />} />
      </Routes>
    </main>
  );
}

export default App;
