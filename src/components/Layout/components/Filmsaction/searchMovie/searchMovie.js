import classNames from 'classnames/bind'
import Styles from './searchMovie.module.scss'
import { NavLink, Route } from 'react-router-dom'
import { element } from 'prop-types'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { set } from 'firebase/database'
const cx = classNames.bind(Styles)
function SearchMovie() {
    const [listNation, setListNation] = useState(null)
    const [IdGenre, setIdGenre] = useState(null)
    const [IdNation, setIdNation] = useState(null)
    const [load, setLoad] = useState(true)
    const handleSearch = (e) => {
        e.preventDefault()
        console.log(IdGenre, IdNation)
    }
    const handleOnchangeGenre = (e) => {
        setIdGenre({
            id: e.target.value,
            name: e.target,
        })
    }
    const handleOnchangeNation = (e) => {
        setIdNation({
            id: e.target.value,
            name: e.target,
        })
    }
    useEffect(() => {
        const fetchingData = async () => {
            try {
                const { data: responsive } = await axios.get(
                    `${process.env.REACT_APP_API_KEY}/the-loai`,
                )
                const { data: res } = await axios.get(
                    `${process.env.REACT_APP_API_KEY}/quoc-gia`,
                )
                setListNation({
                    genre: [...responsive],
                    nation: [...res],
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchingData()
    }, [])
    if (listNation) {
        return (
            <form action="">
                <div className={cx('form-group')}>
                    <label for="genreFilms">Chon the loai</label>
                    <select
                        name="genre"
                        id="genreFilms"
                        onChange={(e) => handleOnchangeGenre(e)}
                    >
                        {listNation.genre.map((item, index) => (
                            <option value={item._id} key={index} title={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={cx('form-group')}>
                    <label for="nationfilms">Chon quoc gia</label>
                    <select
                        name="nation"
                        id="nationfilms"
                        onChange={(e) => handleOnchangeNation(e)}
                    >
                        {listNation.nation.map((item, index) => (
                            <option value={item._id} key={index} title={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button onClick={(e) => handleSearch(e)}>Loc phim</button>
            </form>
        )
    }
    return null
}

export default SearchMovie
