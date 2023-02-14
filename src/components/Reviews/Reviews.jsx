import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import css from './reviews.module.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchMovieReviews(movieId);

                setReviews(data);
            } catch {
                console.log(Error);
            }
        })();
    }, [movieId]);

    return (
        <>
            {reviews && !!reviews.length ? (
                <ul className={css.ul}>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <b className={css.b}>Author: {author}</b>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>We don't have any reviews for this movie</div>
            )}
        </>
    );
};

export default Reviews;