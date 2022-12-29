import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
//pages
import { Homepage } from './Pages/Homepage';
import { Carrinho } from './Pages/Carrinho';

function App() {
  const [theme] = useThemeHook();
  return (
    <BrowserRouter>
      <main className={theme? 'bg-black' : 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/Carrinho" element={<Carrinho/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;