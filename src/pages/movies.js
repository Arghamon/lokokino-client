import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppLoader from '../components/AppLoader';
import AppMovies from '../components/AppMovies.js/AppMovies';
import { FETCH_MOVIES } from '../store/movies/actions';

export default function Movies() {

    const { loading, movieList } = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FETCH_MOVIES(1));
    }, []);

    if (loading) return <AppLoader />

    return (
        <div>
           <AppMovies movies={movieList}/>
        </div>
    )
}
