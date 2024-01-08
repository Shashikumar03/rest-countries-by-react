import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./page/Home";
import Details from "./page/Details";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/country/:id`} element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
