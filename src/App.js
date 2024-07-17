import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./Pages/HomePage";
import Layout from "./Components/Layout";
import Resource from "./Pages/Resource";
import Login from "./Pages/Login";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="Resource" element={<Resource />} />
          <Route path="Pricing" element={<Pricing />} />
    </Route>
    <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
