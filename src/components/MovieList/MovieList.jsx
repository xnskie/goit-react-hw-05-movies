import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './movie-list.module.css'

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <>
            <ul className={css.list}>
                {movies.map(movie => (
                    <li className={css.item} key={movie.id}>
                        <NavLink className={css.link} to={`/movies/${movie.id}`} state={{ from: location }}>
                            {movie.title}
                        </NavLink>
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