import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/api';
import { MoviesList } from 'components/MovieList/MovieList';
import SearchMovies from 'components/SearchMovies/SearchMovies';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('query');

    useEffect(() => {
        if (!movieName) {
            return;
        }
        (async () => {
            try {
                const data = await fetchSearchMovie(movieName);

                setMovies(data);
            } catch {
                console.log(Error);
            }
        })();
    }, [movieName]);

    const handleSearch = query => {
        setSearchParams({ query });
    };

    return (
        <>
            <div>
                <SearchMovies onSubmit={handleSearch} />
                <MoviesList movies={movies} />
            </div>
        </>
    );
};

export default Movies;