import classNames from 'classnames/bind'
import Styles from './searchMovie.module.scss'
import { NavLink, Route, useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate()
    const handleSearch = (e) => {
        e.preventDefault()
        if (IdGenre === null) {
            setIdGenre({
                id: listNation.genre[0]._id,
                name: listNation.genre[0].name,
            })
        }
        if (IdNation === null) {
            setIdNation({
                id: listNation.nation[0]._id,
                name: listNation.nation[0].name,
            })
        }
        navigate(`phim/${IdGenre.name}/${IdNation.name}`)
    }
    const handleOnchangeGenre = (e) => {
        setIdGenre({
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        })
    }
    const handleOnchangeNation = (e) => {
        setIdNation({
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
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
            <form action="" className={cx('form-search')}>
                <div className={cx('form-group')}>
                    <label for="genreFilms">Thể loại</label>
                    <select
                        name="genre"
                        id="genreFilms"
                        onChange={(e) => handleOnchangeGenre(e)}
                        className={cx('select-data')}
                    >
                        {listNation.genre.map((item, index) => (
                            <option value={item._id} key={index} title={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={cx('form-group')}>
                    <label for="nationfilms">Quốc Gia</label>
                    <select
                        name="nation"
                        id="nationfilms"
                        onChange={(e) => handleOnchangeNation(e)}
                        className={cx('select-data')}
                    >
                        {listNation.nation.map((item, index) => (
                            <option value={item._id} key={index} title={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button onClick={(e) => handleSearch(e)}>Duyet p</button>
            </form>
        )
    }
    return null
}

export default SearchMovie
