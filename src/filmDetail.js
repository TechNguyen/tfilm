import axios from 'axios'
import { useState } from 'react'
function DetailFilm(slug) {
    const [dataMovie, setDataMovie] = useState([])
    axios
        .get(`${process.env.REACT_APP_API_KEY}/phim/${slug}`)
        .then((res) => {
            const movie = res.data.movie
            const episodes = res.data.episodes
            setDataMovie(movie, episodes)
        })
        .catch((err) => {
            console.log(err)
        })

    return dataMovie
}

export default DetailFilm
