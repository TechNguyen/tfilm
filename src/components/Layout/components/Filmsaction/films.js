import classNames from 'classnames/bind'
import Styles from './films.module.scss'
import listbanner from '~/listBanner'
import { useCallback, useEffect, useState } from 'react'
import SearchMovie from './searchMovie/searchMovie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter,
    NavLink,
    Route,
    Router,
    Routes,
    useNavigate,
} from 'react-router-dom'
import axios from 'axios'
import ListSelectMovie from './listSelectMovie/listSelectMovie'
import MainListFilm from './MainListFilm/MainListFilm'
const cx = classNames.bind(Styles)
function Films({ title }) {
    const [showFilmAction, setAction] = useState(false)
    const [listFilm, setListfilm] = useState([])
    const [page, setPage] = useState(1)
    const navigate = useNavigate()
    const handleEnterFilms = () => {
        showFilmAction === true ? setAction(false) : setAction(true)
    }
    const handleNext = (page) => {
        setPage(page + 1)
    }
    const handlePre = (page) => {
        if (page === 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }
    useEffect(() => {
        const fetchingData = async () => {
            try {
                const { data: responsive } = await axios.get(
                    `${process.env.REACT_APP_API_KEY}/danh-sach/phim-moi-cap-nhat?page=${page}`,
                )
                setListfilm([])
                for (let x of responsive.items) {
                    const { data: res } = await axios.get(
                        `https://ophim1.com/phim/${x.slug}`,
                    )
                    setListfilm((pre) => [...pre, res.movie])
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchingData()
    }, [page])

    if (listFilm) {
        return (
            <div className={cx('movie_banner_wrapper')}>
                <SearchMovie />
                <p className={cx('movie-title')}>{title}</p>
                <MainListFilm data={listFilm} />
                <div className={cx('movie__pagination')}>
                    <button
                        className={cx('movie__num-page')}
                        onClick={() => handlePre(page)}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                        className={cx('movie__num-page')}
                        onClick={() => handlePre(0)}
                    >
                        1
                    </button>
                    <button
                        className={cx('movie__num-page')}
                        onClick={() => handlePre(1)}
                    >
                        2
                    </button>
                    <button
                        className={cx('movie__num-page')}
                        onClick={() => handlePre(2)}
                    >
                        3
                    </button>
                    <button
                        className={cx('movie__num-page')}
                        onClick={() => handlePre(3)}
                    >
                        4
                    </button>
                    <button
                        className={cx('movie__num-page')}
                        onClick={() => handlePre(4)}
                    >
                        5
                    </button>
                    <button
                        className={cx('movie__num-page')}
                        onClick={() => handleNext(page)}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        )
    }
    return null
}

export default Films
