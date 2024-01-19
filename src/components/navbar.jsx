// IMPORTEI O USESTATE PARA PEGAR A INFORMAÇÃO DA PESQUISA
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

//CRIEI A CONST 
const Navbar = () => {
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if(!search) return;

        navigate(`/search?q=${search}`)
        setSearch("")
    };

    return (
        <nav id="navbar">
            <h2 className="logo">
                <Link to="/">Filmes LMR</Link>
            </h2>
            <div className="containernav">
                <form  onSubmit={handleSubmit}>
                    <input className="pesquisa" type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)}
                        value={search} />
                    <button className="butaopesq" type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
            </div>            
        </nav>
        
    )
}

export default Navbar