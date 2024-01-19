//IMPORTEI O LINK DO REACT-ROUTER-DOM PARA PODER INSERIR ELES NO APP
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";


import './App.css'

function App() {
  
  return (
    <div className="App">
      <Navbar />      
      <Outlet />
    </div>
  )
}


// exportação do App.jsx para os demais arquivos! é necessário fazer o export!!!!!!
export default App

// Sinopse: {movie.overview}<br/><br/>
//Data de lançamento: {movie.release_date}<br/><br/>