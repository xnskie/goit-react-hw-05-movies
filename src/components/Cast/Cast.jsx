import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import { baseImgUrl } from 'services/constans';
import css from './cast.module.css'

const placeHolder =
    'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';
const Cast = () => {
    const [actors, setActors] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchMovieCredits(movieId);

                setActors(data);
            } catch {
                console.log(Error);
            }
        })();
    }, [movieId]);
    return (
        <>
            {actors && !!actors.length ? (
                <ul className={css.ul}>
                    {actors.map(({ id, profile_path, name }) => (
                        <li className={css.li} key={id}>
                            <img className={css.img}
                                src={profile_path ? baseImgUrl + profile_path : placeHolder}
                                alt={name}
                            />
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>There is no information about the cast of the movie</div>
            )}
        </>
    );
};

export default Cast;