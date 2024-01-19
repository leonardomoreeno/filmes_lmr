import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/moviecard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import '../App.css'

const search = () => {
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    //As palavras-chave async e await, são uma sintaxe que simplifica a programação assíncrona; é possível escrever código que funciona de forma assíncrona, porém é lido e estruturado de forma síncrona.
    const getSearchedMovies = async (url) => {
        // A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas.
        const res = await fetch(url);
        const data = await res.json();

        //Puxando as informações e JSON da API na DATA.results
        setMovies(data.results);
    };

    // PARA CHAMAR A FUNÇÃO CRIADA "LASTMOVIES" SUBSTITUI A CHAMADA DE FUNÇÃO TRADICIONAL DO JS function()
    useEffect(() => {

        //PUXANDO A MOVIEURL E A APIKEY PARA AS STRINGS, NO CENTRO ESTÁ A VARIÁVEL DA URL
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR`;

        getSearchedMovies(searchWithQueryURL);

    }, [query]);

    return(
        <div className="container">
            <h2 className="titulo">Resultado para pesquisa: {query}</h2>
            <div className="row">
                {movies.length === 0 && <p>Buscando...</p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
};

export default search;