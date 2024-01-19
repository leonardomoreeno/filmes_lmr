// O useState nos permite criar estados em um componente criado a partir de uma função, assim como o state presente em componentes criados a partir de classes.
// O useEffect() recebe como primeiro parâmetro uma função que será executada assim que o componente renderizar.
import { useState, useEffect } from "react";
import MovieCard from "../components/moviecard";


// IMPORTANDO AS INFORMAÇÕES DO .ENV
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const home = () => {
    const [lastMovies, setLastMovies] = useState([])

    //As palavras-chave async e await, são uma sintaxe que simplifica a programação assíncrona; é possível escrever código que funciona de forma assíncrona, porém é lido e estruturado de forma síncrona.
    const getToplastMoVies = async (url) => {
        // A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas.
        const res = await fetch(url);
        const data = await res.json();

        //Puxando as informações e JSON da API na DATA.results
        setLastMovies(data.results);
    };

    // PARA CHAMAR A FUNÇÃO CRIADA "LASTMOVIES" SUBSTITUI A CHAMADA DE FUNÇÃO TRADICIONAL DO JS function()
    useEffect(() => {

        //PUXANDO A MOVIEURL E A APIKEY PARA AS STRINGS, NO CENTRO ESTÁ A VARIÁVEL DA URL
        const lastMoviesURL = `${moviesURL}popular?${apiKey}&language=pt-BR`;

        getToplastMoVies(lastMoviesURL);

    }, []);

    return (        
        <div className="container">
            <h2 className="titulo">Filmes Populares</h2>
            <div className="row">
                {lastMovies.length === 0 && <p>Buscando...</p>}
                {lastMovies.length > 0 && lastMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
};

export default home;