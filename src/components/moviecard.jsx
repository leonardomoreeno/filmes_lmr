import '../App.css'

// IMPORTANDO A LOGICA DE LINKS NOVAMENTE
import { Link } from "react-router-dom";

//IMPORTANDO OS ICONS
import { FaStar } from "react-icons/fa";

//VARIAVEL PARA PUXAR AS INFORMAÇÕES DO .ENV
const imageURL = import.meta.env.VITE_IMG;

//VARIAVEL MOVIECARD QUE VAI PEGAR A INFORMAÇÃO MOVIE E O SHOWLINK PARA SEMPRE MOSTRAR O LINK COMO PADRÃO
// AGORA E COLOQUEI AS VARIAVEIS DO JSON - PUXANDO A IMAGEM DO FILME, O TITULO E OUTRAS INFORMAÇÕES DA API
const MovieCard = ({ movie, showLink = true }) => {
    if (!movie.poster_path) {
        // Se for nulo, não renderiza o card
        return null;
    }
    // criei uma constante e atribui a ela o valor do movie.vote_average logo em seguida chamei o toFixed(1) para selecionar apenas 1 decimal após o "."
    const roundedVoteAverage = movie.vote_average.toFixed(1);
    return (
        <div className="moviecard">
            <Link to={`/movie/${movie.id}`}><img className="imagemfilme" src={imageURL + movie.poster_path} alt={movie.title} /></Link>
            <span className="spannota"><FaStar /> {roundedVoteAverage}</span>
            <h2 className="titulofilme">{movie.title}</h2>         
            
        </div>
    )
}

export default MovieCard