import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import css from './search-movies.module.css'

const SearchMovies = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit(query);
    };

    return (
        <div className={css.div}>
            <form className={css.form} onSubmit={handleSubmit}>
                <button className={css.btn} type="submit">
                    <AiOutlineSearch />
                </button>

                <input className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    onChange={handleChange}
                    value={query}
                />
            </form>
        </div>
    );
};

export default SearchMovies;