import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Informacion from "./components/Informacion";
import Tachos from "./components/Tachos";
import Reciclaje from "./img/Reciclaje.PNG";
import { Introduccion } from "./components/Introduccion";
import { Historial } from "./components/Historial";
import { createContext, useContext, useState } from 'react';
import HistorialProvider from "./context/HistorialContext";

function App() {
  return (
    <HistorialProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Introduccion />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/informacion" element={<Informacion />}></Route>
            <Route path="/tachos" element={<Tachos />}></Route>
            <Route path="/historial" element={<Historial />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HistorialProvider>
  );
}

export default App;