import axios from 'axios'
import { useState } from 'react'
let detailMovie = []
function DetailFilm(slug) {
    axios
        .get(`${process.env.REACT_APP_API_KEY}/phim/${slug}`)
        .then((res) => {
            const movie = res.data.movie
            const episodes = res.data.episodes
            detailMovie.push(movie)
            detailMovie.push(episodes)
        })
        .catch((err) => {
            console.log(err)
        })

    return detailMovie
}

export default DetailFilm
