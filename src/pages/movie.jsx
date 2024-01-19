import { useState, useEffect } from "react";

//USO DO HOOK
import { useParams } from "react-router-dom";


import MovieCard from "../components/moviecard";

import '../App.css'

// IMPORTANDO AS INFORMAÇÕES DO .ENV
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const movie = () => {    
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {

        // A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas.
        const res = await fetch(url);
        const data = await res.json();

        //Puxando as informações e JSON da API na DATA.results
        setMovie(data);
    };

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR`;
        getMovie(movieUrl);
    }, [])


    //UTILIZEI O .slice no movie.release_date para selecionar apenas as 4 primeiras letras/números da string

    return (        
        <div className="moviepag">
            {movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />                    
                    <div className="inforow">
                        <h3 className="infos">
                            Lançamento: {movie.release_date.slice(0, 4)}
                        </h3>
                        <h3 className="infos">
                            Duração: {movie.runtime} minutos
                        </h3> 
                        <h3 className="infos">
                            Sinopse: {movie.overview}
                        </h3>                                                
                    </div>
                </>
            )}
        </div>
    );
};

export default movie;