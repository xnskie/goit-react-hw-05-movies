import PropTypes from 'prop-types';
import css from './movie-data.module.css'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { baseImgUrl } from 'services/constans';

export const MovieData = ({ url, tag, title, score, overview, genres }) => {
    return (
        <div className={css.container}>
            <div className={css.box}>
                <img className={css.poster} src={baseImgUrl + url} alt={tag} />

                <div className={css.boxData}>
                    <h2>{title}</h2>
                    <p>User Score: {Math.round(score * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h4>Genres</h4>
                    <ul className={css.listGenres}>
                        {genres.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className={css.title}>Additional information</p>
            <ul className={css.list}>
                <li>
                    <NavLink className={css.link} to="cast">Cast</NavLink>
                </li>
                <li>
                    <NavLink className={css.link} to="reviews">Reviews</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

MovieData.propTypes = {
    url: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};