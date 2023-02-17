import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import css from './movie-list.module.css'

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <>
            <ul className={css.list}>
                {movies.map(movie => (
                    <li className={css.item} key={movie.id}>
                        <a className={css.link} href={`/goit-react-hw-05-movies/movies/${movie.id}`} state={{ from: location }}>
                            {movie.title}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};