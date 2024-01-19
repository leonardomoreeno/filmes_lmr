import React from 'react'
import ReactDOM from 'react-dom/client'

// IMPORTANDO O APP.JSX QUE FOI FEITO EXPORT NO ARQUIVO APP.JSX
import App from './App.jsx'

// IMPORTANDO A ROTA DO NAVEGADOR, E PUXANDO DO REACT-ROUTER-DOM QUE FOI INSTALANDO NA APLICAÇÃO 
// IMPORTANDO TAMBÉM AS PAGES QUE CRIEI
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Movie from "./pages/movie.jsx";
import Search from "./pages/search.jsx";

import './index.css'


//DEFININDO AS ROTAS ESPECIFICADAS ACIMA!
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
