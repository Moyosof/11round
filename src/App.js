import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./screens/View";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
      <Route path="" element={<View/>} />


      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App