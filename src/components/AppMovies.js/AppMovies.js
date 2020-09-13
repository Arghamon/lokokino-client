import React from 'react'

export default function AppMovies({ movies }) {

    return (
        <div>
            {movies.map((item, index) => <span key={item._id}>{index} {item.title}<br /></span>)}
        </div>
    )
}
